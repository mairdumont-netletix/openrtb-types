import { AdPosition, APIFramework, CompanionType, ContentDeliveryMethod, CreativeAttribute, PlaybackMethod, Protocol, StartDelay, VideoLinearity, VideoPlacementType, MimeType } from '../common/enums';
import { BooleanNumber } from '../common/types';
import { Banner } from './banner';

/**
 * This object represents an in-stream video impression.
 * Many of the fields are non-essential for minimally viable transactions, but are included to offer fine control when needed.
 * Video in OpenRTB generally assumes compliance with the VAST standard.
 * As such, the notion of companion ads is supported by optionally including an array of Banner objects (refer to the Banner object in Section 3.2.6) that define these companion ads.
 * 
 * The presence of a Video as a subordinate of the Imp object indicates that this impression is offered as a video type impression.
 * At the publisher’s discretion, that same impression may also be offered as banner, audio, and/or native by also including as Imp subordinates objects of those types.
 * However, any given bid for the impression must conform to one of the offered types.
 */
export type Video = {
  /**
   * Content MIME types supported (e.g., "video/x-ms-wmv", "video/mp4").
   */
  mimes: MimeType[];
  /**
   * Minimum video ad duration in seconds.
   */
  minduration?: number;
  /**
   * Maximum video ad duration in seconds.
   */
  maxduration?: number;
  /**
   * Array of supported video protocols.
   * Refer to List 5.8. At least one supported protocol must be specified in either the protocol or protocols attribute.
   */
  protocols?: Protocol[];
  /**
   * Width of the video player in device independent pixels (DIPS).
   */
  w?: number;
  /**
   * Height of the video player in device independent pixels (DIPS).
   */
  h?: number;
  /**
   * Indicates the start delay in seconds for pre-roll, mid-roll, or post-roll ad placements.
   * Refer to List 5.12 for additional generic values.
   */
  startdelay?: StartDelay;
  /**
   * Placement type for the impression.
   * Refer to List 5.9.
   */
  placement?: VideoPlacementType;
  /**
   * Indicates if the impression must be linear, nonlinear, etc.
   * If none specified, assume all are allowed. Refer to List 5.7.
   */
  linearity?: VideoLinearity;
  /**
   * Indicates if the player will allow the video to be skipped, where 0 = no, 1 = yes.
   * If a bidder sends markup/creative that is itself skippable, the Bid object should include the attr array with an element of 16 indicating skippable video.
   * Refer to List 5.3.
   */
  skip?: BooleanNumber;
  /**
   * Videos of total duration greater than this number of seconds can be skippable; only applicable if the ad is skippable.
   */
  skipmin?: number;
  /**
   * Number of seconds a video must play before skipping is enabled; only applicable if the ad is skippable.
   */
  skipafter?: number;
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
   * Indicates if letter-boxing of 4:3 content into a 16:9 window is allowed, where 0 = no, 1 = yes.
   */
  boxingallowed?: BooleanNumber;
  /**
   * Playback methods that may be in use.
   * If none are specified, any method may be used.
   * Refer to List 5.10.
   * Only one method is typically used in practice. As a result, this array may be converted to an integer in a future version of the specification.
   * It is strongly advised to use only the first element of this array in preparation for this change.
   */
  playbackmethod?: PlaybackMethod;
  /**
   * The event that causes playback to end. Refer to List 5.11
   */
  playbackend?: number;
  /**
   * Supported delivery methods (e.g., streaming, progressive).
   * If none specified, assume all are supported.
   * Refer to List 5.15.
   */
  delivery?: ContentDeliveryMethod;
  /**
   * Ad position on screen.
   * Refer to List 5.4.
   */
  pos?: AdPosition;
  /**
   * Array of Banner objects (Section 3.2.6) if companion ads are available.
   */
  companionad?: Banner[];
  /**
   * List of supported API frameworks for this impression.
   * Refer to List 5.6.
   * If an API is not explicitly listed, it is assumed not to be supported.
   */
  api?: APIFramework[];
  /**
   * Supported VAST companion ad types.
   * Refer to List 5.14.
   * Recommended if companion Banner objects are included via the companionad array.
   * If one of these banners will be rendered as an end-card, this can be specified using the vcm attribute with the particular banner (Section 3.2.6).
   */
  companiontype?: CompanionType[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
