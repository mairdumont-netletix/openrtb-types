import { Metric } from './metric';
import { Banner } from './banner';
import { Video } from './video';
import { Native } from './native';
import { Audio } from './audio';
import { Pmp } from './pmp';
import { BooleanNumber } from '../common/types';
import { Currency } from '../common/enums';

/**
 * This object describes an ad placement or impression being auctioned.
 * A single bid request can include multiple Imp objects, a use case for which might be an exchange that supports selling all ad positions on a given page.
 * Each Imp object has a required ID so that bids can reference them individually.
 * 
 * The presence of Banner (Section 3.2.6), Video (Section 3.2.7), and/or Native (Section 3.2.9) objects subordinate to the Imp object indicates the type of impression being offered.
 * The publisher can choose one such type which is the typical case or mix them at their discretion. However, any given bid for the impression must conform to one of the offered types.
 */
export type Imp = {
  /**
   * A unique identifier for this impression within the context of the bid request (typically, starts with 1 and increments.
   */
  id: string;
  /**
   * An array of Metric object (Section 3.2.5).
   */
  metric?: Metric[];
  /**
   * A Banner object (Section 3.2.6); required if this impression is offered as a banner ad opportunity.
   */
  banner?: Banner;
  /**
   * A Video object (Section 3.2.7); required if this impression is offered as a video ad opportunity.
   */
  video?: Video;
  /**
   * An Audio object (Section 3.2.8); required if this impression is offered as an audio ad opportunity.
   */
  audio?: Audio;
  /**
   * A Native object (Section 3.2.9); required if this impression is offered as a native ad opportunity.
   */
  native?: Native;
  /**
   * A Pmp object (Section 3.2.11) containing any private marketplace deals in effect for this impression.
   */
  pmp?: Pmp;
  /**
   * Name of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile).
   * Used by some ad servers to customize ad code by partner.
   * Recommended for video and/or apps.
   */
  displaymanager?: string;
  /**
   * Version of ad mediation partner, SDK technology, or player responsible for rendering ad (typically video or mobile).
   * Used by some ad servers to customize ad code by partner.
   * Recommended for video and/or apps.
   */
  displaymanagerver?: string;
  /**
   * 1 = the ad is interstitial or full screen,
   * 0 = not interstitial,
   * Default is 0.
   */
  instl?: BooleanNumber;
  /**
   * Identifier for specific ad placement or ad tag that was used to initiate the auction.
   * This can be useful for debugging of any issues, or for optimization by the buyer.
   */
  tagid?: string;
  /**
   * Minimum bid for this impression expressed in CPM.
   */
  bidfloor?: number;
  /**
   * Currency specified using ISO-4217 alpha codes.
   * This may be different from bid currency returned by bidder if this is allowed by the exchange.
   * Default is "USD".
   */
  bidfloorcur?: Currency;
  /**
   * Indicates the type of browser opened upon clicking the creative in an app,
   * where 0 = embedded, 1 = native.
   * Note that the Safari View Controller in iOS 9.x devices is considered a native browser for purposes of this attribute.
   */
  clickbrowser?: BooleanNumber;
  /**
   * Flag to indicate if the impression requires secure HTTPS URL creative assets and markup,
   * where 0 = non-secure, 1 = secure.
   * If omitted, the secure state is unknown, but non-secure HTTP support can be assumed.
   */
  secure?: BooleanNumber;
  /**
   * Array of exchange-specific names of supported iframe busters.
   */
  iframebuster?: string[];
  /**
   * Advisory as to the number of seconds that may elapse between the auction and the actual impression.
   */
  exp?: number;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
