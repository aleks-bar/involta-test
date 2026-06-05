import type { ArticlesSource } from '@entities/article/model/ArticlesSource'

export const MOS_URL: string = 'https://www.mos.ru'
export const LENTA_URL: string = 'https://lenta.ru'

export const ARTICLES_SOURCES: ArticlesSource[] = [
  {
    type: 'mos',
    label: 'Mos.ru',
    url: 'https://www.mos.ru/rss',
  },
  {
    type: 'lenta',
    label: 'Lenta.ru',
    url: 'https://lenta.ru/rss',
  },
]
