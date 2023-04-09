import { BaseFeedParser, type BaseFeedParserOption, type ParsedFeed } from '@feeds/feed'

export class WeChatFeedParser extends BaseFeedParser {
  public override parser(options: BaseFeedParserOption): ParsedFeed {
    return super.parser(options)
  }
}
