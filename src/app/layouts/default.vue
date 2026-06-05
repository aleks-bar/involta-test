<script setup lang="ts">
import { ArticlesRefresh } from '@features/articles-refresh'
import { ArticlesSearch } from '@features/articles-search'
import { useArticlesStore } from '@entities/article'

const route = useRoute()
const articlesStore = useArticlesStore()
</script>

<template>
  <header>
    <div class="container">
      <div class="border-b py-9 border-gray-border flex items-center justify-between">
        <div class="flex items-center gap-7">
          <h1 class="text-4xl font-bold">
            {{ route.meta.h1 ?? 'Главная' }}
          </h1>

          <articles-refresh :disabled="articlesStore.loading" />
        </div>

        <articles-search :disabled="articlesStore.loading" />
      </div>
    </div>
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped>

</style>
