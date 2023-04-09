import type { BaseFeedParserOption, ParsedFeed } from './types'

export class BaseFeedParser {
  // eslint-disable-next-line unused-imports/no-unused-vars
  public parser(options: BaseFeedParserOption): ParsedFeed {
    return {
      title: '',
      link: '',
      categories: [],
      items: [],
    }
  }
}
