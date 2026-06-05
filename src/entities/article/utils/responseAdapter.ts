import type { Article } from '@entities/article/model/Article'
import { comparatorByArticleDateDESC } from '@entities/article/utils/sort'
import type { GetArticlesResponse } from '@entities/article/api/articlesModule'
import type { StoreArticlesResponse } from '@entities/article/model/StoreArticlesResponse'
import { ARTICLES_SOURCES } from '@entities/article'

export const articlesResponseToStoreResponse = (data: GetArticlesResponse | null): StoreArticlesResponse => {
  const allSources = ARTICLES_SOURCES.map(source => source.type)

  const response: StoreArticlesResponse = {
    allArticles: [],
    response: data,
    sources: [],
  }

  if (data) {
    const sourcesNotNullable = allSources.filter(source => !!data[source].articles)

    response.allArticles = Object.values(data)
      .filter(source => !!data[source.type].articles)
      .map(source => source.articles as Article[])
      .flat()
      .sort(comparatorByArticleDateDESC)

    response.sources = ARTICLES_SOURCES
      .filter(source => sourcesNotNullable.includes(source.type))
      .map(source => ({
        label: source.label,
        type: source.type,
      }))
  }

  return response
}
