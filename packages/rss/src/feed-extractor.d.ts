import { ReaderOptions, FeedEntry } from '@extractus/feed-extractor'

interface TypeSafeReaderOptions<TFeedExtraField extends object, TFeedEntryExtraField extends object> extends ReaderOptions {
  /**
   * merge extra feed fields in result
   */
  getExtraFeedFields?: (feedData: object) => TFeedExtraField;
  /**
   * merge extra entry fields in result
   */
  getExtraEntryFields?: (entryData: object) => TFeedEntryExtraField;
}

declare module '@extractus/feed-extractor' {
  export function extractFromXml<TFeedExtraField extends object, TFeedEntryExtraField extends object>(content: string, options: TypeSafeReaderOptions<TFeedExtraField, TFeedEntryExtraField>): Omit<FeedData, 'entries'> & TFeedExtraField & {
    entries?: (FeedEntry & TFeedEntryExtraField)[]
  }
}
