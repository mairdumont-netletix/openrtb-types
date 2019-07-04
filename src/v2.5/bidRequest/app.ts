import { BooleanNumber } from '../common/types';
import { Publisher } from './publisher';
import { Content } from './content';

/**
 * This object should be included if the ad supported content is a non-browser application (typically in mobile) as opposed to a website.
 * A bid request must not contain both an App and a Site object.
 * At a minimum, it is useful to provide an App ID or bundle, but this is not strictly required.
 */
export type App = {
  /**
   * Exchange-specific app ID.
   */
  id?: string;
  /**
   * App name (may be aliased at the publisher’s request).
   */
  name?: string;
  /**
   * A platform-specific application identifier intended to be unique to the app and independent of the exchange.
   * On Android, this should be a bundle or package name (e.g., com.foo.mygame).
   * On iOS, it is typically a numeric ID.
   */
  bundle?: string;
  /**
   * Domain of the app (e.g., “mygame.foo.com”).
   */
  domain?: string;
  /**
   * App store URL for an installed app; for IQG 2.1 compliance.
   */
  storeurl?: string;
  /**
   * Array of IAB content categories of the app.
   * Refer to List 5.1.
   */
  cat?: string[];
  /**
   * Array of IAB content categories that describe the current section of the app.
   * Refer to List 5.1.
   */
  sectioncat?: string[];
  /**
   * Array of IAB content categories that describe the current page or view of the app.
   * Refer to List 5.1.
   */
  pagecat?: string[];
  /**
   * Application version.
   */
  ver?: string;
  /**
   * Indicates if the app has a privacy policy, where
   * 0 = no, 1 = yes.
   */
  privacypolicy?: BooleanNumber;
  /**
   * 0 = app is free, 1 = the app is a paid version.
   */
  paid?: BooleanNumber;
  /**
   * Details about the Publisher (Section 3.2.15) of the app.
   */
  publisher?: Publisher;
  /**
   * Details about the Content (Section 3.2.16) within the app.
   */
  content?: Content;
  /**
   * Comma separated list of keywords about the app.
   */
  keywords?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
