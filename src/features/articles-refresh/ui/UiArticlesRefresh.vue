<script setup lang="ts">
import { useArticlesStore } from '@entities/article'
import { appRouters } from '@shared/const/appRouters'

const articlesStore = useArticlesStore()

const refresh = async () => {
  await articlesStore.getArticles()
  await navigateTo(appRouters.Home)
}
</script>

<template>
  <button
    class="button-refresh"
    :disabled="articlesStore.loading"
    @click="refresh"
  >
    <SvgoRefresh
      class="text-accent"
      :style="{ width: '20px', height: '16px' }"
    />
  </button>
</template>

<style scoped>
.button-refresh {
  @apply border-none bg-none shadow-default rounded-full w-10 h-10 flex
  items-center justify-center hover:opacity-75 transition-opacity;
}
</style>
