import type { Article } from '@entities/article'

export const predicateByArticleSearch = (article: Article, search: string): boolean => {
  const searchLower = search.toLowerCase()

  const titleIsMatched = article.title.toLowerCase().includes(searchLower)
  let descriptionIsMatched = false

  if (article.description) {
    descriptionIsMatched = article.description.toLowerCase().includes(searchLower)
  }

  return titleIsMatched || descriptionIsMatched
}
