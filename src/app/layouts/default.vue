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
      <div
        class="border-b py-6 md:py-9 border-gray-border flex flex-col md:flex-row gap-5 items-center justify-between"
      >
        <div class="flex items-center justify-between md:justify-start gap-7 w-full md:w-auto">
          <h1 class="text-2xl md:text-4xl font-bold">
            {{ route.meta.h1 ?? 'Главная' }}
          </h1>

          <articles-refresh :disabled="articlesStore.loading" />
        </div>

        <articles-search
          class="w-full md:max-w-[320px]"
          :disabled="articlesStore.loading"
        />
      </div>
    </div>
  </header>

  <main class="pb-20">
    <slot />
  </main>
</template>

<style scoped>

</style>
