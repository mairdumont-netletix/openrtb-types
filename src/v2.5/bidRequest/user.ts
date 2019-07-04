import { Data } from './data';
import { Geo } from './geo';

/**
 * This object contains information known or derived about the human user of the device (i.e., the audience for advertising).
 * The user id is an exchange artifact and may be subject to rotation or other privacy policies.
 * However, this user ID must be stable long enough to serve reasonably as the basis for frequency capping and retargeting.
 */
export type User = {
  /**
   * Exchange-specific ID for the user.
   * At least one of id or buyeruid is recommended.
   */
  id?: string;
  /**
   * Buyer-specific ID for the user as mapped by the exchange for the buyer. At least one of buyeruid or id is recommended.
   */
  buyeruid?: string;
  /**
   * Year of birth as a 4-digit integer.
   */
  yob?: number;
  /**
   * Gender, where "M" = male, "F" = female, "O" = known to be other (i.e., omitted is unknown).
   */
  gender?: string;
  /**
   * Comma separated list of keywords, interests, or intent.
   */
  keywords?: string;
  /**
   * Optional feature to pass bidder data that was set in the exchange’s cookie.
   * The string must be in base85 cookie safe characters and be in any format.
   * Proper JSON encoding must be used to include "escaped" quotation marks.
   */
  customdata?: string;
  /**
   * Location of the user’s home base defined by a Geo object (Section 3.2.19).
   * This is not necessarily their current location.
   */
  geo?: Geo;
  /**
   * Additional user data.
   * Each Data object (Section 3.2.21) represents a different data source.
   */
  data?: Data[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
