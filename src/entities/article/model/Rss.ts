export interface MosRssItem {
  content?: string
  contentSnippet?: string
  enclosure: {
    type: string
    url: string
  }
  isoDate: string
  link: string
  pubDate: string
  title: string
}

export interface MosRssResponse {
  description: string
  items: MosRssItem[]
  link: string
  title: string
}

export interface LentaRssItem {
  author: string
  categories: string[]
  content: string
  contentSnippet: string
  creator: string
  enclosure: {
    length: string
    type: string
    url: string
  }
  guid: string
  isoDate: string
  link: string
  pubDate: string
  title: string
}

export interface LentaRssResponse {
  description: string
  items: LentaRssItem[]
  link: string
  title: string
}
