<script setup lang="ts">
interface Props {
  disabled?: boolean
}

defineProps<Props>()

const route = useRoute()
const searchFromUrl = computed<string | undefined>(
  () => route.query.search ? decodeURIComponent(route.query.search as string) : undefined,
)

const search = ref<string>(searchFromUrl.value ?? '')

watchDebounced(() => search.value, (value) => {
  navigateTo({
    ...route,
    query: { ...route.query, search: value ? encodeURIComponent(value) : undefined },
  })
}, {
  debounce: 500,
})

watch(() => searchFromUrl.value, (value) => {
  if (!value && search.value) {
    search.value = ''
  }
})
</script>

<template>
  <div
    class="relative shadow-default rounded-sm"
    :class="{ 'opacity-30': disabled }"
  >
    <input
      v-model="search"
      class="w-full py-2 ps-3 pe-9 rounded-sm"
      aria-label="Поиск статей"
      :disabled
    >

    <SvgoSearch
      class="text-gray absolute right-3 top-0 translate-y-1/2"
      style="width:20px;height:20px;"
    />
  </div>
</template>
