import { BaseFeedParser, type BaseFeedParserOption, type ParsedFeed } from '@feeds/feed'

export class RSSFeedParser extends BaseFeedParser {
  public override parser(options: BaseFeedParserOption): ParsedFeed {
    return super.parser(options)
  }
}
