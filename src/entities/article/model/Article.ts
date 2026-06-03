export interface ArticleSource {
  url: string
  type: string
}

export interface Article {
  title: string
  description: string
  date: string
  url: string
  source: ArticleSource
}
