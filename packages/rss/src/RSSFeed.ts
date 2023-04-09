import { BaseFeedParser, type BaseFeedParserOption, type FeedItem, type ParsedFeed } from '@feeds/feed'
import { parseRSSXML } from './parseRSSXML'
import type { FeedItemType } from './validator'

export class RSSFeedParser extends BaseFeedParser {
  protected override parseData({ content }: BaseFeedParserOption): ParsedFeed {
    const channel = parseRSSXML(content)

    const parsedFeed: ParsedFeed = {
      title: channel.title ?? '',
      link: channel.link ?? '',
      categories: channel.category ?? [],
      items: [],
    }

    const items = (<FeedItemType[]>[]).concat(channel.item ?? [])
    parsedFeed.items = items.map(item => ({
      id: getID(item),
      title: getTitle(item),
      link: getLink(item),
      author: getAuthor(item),
      createdAt: getCreatedAt(item),
      updatedAt: getUpdatedAt(item),
      categories: getCategories(item),
      description: getDescription(item),
      content: getContent(item),
      enclosures: getEnclosures(item),
      media: getMedia(item),
    }))

    return parsedFeed
  }
}

function getID(item: FeedItemType): FeedItem['id'] {
  return item.guid?.$text ?? item.id ?? ''
}

function getTitle(item: FeedItemType): FeedItem['title'] {
  return getTextNode(item.title)
}

function getLink(item: FeedItemType): FeedItem['link'] {
  return typeof item.link === 'object'
    ? item.link.href
    : item.link ?? ''
}

function getAuthor(item: FeedItemType): FeedItem['author'] {
  return (
    typeof item.author === 'object'
      ? item.author.name
      : item.author
  ) ?? ''
}

function getCreatedAt(item: FeedItemType): FeedItem['createdAt'] {
  const dateStr = item.created ?? item.pubDate
  return dateStr
    ? Date.parse(dateStr)
    : Date.now()
}

function getUpdatedAt(item: FeedItemType): FeedItem['updatedAt'] {
  const dateStr = item.updated ?? item.created ?? item.pubDate
  return dateStr
    ? Date.parse(dateStr)
    : Date.now()
}

function getCategories(item: FeedItemType): FeedItem['categories'] {
  return item.category ?? []
}

function getDescription(item: FeedItemType): FeedItem['description'] {
  return getTextNode(item.summary, item.description ?? '')
}

function getContent(item: FeedItemType): FeedItem['content'] {
  return getTextNode(item.content, item['content:encoded'] ?? '')
}

function getEnclosures(item: FeedItemType) {
  return [].concat(item.enclosure ?? [])
}

function getMedia(item: FeedItemType) {
  return {}
}

function getTextNode(node?: string | { $text?: string }, defaultValue = '') {
  return (
    (typeof node === 'object')
      ? node.$text
      : node
  ) ?? defaultValue
}
