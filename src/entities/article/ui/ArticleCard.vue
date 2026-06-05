<script setup lang="ts">
import type { Article } from '../model/Article'
import { dateISOtoShort } from '@shared/utils/date'

interface Props extends Article {
  withImage?: boolean
}

const {
  withImage = false,
} = defineProps<Props>()
</script>

<template>
  <article class="flex flex-col shadow-default pt-7 px-7 pb-4 rounded-sm">
    <div
      class="flex items-start flex-col md:flex-row flex-grow"
      :class="{
        'mb-7': withImage,
        'mb-5': !withImage,
      }"
    >
      <template v-if="withImage">
        <img
          class="w-full aspect-video md:aspect-auto md:w-[200px] md:h-[100px] block object-cover mb-5 md:mb-auto md:me-7 shrink-0"
          :src="image"
          alt=""
        >
      </template>

      <div class="flex flex-col h-full">
        <NuxtLink
          v-if="withImage"
          class="block text-lg font-bold text-accent leading-tight line-clamp-3"
          :to="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ title }}
        </NuxtLink>
        <span
          v-else
          class="block text-lg font-bold text-accent leading-tight line-clamp-3"
        >{{ title }}</span>

        <div
          class="text-sm flex items-end flex-grow pt-5"
          :class="{
            'md:min-h-[85px] mb-5': !withImage,
          }"
        >
          <span class="line-clamp-2">{{ description }}</span>
        </div>

        <NuxtLink
          class="w-fit inline-block text-sm underline text-accent"
          :class="{
            'md:hidden': withImage,
          }"
          :to="url"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подроблее
        </NuxtLink>
      </div>
    </div>

    <footer class="text-gray flex items-center justify-between">
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
