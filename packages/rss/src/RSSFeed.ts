import { BaseFeedParser, type BaseFeedParserOption, type ParsedFeed } from '@feeds/feed'
import { extractFromXml } from '@extractus/feed-extractor'

export class RSSFeedParser extends BaseFeedParser {
  protected override parseData({ content }: BaseFeedParserOption): ParsedFeed {
    const data = extractFromXml(content)

    return {
      title: data.title,
      link: data.link,
      description: data.description,
      items: data.entries?.map(item => ({
        id: item.id,
        link: item.link,
        title: item.title,
        description: item.description,
        createdAt: item.published?.getTime() ?? Date.now(),
        updatedAt: item.published?.getTime() ?? Date.now(),
        categories: [],
        image: '',
      })),
    }
  }
}
