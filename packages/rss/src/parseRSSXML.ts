import { XMLParser } from 'fast-xml-parser'
import { validator } from './validator'

const parser = new XMLParser({
  attributeNamePrefix: '',
  textNodeName: '$text',
  ignoreAttributes: false,
})

export function parseRSSXML(content: string) {
  const xmlInfo = parser.parse(content)

  const validResult = validator.safeParse(xmlInfo)
  if (!validResult.success) {
    throw validResult.error
  }

  const { data: rssData } = validResult
  const channelData = rssData?.rss?.channel ?? rssData.feed
  if (!channelData) {
    throw new Error('missing channel data')
  }

  return Array.isArray(channelData) ? channelData[0] : channelData
}
