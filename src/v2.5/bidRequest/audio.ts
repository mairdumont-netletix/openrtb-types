import { APIFramework, CompanionType, ContentDeliveryMethod, CreativeAttribute, FeedType, Protocol, VolumeNormalizationMode, MimeType } from '../common/enums';
import { Banner } from './banner';
import { BooleanNumber } from '../common/types';

/**
 * This object represents an audio type impression.
 * Many of the fields are non-essential for minimally viable transactions, but are included to offer fine control when needed.
 * Audio in OpenRTB generally assumes compliance with the DAAST standard.
 * As such, the notion of companion ads is supported by optionally including an array of Banner objects (refer to the Banner object in Section 3.2.6) that define these companion ads.
 * The presence of a Audio as a subordinate of the Imp object indicates that this impression is offered as an audio type impression.
 * At the publisher’s discretion, that same impression may also be offered as banner, video, and/or native by also including as Imp subordinates objects of those types.
 * However, any given bid for the impression must conform to one of the offered types.
 */
export type Audio = {
  /**
   * Content MIME types supported (e.g., "audio/mp4").
   */
  mimes: MimeType[];
  /**
   * Minimum audio ad duration in seconds.
   */
  minduration?: number;
  /**
   * Maximum audio ad duration in seconds.
   */
  maxduration?: number;
  /**
   * Array of supported audio protocols.
   * Refer to List 5.8
   */
  protocols?: Protocol;
  /**
   * Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements.
   * Refer to List 5.12.
   */
  startdelay?: number;
  /**
   * If multiple ad impressions are offered in the same bid request, the sequence number will allow for the coordinated delivery of multiple creatives.
   */
  sequence?: number;
  /**
   * Blocked creative attributes.
   * Refer to List 5.3.
   */
  battr?: CreativeAttribute[];
  /**
   * Maximum extended ad duration if extension is allowed.
   * If blank or 0, extension is not allowed.
   * If -1, extension is allowed, and there is no time limit imposed.
   * If greater than 0, then the value represents the number of seconds of extended play supported beyond the maxduration value.
   */
  maxextended?: number;
  /**
   * Minimum bit rate in Kbps.
   */
  minbitrate?: number;
  /**
   * Maximum bit rate in Kbps.
   */
  maxbitrate?: number;
  /**
   * Supported delivery methods (e.g., streaming, progressive).
   * If none specified, assume all are supported.
   * Refer to List 5.15.
   */
  delivery?: ContentDeliveryMethod[];
  /**
   * Array of Banner objects (Section 3.2.6) if companion ads are available.
   */
  companionad?: Banner[];
  /**
   * List of supported API frameworks for this impression.
   * Refer to List 5.6.
   * If an API is not explicitly listed, it is assumed not to be supported.
   */
  api?: APIFramework;
  /**
   * Supported DAAST companion ad types.
   * Refer to List 5.14.
   * Recommended if companion Banner objects are included via the companionad array.
   */
  companiontype?: CompanionType[];
  /**
   * The maximum number of ads that can be played in an ad pod.
   */
  maxseq?: number;
  /**
   * Type of audio feed.
   * Refer to List 5.16.
   */
  feed?: FeedType[];
  /**
   * Indicates if the ad is stitched with audio content or delivered independently, where
   * 0 = no, 1 = yes.
   */
  stitched?: BooleanNumber;
  /**
   * Volume normalization mode.
   * Refer to List 5.17.
   */
  nvol?: VolumeNormalizationMode;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB
   */
  ext?: any;
}
