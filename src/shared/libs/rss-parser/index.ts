import type Parser from 'rss-parser'

// eslint-disable-next-line
export type ParseURLResponse = Promise<{ [p: string]: any } & Parser.Output<{ [p: string]: any }>>
