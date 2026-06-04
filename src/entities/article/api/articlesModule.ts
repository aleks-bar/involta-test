import HttpFactory from '@shared/api/factory'

export class ArticlesModule extends HttpFactory {
  async getArticles() {
    return await this.get('/articles')
  }
}
