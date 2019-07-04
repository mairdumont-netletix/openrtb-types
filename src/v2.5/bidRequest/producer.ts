/**
 * This object defines the producer of the content in which the ad will be shown.
 * This is particularly useful when the content is syndicated and may be distributed through different publishers
 * and thus when the producer and publisher are not necessarily the same entity.
 */
export type Producer = {
  /**
   * Content producer or originator ID.
   * Useful if content is syndicated and may be posted on a site using embed tags.
   */
  id?: string;
  /**
   * Content producer or originator name (e.g., "Warner Bros").
   */
  name?: string;
  /**
   * Array of IAB content categories that describe the content producer.
   * Refer to List 5.1
   */
  cat?: string[];
  /**
   * Highest level domain of the content producer (e.g., "producer.com").
   */
  domain?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
