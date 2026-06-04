import type { $Fetch, FetchOptions } from 'ofetch'

class HttpFactory {
  private readonly $fetch: $Fetch

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher
  }

  private async fetch<T>(url: string, options: FetchOptions = {}): Promise<T> {
    return await this.$fetch(`${url}`, options) as Promise<T>
  }

  async get<T>(url: string, options: FetchOptions = {}): Promise<T> {
    return await this.fetch<T>(url, {
      method: 'GET',
      ...options,
    })
  }
}

export default HttpFactory
