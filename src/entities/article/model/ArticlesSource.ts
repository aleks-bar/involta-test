import type { Article } from './Article'

export type ArticleSourceType = 'lenta' | 'mos'

export interface ArticlesSource {
  url: string
  label: string
  type: ArticleSourceType
}

export type SourceWithArticles = Omit<ArticlesSource, 'url'> & {
  articles: Article[] | null
}
