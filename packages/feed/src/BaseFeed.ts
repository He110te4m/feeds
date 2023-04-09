import type { BaseFeedParserOption, ParsedFeed } from './types'

const feedCache = new WeakMap<BaseFeedParserOption, ParsedFeed>()

export class BaseFeedParser {
  public parse(options: BaseFeedParserOption): ParsedFeed {
    return feedCache.get(options)
      ?? this.parseData(options)
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  protected parseData(options: BaseFeedParserOption): ParsedFeed {
    return {}
  }
}
