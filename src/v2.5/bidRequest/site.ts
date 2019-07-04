import { BooleanNumber } from '../common/types';
import { Content } from './content';
import { Publisher } from './publisher';

/**
 * This object should be included if the ad supported content is a website as opposed to a non-browser application.
 * A bid request must not contain both a Site and an App object.
 * At a minimum, it is useful to provide a site ID or page URL, but this is not strictly required.
 */
export type Site = {
  /**
   * Exchange-specific site ID.
   */
  id?: string;
  /**
   * Site name (may be aliased at the publisher’s request).
   */
  name?: string;
  /**
   * Domain of the site (e.g., "mysite.foo.com").
   */
  domain?: string;
  /**
   * Array of IAB content categories of the site.
   * Refer to List 5.1.
   */
  cat?: string[];
  /**
   * Array of IAB content categories that describe the current section of the site.
   * Refer to List 5.1.
   */
  sectioncat?: string[];
  /**
   * Array of IAB content categories that describe the current page or view of the site.
   * Refer to List 5.1.
   */
  pagecat?: string[];
  /**
   * URL of the page where the impression will be shown.
   */
  page?: string;
  /**
   * Referrer URL that caused navigation to the current page.
   */
  ref?: string;
  /**
   * Search string that caused navigation to the current page.
   */
  search?: string;
  /**
   * Indicates if the site has been programmed to optimize layout when viewed on mobile devices, where
   * 0 = no, 1 = yes.
   */
  mobile?: BooleanNumber;
  /**
   * Indicates if the site has a privacy policy, where
   * 0 = no, 1 = yes.
   */
  privacypolicy?: BooleanNumber;
  /**
   * Details about the Publisher (Section 3.2.15) of the site.
   */
  publisher?: Publisher;
  /**
   * Details about the Content (Section 3.2.16) within the site.
   */
  content?: Content;
  /**
   * Comma separated list of keywords about the site
   */
  keywords?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
