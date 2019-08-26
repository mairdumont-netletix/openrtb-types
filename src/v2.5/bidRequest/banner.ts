import { Format } from './format';
import { BooleanNumber } from '../common/types';
import { APIFramework, ExpandableDirection, MimeType } from '../common/enums';

/**
 * This object represents the most general type of impression.
 * Although the term "banner" may have very specific meaning in other contexts, here it can be many things including a simple static image,
 * an expandable ad unit, or even in-banner video (refer to the Video object in Section 3.2.7 for the more generalized and full featured video ad units).
 * An array of Banner objects can also appear within the Video to describe optional companion ads defined in the VAST specification.
 * 
 * The presence of a Banner as a subordinate of the Imp object indicates that this impression is offered as a banner type impression.
 * At the publisher’s discretion, that same impression may also be offered as video, audio, and/or native by also including as Imp subordinates objects of those types.
 * However, any given bid for the impression must conform to one of the offered types.
 */
export type Banner = {
  /**
   * Array of format objects (Section 3.2.10) representing the banner sizes permitted.
   * If none are specified, then use of the h and w attributes is highly recommended.
   */
  format?: Format[];
  /**
   * Exact width in device independent pixels (DIPS);
   * recommended if no format objects are specified.
   */
  w?: number;
  /**
   * Exact height in device independent pixels (DIPS);
   * recommended if no format objects are specified
   */
  h?: number;
  /**
   * Blocked banner ad types.
   * Refer to List 5.2.
   */
  btype?: number[];
  /**
   * Blocked creative attributes.
   * Refer to List 5.3.
   */
  battr?: number[];
  /**
   * Ad position on screen.
   * Refer to List 5.4.
   */
  pos?: number;
  /**
   * Content MIME types supported.
   * Popular MIME types may include “application/x-shockwave-flash”, “image/jpg”, and “image/gif”.
   */
  mimes?: MimeType[];
  /**
   * Indicates if the banner is in the top frame as opposed to an iframe,
   * where 0 = no, 1 = yes.
   */
  topframe?: BooleanNumber;
  /**
   * Directions in which the banner may expand.
   * Refer to List 5.5.
   */
  expdir?: ExpandableDirection[];
  /**
   * List of supported API frameworks for this impression.
   * Refer to List 5.6.
   * If an API is not explicitly listed, it is assumed not to be supported.
   */
  api?: APIFramework[];
  /**
   * Unique identifier for this banner object.
   * Recommended when Banner objects are used with a Video object (Section 3.2.7) to represent an array of companion ads.
   * Values usually start at 1 and increase with each object; should be unique within an impression.
   */
  id?: string;
  /**
   * Relevant only for Banner objects used with a Video object (Section 3.2.7) in an array of companion ads.
   * Indicates the companion banner rendering mode relative to the associated video, where 0 = concurrent, 1 = end-card.
   */
  vcm?: BooleanNumber;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB
   */
  ext?: any;
}
