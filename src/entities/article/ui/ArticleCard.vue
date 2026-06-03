<script setup lang="ts">
import type { Article } from '../model/Article'

defineProps<Article>()
</script>

<template>
  <article class="flex flex-col shadow-md pt-7 px-7 pb-4 rounded-sm">
    <span class="block mb-6 text-lg font-bold text-accent leading-tight">{{ title }}</span>
    <span class="block mb-5 text-sm">{{ description }}</span>

    <NuxtLink
      class="w-fit mb-5 inline-block text-sm underline text-accent"
      to="/"
    >
      Подроблее
    </NuxtLink>

    <footer class="text-gray flex items-center justify-between  ">
      <a
        href="www.mos.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ source.url }}
      </a>

      <span>{{ date }}</span>
    </footer>
  </article>
</template>

<style scoped>

</style>
