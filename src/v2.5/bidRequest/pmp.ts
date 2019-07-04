import { BooleanNumber } from '../common/types';
import { Deal } from './deal';

/**
 * This object is the private marketplace container for direct deals between buyers and sellers that may pertain to this impression.
 * The actual deals are represented as a collection of Deal objects.
 * Refer to Section 7.3 for more details
 */
export type Pmp = {
  /**
   * Indicator of auction eligibility to seats named in the Direct Deals object, where
   * 0 = all bids are accepted, 1 = bids are restricted to the deals specified and the terms thereof.
   * Default is 0.
   */
  private_auction?: BooleanNumber;
  /**
   * Array of Deal (Section 3.2.12) objects that convey the specific deals applicable to this impression.
   */
  deals?: Deal[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
