<script setup lang="ts">
import { calculatePagination } from '../utils/calculatePagination'
import type { RouteLocation } from 'vue-router'

interface Props {
  currentPage: number
  totalPosts: number
  postsPerPage: number
  disabled?: boolean
}

const route = useRoute()
const props = defineProps<Props>()

const paginationData = computed(() => calculatePagination(props.totalPosts, props.postsPerPage, props.currentPage))

const getPageRoute = (page: number): RouteLocation => {
  return {
    ...route,
    query: { ...route.query, page: `${page}` },
  }
}
</script>

<template>
  <div class="flex items-center justify-center gap-1">
    <template v-if="paginationData.firstPage">
      <NuxtLink
        class="py-2 px-3 text-lg font-bold"
        :class="{ 'opacity-30': disabled }"
        :to="getPageRoute(paginationData.firstPage)"
        @click.prevent="disabled ? $event.preventDefault() : null"
      >
        {{ paginationData.firstPage }}
      </NuxtLink>

      <span class="py-2 px-3 text-lg font-bold">...</span>
    </template>

    <NuxtLink
      v-for="page in paginationData.pages"
      :key="page"
      class="py-2 px-3 text-lg font-bold"
      :class="{
        'text-accent': page === currentPage,
        'opacity-30': disabled,
      }"
      :to="getPageRoute(page)"
      @click.prevent="disabled ? $event.preventDefault() : null"
    >
      {{ page }}
    </NuxtLink>

    <template v-if="paginationData.lastPage">
      <span class="py-2 px-3 text-lg font-bold">...</span>

      <NuxtLink
        class="py-2 px-3 text-lg font-bold"
        :to="getPageRoute(paginationData.lastPage)"
        :class="{ 'opacity-30': disabled }"
        @click.prevent="disabled ? $event.preventDefault() : null"
      >
        {{ paginationData.lastPage }}
      </NuxtLink>
    </template>
  </div>
</template>

<style scoped>

</style>
