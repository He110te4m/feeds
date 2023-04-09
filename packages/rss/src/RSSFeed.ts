import { BaseFeedParser, type BaseFeedParserOption, type ParsedFeed } from '@feeds/feed'

export class RSSFeedParser extends BaseFeedParser {
  public override parse(options: BaseFeedParserOption): ParsedFeed {
    return super.parse(options)
  }
}
