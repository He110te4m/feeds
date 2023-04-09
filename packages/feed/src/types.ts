/** the feed parser's option */
export interface BaseFeedParserOption {
  content: string
}

/** The parsed feed type */
export interface ParsedFeed {
  /** feed title */
  title?: string
  /** feed link */
  link?: string
  /** feed description */
  description?: string
  /** feed items */
  items?: FeedItem[]
}

/** the parsed feed item */
export interface FeedItem {
  /** feed item unique ID */
  id: string
  /** the feed article's title */
  title?: string
  /** the feed article's link */
  link?: string
  /** the feed article's author */
  author?: string
  /** the hero image of the feed article */
  image?: string
  /** the created time of the feed article */
  createdAt?: number
  /** the updated time of the feed article */
  updatedAt?: number
  /** the feed article's categories or tags */
  categories?: string[]
  /** the feed article's description */
  description?: string
}
