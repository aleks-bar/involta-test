import type { Article } from '@entities/article/model/Article'

/**
 * @description Возвращает нужное кол-во постов для переданной страницы
 *
 * @param articles
 * @param page
 * @param postsPerPage
 */
export const getArticlesByPage = (articles: Article[], page: number, postsPerPage: number) => {
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  return articles.slice(startIndex, endIndex)
}
