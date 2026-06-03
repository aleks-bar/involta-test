<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <header>
    <div>{{ route.meta.h1 ?? 'Главная' }}</div>
  </header>

  <main>
    <slot />
  </main>
</template>

<style scoped>

</style>