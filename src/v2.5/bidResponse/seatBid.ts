import { Bid } from './bid';
import { BooleanNumber } from '../common/types';

/**
 * A bid response can contain multiple SeatBid objects, each on behalf of a different bidder seat and each containing one or more individual bids.
 * If multiple impressions are presented in the request, the group attribute can be used to specify if a seat is willing to
 * accept any impressions that it can win (default) or if it is only interested in winning any if it can win them all as a group.
 */
export type SeatBid = {
  /**
   * Array of 1+ Bid objects (Section 4.2.3) each related to an impression.
   * Multiple bids can relate to the same impression.
   */
  bid: Bid[];
  /**
   * ID of the buyer seat (e.g., advertiser, agency) on whose behalf this bid is made.
   */
  seat?: string;
  /**
   * 0 = impressions can be won individually;
   * 1 = impressions must be won or lost as a group.
   */
  group?: BooleanNumber;
  /**
   * Placeholder for bidder-specific extensions to OpenRTB.
   */
  ext?: any;
}
