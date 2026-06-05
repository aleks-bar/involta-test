export interface Article {
  title: string
  description?: string
  date: string
  image: string
  url: string
  source: {
    label: string
    url: string
  }
}
