/** the feed parser's option */
export interface BaseFeedParserOption {
  content: string
}

/** The parsed feed type */
export interface ParsedFeed {
  /** feed title */
  title: string
  /** feed link */
  link: string
  /** feed categories */
  categories: string[]
  /** feed items */
  items: FeedItem[]
  /** feed description */
  description?: string
  /** feed image */
  image?: string
}

/** the parsed feed item */
export interface FeedItem {
  /** feed item unique ID */
  id: string
  /** the feed article's title */
  title: string
  /** the feed article's link */
  link: string
  /** the feed article's author */
  author: string
  /** the created time of the feed article */
  createdAt: Date
  /** the feed article's categories or tags */
  categories: string[]
  /** the feed article's description */
  description?: string
  /** the feed article's content */
  content?: string
}
