/**
 * This object represents an allowed size (i.e., height and width combination) or Flex Ad parameters for a banner impression.
 * These are typically used in an array where multiple sizes are permitted.
 * It is recommended that either the w/h pair or the wratio/hratio/wmin set (i.e., for Flex Ads) be specified.
 */
export type Format = {
  /**
   * Width in device independent pixels (DIPS).
   */
  w?: number;
  /**
   * Height in device independent pixels (DIPS).
   */
  h?: number;
  /**
   * Relative width when expressing size as a ratio.
   */
  wratio?: number;
  /**
   * Relative height when expressing size as a ratio.
   */
  hratio?: number;
  /**
   * The minimum width in device independent pixels (DIPS) at which the ad will be displayed the size is expressed as a ratio.
   */
  wmin?: number;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
