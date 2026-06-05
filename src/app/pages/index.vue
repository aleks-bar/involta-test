<script setup lang="ts">
import { type Article, ArticleCard, type ArticleSourceType, ArticlesSources, useArticlesStore } from '@entities/article'

definePageMeta({
  h1: 'Список новостей',
})

const route = useRoute()
const activeSource = computed<string | undefined>(() => route.query.source ? route.query.source as string : undefined)

const articlesStore = useArticlesStore()

const { data } = await useAsyncData('articles-data', () => articlesStore.getArticles())

const articles = computed<Article[]>(() => {
  if (!data.value) return []

  if (activeSource.value && data.value.response && activeSource.value in data.value.response) {
    const sourceType = activeSource.value as ArticleSourceType
    return data.value.response[sourceType].articles ?? []
  }

  return data.value.allArticles
})

const sources = computed(() => data.value?.sources ?? [])
</script>

<template>
  <div class="container">
    <div class="py-6 pb-7">
      <articles-sources
        :active-source="activeSource"
        :sources="sources"
      />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <article-card
        v-for="(article, index) in articles.slice(0, 4)"
        :key="index"
        v-bind="article"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
