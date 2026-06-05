import type { Article } from '@entities/article/model/Article'

export const comparatorByArticleDateDESC = (a: Article, b: Article) => {
  const dateA = a.date ? new Date(a.date).getTime() : 0
  const dateB = b.date ? new Date(b.date).getTime() : 0
  return dateB - dateA
}
