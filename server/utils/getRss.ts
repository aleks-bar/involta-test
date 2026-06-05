import Parser from 'rss-parser'
import { ARTICLES_SOURCES } from '~/src/entities/article/const/articlesSources'
import { lentaRssItemToArticle, mosRssItemToArticle } from '~/src/entities/article/utils/adapters'
import { comparatorByArticleDateDESC } from '~/src/entities/article/utils/sort'
import type { GetArticlesResponse } from '~/src/entities/article/api/articlesModule'
import type { ArticleSourceType, ArticlesSource } from '~/src/entities/article/model/ArticlesSource'
import type { LentaRssResponse, MosRssResponse } from '~/src/entities/article/model/Rss'
import type { ParseURLResponse } from '~/src/shared/libs/rss-parser'
import type { Article } from '~/src/entities/article'

type ArticlesSourceData = Pick<ArticlesSource, 'type'> & {
  promise: ParseURLResponse
}

export const getRss = async (): Promise<GetArticlesResponse> => {
  try {
    const parser = new Parser()

    const sources: ArticlesSourceData[] = ARTICLES_SOURCES.map(source => ({
      type: source.type,
      promise: parser.parseURL(source.url),
    }))

    const [
      mosResponse,
      lentaResponse,
    ] = await Promise.allSettled(sources.map(source => source.promise))

    /** переопределение ответов с типизацией */
    const mosResponseTyped = mosResponse?.status === 'fulfilled' && mosResponse.value
      ? mosResponse.value as MosRssResponse
      : null

    const lentaResponseTyped = lentaResponse?.status === 'fulfilled' && lentaResponse.value
      ? lentaResponse.value as unknown as LentaRssResponse
      : null

    /**
     * Конвертация ответов в Article
     * @see Article
     * */
    const articlesByType: Record<ArticleSourceType, Article[] | null> = {
      mos: mosResponseTyped && mosResponseTyped.items?.length
        ? mosResponseTyped.items.map(mosRssItemToArticle).sort(comparatorByArticleDateDESC)
        : null,
      lenta: lentaResponseTyped && lentaResponseTyped.items?.length
        ? lentaResponseTyped.items.map(lentaRssItemToArticle).sort(comparatorByArticleDateDESC)
        : null,
    }

    const response: Partial<GetArticlesResponse> = {}

    /** проход по актуальным русерсам */
    ARTICLES_SOURCES.forEach((source) => {
      const type = source.type as ArticleSourceType

      response[type] = {
        type,
        label: source.label,
        articles: articlesByType[type] ?? null,
      }
    })

    return response as GetArticlesResponse
  }
  catch {
    throw Error()
  }
}
