<script setup lang="ts">
import { ArticlesRefresh } from '@features/articles-refresh'

const route = useRoute()
</script>

<template>
  <header>
    <div class="container">
      <div class="border-b py-9 border-gray-border">
        <div class="flex items-center gap-7">
          <h1 class="text-4xl font-bold">
            {{ route.meta.h1 ?? 'Главная' }}
          </h1>

          <articles-refresh />
        </div>
      </div>
    </div>
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped>

</style>
