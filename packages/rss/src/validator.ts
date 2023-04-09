import { type ZodTypeAny, z } from 'zod'

const feedInfo = z.object({
  description: z.string(),
  category: z.array(z.any()),
})

const textNode = z.object({
  $text: z.string(),
})

const feedItem = feedInfo.merge(
  z.object({

    // ID
    'id': z.string(),
    'guid': textNode,

    // title
    'title': textNode.or(z.string()),

    // link
    'link': z.object({
      href: z.string(),
    }).or(z.string()),

    // description
    'summary': textNode,

    // author
    'author': z.object({
      name: z.string(),
    }),
    'dc:creator': z.string(),

    // created time
    'created': z.string(),
    'pubDate': z.string(),

    // updated time
    'updated': z.string(),

    // content
    'content': textNode,
    'content:encoded': z.string(),

    // enclosures
    'enclosure': maybeArray(z.any()),
  }),
)

export type FeedItemType = z.infer<typeof feedItem>

const channel = feedInfo.merge(z.object({
  'title': z.string(),
  'link': z.string(),
  'description': z.string(),
  'language': z.string(),
  'image': z.object({
    url: z.string(),
  }),
  'itunes:image': z.object({
    href: z.string(),
  }),
  'item': maybeArray(feedItem),
}))

export const validator = z.object({
  rss: z.object({
    channel: maybeArray(channel),
  }),
  feed: maybeArray(channel),
}).deepPartial()

function maybeArray<T extends ZodTypeAny>(data: T) {
  return z.array(data).or(data)
}
