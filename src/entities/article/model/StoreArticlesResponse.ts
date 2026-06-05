import type { Article } from '@entities/article/model/Article'
import type { GetArticlesResponse } from '@entities/article/api/articlesModule'
import type { ArticlesSource } from '@entities/article/model/ArticlesSource'

export type SourcesItem = Omit<ArticlesSource, 'url'>

export interface StoreArticlesResponse {
  allArticles: Article[]
  response: GetArticlesResponse | null
  sources: SourcesItem[]
}
