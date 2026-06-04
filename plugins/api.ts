import { $fetch } from 'ofetch'
import { ArticlesModule } from '@entities/article'

export interface ApiInstance {
  articles: ArticlesModule
}

export default defineNuxtPlugin({
  name: 'api-plugin',
  order: 1,

  async setup() {
    const apiFetcher = $fetch.create({
      baseURL: '/api/',
    })

    const modules: ApiInstance = {
      articles: new ArticlesModule(apiFetcher),
    }

    return {
      provide: {
        api: modules,
      },
    }
  },
})
