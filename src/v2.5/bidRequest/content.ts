import { Producer } from './producer';
import { ContentContext, IQGMediaRating, ProductionQuality } from '../common/enums';
import { BooleanNumber } from '../common/types';
import { Data } from './data';

/**
 * This object describes the content in which the impression will appear, which may be syndicated or nonsyndicated content.
 * This object may be useful when syndicated content contains impressions and does not necessarily match the publisher’s general content.
 * The exchange might or might not have knowledge of the page where the content is running, as a result of the syndication method.
 * For example might be a video impression embedded in an iframe on an unknown web property or device.
 */
export type Content = {
  /**
   * ID uniquely identifying the content.
   */
  id?: string;
  /**
   * Episode number.
   */
  episode?: number;
  /**
   * Content title.
   * Video Examples: "Search Committee" (television), "A New Hope" (movie), or "Endgame" (made for web).
   * Non-Video Example: "Why an Antarctic Glacier Is Melting So Quickly" (Time magazine article).
   */
  title?: string;
  /**
   * Content series.
   * Video Examples: "The Office" (television), "Star Wars" (movie), or "Arby ‘N’ The Chief" (made for web).
   * Non-Video Example: "Ecocentric" (Time Magazine blog)
   */
  series?: string;
  /**
   * Content season (e.g., "Season 3").
   */
  season?: string;
  /**
   * Artist credited with the content.
   */
  artist?: string;
  /**
   * Genre that best describes the content (e.g., rock, pop, etc).
   */
  genre?: string;
  /**
   * Album to which the content belongs; typically for audio.
   */
  album?: string;
  /**
   * International Standard Recording Code conforming to ISO3901.
   */
  isrc?: string;
  /**
   * Details about the content Producer (Section 3.2.17).
   */
  producer?: Producer;
  /**
   * URL of the content, for buy-side contextualization or review.
   */
  url?: string;
  /**
   * Array of IAB content categories that describe the content producer.
   * Refer to List 5.1.
   */
  cat?: string[];
  /**
   * Production quality.
   * Refer to List 5.13.
   */
  prodq?: ProductionQuality;
  /**
   * Type of content (game, video, text, etc.).
   * Refer to List 5.18.
   */
  context?: ContentContext;
  /**
   * Content rating (e.g., MPAA).
   */
  contentrating?: string;
  /**
   * User rating of the content (e.g., number of stars, likes, etc.).
   */
  userrating?: string;
  /**
   * Media rating per IQG guidelines.
   * Refer to List 5.19
   */
  qagmediarating?: IQGMediaRating;
  /**
   * Comma separated list of keywords describing the content.
   */
  keywords?: string;
  /**
   * 0 = not live, 1 = content is live (e.g., stream, live blog).
   */
  livestream?: BooleanNumber;
  /**
   * 0 = indirect, 1 = direct.
   */
  sourcerelationship?: BooleanNumber;
  /**
   * Length of content in seconds; appropriate for video or audio.
   */
  len?: number;
  /**
   * Content language using ISO-639-1-alpha-2.
   */
  language?: string;
  /**
   * Indicator of whether or not the content is embeddable (e.g., an embeddable video player), where
   * 0 = no, 1 = yes.
   */
  embeddable?: BooleanNumber;
  /**
   * Additional content data. Each Data object (Section 3.2.21) represents a different data source.
   */
  data?: Data[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
