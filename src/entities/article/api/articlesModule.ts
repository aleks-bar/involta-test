import HttpFactory from '@shared/api/factory'
import type { ArticleSourceType, SourceWithArticles } from '@entities/article'

export type GetArticlesResponse = Record<ArticleSourceType, SourceWithArticles>

export class ArticlesModule extends HttpFactory {
  async getArticles() {
    return await this.get<GetArticlesResponse>('/articles')
  }
}
