<script setup lang="ts">
import {
  type Article,
  ArticleCard,
  type ArticleSourceType,
  ArticlesSources,
  getArticlesByPage,
  predicateByArticleSearch,
  useArticlesStore,
} from '@entities/article'

import { Pagination } from '@shared/ui/Pagination'

definePageMeta({
  h1: 'Список новостей',
})

const articlesStore = useArticlesStore()
const route = useRoute()
const activeSource = computed<string | undefined>(() => route.query.source ? route.query.source as string : undefined)
const search = computed<string | undefined>(
  () => route.query.search ? decodeURIComponent(route.query.search as string) : undefined,
)
const currentPage = computed<number>(() => {
  if (!route.query.page) return 1
  const page = +route.query.page

  if (Number.isNaN(page) || page < 1) return 1
  return page
})

const { data } = await useAsyncData('articles-data', () => articlesStore.getArticles())

/** Получение списка Article относительно выбранного ресурса */
const articlesList = computed<Article[]>(() => {
  if (!data.value) return []

  if (activeSource.value && data.value.response && activeSource.value in data.value.response) {
    const sourceType = activeSource.value as ArticleSourceType
    return data.value.response[sourceType].articles ?? []
  }

  return data.value.allArticles
})

const sources = computed(() => data.value?.sources ?? [])

/** Отфилтрованные по поиску новости */
const articlesBySearch = computed(() => {
  return !search.value
    ? articlesList.value
    : articlesList.value.filter(article => predicateByArticleSearch(article, search.value as string))
})

const articles = computed(() => getArticlesByPage(articlesBySearch.value, currentPage.value, articlesStore.postsPerPage))
</script>

<template>
  <div class="container">
    <div class="py-6 pb-7 flex items-center justify-between">
      <articles-sources
        :active-source="activeSource"
        :sources="sources"
      />
      <div>display changer</div>
    </div>

    <template v-if="articles.length">
      <div class="grid grid-cols-2 gap-5">
        <article-card
          v-for="(article, index) in articles"
          :key="index"
          v-bind="article"
        />
      </div>

      <pagination
        class="mt-12"
        :current-page="currentPage"
        :total-posts="articlesBySearch.length"
        :disabled="articlesStore.loading"
        :posts-per-page="articlesStore.postsPerPage"
      />
    </template>

    <div
      v-else
      class="py-20 flex justify-center"
    >
      <span>Новости отсутствуют</span>
    </div>
  </div>
</template>

<style scoped>

</style>
