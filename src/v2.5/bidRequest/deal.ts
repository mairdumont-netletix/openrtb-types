import { Currency } from '../common/enums';

/**
 * This object constitutes a specific deal that was struck a priori between a buyer and a seller.
 * Its presence with the Pmp collection indicates that this impression is available under the terms of that deal.
 * Refer to Section 7.3 for more details.
 */
export type Deal = {
  /**
   * A unique identifier for the direct deal.
   */
  id: string;
  /**
   * Minimum bid for this impression expressed in CPM.
   * Float. Default is 0.
   */
  bidfloor?: number;
  /**
   * Currency specified using ISO-4217 alpha codes.
   * This may be different from bid currency returned by bidder if this is allowed by the exchange.
   */
  bidfloorcur?: Currency;
  /**
   * Optional override of the overall auction type of the bid request, where
   * 1 = First Price, 2 = Second Price Plus, 3 = the value passed in bidfloor is the agreed upon deal price.
   * Additional auction types can be defined by the exchange.
   */
  at?: number;
  /**
   * Whitelist of buyer seats (e.g., advertisers, agencies) allowed to bid on this deal.
   * IDs of seats and the buyer’s customers to which they refer must be coordinated between bidders and the exchange a priori.
   * Omission implies no seat restrictions.
   */
  wseat?: string[];
  /**
   * Array of advertiser domains (e.g., advertiser.com) allowed to bid on this deal.
   * Omission implies no advertiser restrictions.
   */
  wadomain?: string[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
