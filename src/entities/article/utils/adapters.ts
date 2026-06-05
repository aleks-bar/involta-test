import type { LentaRssItem, MosRssItem } from '../model/Rss'
import type { Article } from '../model/Article'
import { LENTA_URL, MOS_URL } from '../const/articlesSources'

export const mosRssItemToArticle = (item: MosRssItem): Article => {
  return {
    title: item.title,
    description: item.content,
    date: item.isoDate,
    image: item.enclosure.url,
    url: item.link,
    source: {
      url: MOS_URL,
      label: 'www.mos.ru',
    },
  }
}

export const lentaRssItemToArticle = (item: LentaRssItem): Article => {
  return {
    title: item.title,
    description: item.content,
    date: item.isoDate,
    image: item.enclosure.url,
    url: item.link,
    source: {
      url: LENTA_URL,
      label: 'lenta.ru',
    },
  }
}
