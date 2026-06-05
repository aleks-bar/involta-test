<script setup lang="ts">
import { type ArticlesDisplay, useArticlesStore } from '@entities/article'

const articlesStore = useArticlesStore()

const setArticlesDisplay = (variant: ArticlesDisplay) => {
  articlesStore.articlesDisplay = variant
}
</script>

<template>
  <div class="flex items-center gap-1">
    <button
      class="p-1 text-gray-icon hover:opacity-70 transition-opacity"
      @click="setArticlesDisplay('list')"
    >
      <SvgoDisplayList
        :class="{ 'text-accent': articlesStore.articlesDisplay === 'list' }"
        style="margin-bottom:0;width: 18px;height: 18px;"
      />
    </button>
    <button
      class="p-1 text-gray-icon hover:opacity-70 transition-opacity"
      @click="setArticlesDisplay('grid')"
    >
      <SvgoDisplayGrid
        :class="{ 'text-accent': articlesStore.articlesDisplay === 'grid' }"
        style="margin-bottom:0;width: 18px;height: 18px;"
      />
    </button>
  </div>
</template>

<style scoped>

</style>
