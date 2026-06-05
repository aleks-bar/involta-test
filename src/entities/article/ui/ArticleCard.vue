<script setup lang="ts">
import type { Article } from '../model/Article'
import { dateISOtoShort } from '@shared/utils/date'

defineProps<Article>()
</script>

<template>
  <article class="flex flex-col shadow-default pt-7 px-7 pb-4 rounded-sm">
    <span class="block mb-6 text-lg font-bold text-accent leading-tight">{{ title }}</span>
    <span
      v-if="description"
      class="block mb-5 text-sm"
    >
      {{ description }}
    </span>

    <NuxtLink
      class="w-fit mb-5 inline-block text-sm underline text-accent"
      to="/"
    >
      Подроблее
    </NuxtLink>

    <footer class="text-gray flex items-center justify-between  ">
      <a
        :href="source.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ source.label }}
      </a>

      <span>{{ dateISOtoShort(date) }}</span>
    </footer>
  </article>
</template>

<style scoped>

</style>
