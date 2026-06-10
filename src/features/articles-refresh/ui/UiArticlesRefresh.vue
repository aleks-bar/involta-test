<script setup lang="ts">
import { appRouters } from '@shared/const/appRouters'
import { useArticlesStore } from '@entities/article'

interface Props {
  disabled?: boolean
}

defineProps<Props>()
const articlesStore = useArticlesStore()

const refresh = async () => {
  await articlesStore.articlesRefresh()
  await navigateTo(appRouters.Home)
}
</script>

<template>
  <button
    class="button-refresh"
    :class="{ 'opacity-30': disabled }"
    :disabled
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
