<script setup lang="ts">
import type { SourcesItem } from '@entities/article/model/StoreArticlesResponse'
import { appRouters } from '@shared/const/appRouters'

interface Props {
  sources: SourcesItem[]
  activeSource?: string
}

defineProps<Props>()

const route = useRoute()
</script>

<template>
  <div class="flex items-center gap-4">
    <NuxtLink
      class="articles-source"
      :class="{ 'articles-source--active': !activeSource }"
      :to="{
        ...route,
        path: appRouters.Home,
        query: { ...route.query, source: undefined, page: undefined },
      }"
    >
      Все
    </NuxtLink>

    <NuxtLink
      v-for="source in sources"
      :key="source.type"
      class="articles-source"
      :class="{ 'articles-source--active': activeSource === source.type }"
      :to="{
        ...route,
        query: { ...route.query, source: source.type, page: undefined },
      }"
    >
      {{ source.label }}
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.articles-source {
  @apply text-accent text-sm font-bold;

  &--active {
    @apply text-black;
  }
}
</style>
