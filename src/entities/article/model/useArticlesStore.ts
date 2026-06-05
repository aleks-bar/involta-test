import type { StoreArticlesResponse } from '@entities/article/model/StoreArticlesResponse'
import { articlesResponseToStoreResponse } from '@entities/article/utils/responseAdapter'
import { getRss } from '~/server/utils/getRss'

export const useArticlesStore = defineStore('articles', () => {
  const { $api } = useNuxtApp()
  const _loading = ref<boolean>(false)
  const postsPerPage: number = 4

  const getArticles = async (): Promise<StoreArticlesResponse | null> => {
    _loading.value = true

    try {
      const data = import.meta.client ? await $api.articles.getArticles() : await getRss()
      return articlesResponseToStoreResponse(data)
    }
    catch {
      console.error('Failed to fetch articles')
      return null
    }
    finally {
      _loading.value = false
    }
  }

  return {
    loading: computed(() => _loading.value),
    postsPerPage,
    getArticles,
  }
})
