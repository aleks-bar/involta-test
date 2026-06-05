<script setup lang="ts">
const route = useRoute()

const search = ref<string>('')

watchDebounced(() => search.value, (value) => {
  navigateTo({
    ...route,
    query: { ...route.query, search: value || undefined },
  })
}, {
  debounce: 500,
})
</script>

<template>
  <div class="relative max-w-[320px] shadow-default rounded-sm">
    <input
      v-model="search"
      class="w-full py-2 ps-3 pe-9 rounded-sm"
      aria-label="Поиск статей"
    >

    <SvgoSearch
      class="text-gray absolute right-3 top-0 translate-y-1/2"
      style="width:20px;height:20px;"
    />
  </div>
</template>

<style scoped>

</style>
