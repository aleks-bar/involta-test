import type { StoreArticlesResponse } from '@entities/article/model/StoreArticlesResponse'
import { articlesResponseToStoreResponse } from '@entities/article/utils/responseAdapter'
import { getRss } from '~/server/utils/getRss'
import type { ArticlesDisplay } from '@entities/article/model/ArticlesDisplay'

export const useArticlesStore = defineStore('articles', () => {
  const { $api } = useNuxtApp()
  const loading = ref<boolean>(false)
  const articlesDisplay = ref<ArticlesDisplay>('grid')
  const postsPerPage: number = 4

  /**
   * @description Получение подготовленных rss данных
   * @see StoreArticlesResponse
   */
  const getArticles = async (): Promise<StoreArticlesResponse | null> => {
    loading.value = true

    try {
      const data = import.meta.client ? await $api.articles.getArticles() : await getRss()
      return articlesResponseToStoreResponse(data)
    }
    catch {
      console.error('Failed to fetch articles')
      return null
    }
    finally {
      loading.value = false
    }
  }

  return {
    loading,
    articlesDisplay,
    postsPerPage,
    getArticles,
  }
}, {
  persist: {
    pick: ['articlesDisplay'],
  },
})
