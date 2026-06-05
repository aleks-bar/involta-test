import ArticleCard from './ui/ArticleCard.vue'
import ArticlesSources from './ui/ArticlesSources.vue'
import { useArticlesStore } from './model/useArticlesStore'
import { lentaRssItemToArticle, mosRssItemToArticle } from './utils/adapters'

export { ARTICLES_SOURCES, LENTA_URL, MOS_URL } from './const/articlesSources'

export { ArticlesModule, type GetArticlesResponse } from './api/articlesModule'

export {
  ArticleCard,
  ArticlesSources,
  useArticlesStore,
  mosRssItemToArticle,
  lentaRssItemToArticle,
}

export type { Article } from './model/Article'
export type { ArticlesDisplay } from './model/ArticlesDisplay'
export type { ArticleSourceType, SourceWithArticles } from './model/ArticlesSource'
export * from './model/Rss'
export { comparatorByArticleDateDESC } from './utils/sort'
export { predicateByArticleSearch } from './utils/filter'
export { getArticlesByPage } from './utils/getArticlesByPage'
