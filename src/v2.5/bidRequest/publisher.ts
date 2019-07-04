/**
 * This object describes the publisher of the media in which the ad will be displayed.
 * The publisher is typically the seller in an OpenRTB transaction.
 */
export type Publisher = {
  /**
   * Exchange-specific publisher ID.
   */
  id?: string;
  /**
   * Publisher name (may be aliased at the publisher’s request)
   */
  name?: string;
  /**
   * Array of IAB content categories that describe the publisher.
   * Refer to List 5.1.
   */
  cat?: string[];
  /**
   * Highest level domain of the publisher (e.g., "publisher.com").
   */
  domain?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
