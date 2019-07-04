import { Source } from "./source";
import { Item } from "./item";

/**
 * The Request object contains a globally unique bid request ID.
 * This id attribute is required as is an Item array with at least one object (i.e., at least one item for sale).
 * Other attributes establish rules and restrictions that apply to all items being offered.
 * This object also interfaces to Layer-4 domain objects for context such as the user, device, site or app, etc.
 */
export type Request = {
  /**
   * Unique ID of the bid request; provided by the exchange.
   */  
  id: string;
  /**
   * Indicator of test mode in which auctions are not billable, where
   * 0 = live mode, 1 = test mode.
   * Default: 0
   */
  test?: number;
  /**
   * Maximum time in milliseconds the exchange allows for bids to be received including Internet latency to avoid timeout.
   * This value supersedes any a priori guidance from the exchange.
   * If an exchange acts as an intermediary, it should decrease the outbound tmax value from what it received to account for its latency and the additional internet hop.
   */
  tmax?: number;
  /**
   * Auction type, where 1 = First Price, 2 = Second Price Plus.
   * Values greater than 500 can be used for exchange-specific auction types.
   * Default: 2
   */
  at?: number;
  /**
   * Array of accepted currencies for bids on this bid request using ISO-4217 alpha codes.
   * Recommended if the exchange accepts multiple currencies.
   * If omitted, the single currency of "USD" is assumed.
   * Default: ["USD"]
   */
  cur?: string[];
  /**
   * Restriction list of buyer seats for bidding on this item.
   * Knowledge of buyer’s customers and their seat IDs must be coordinated between parties a priori.
   * Omission implies no restrictions.
   */  
  seat?: string[];
  /**
   * Flag that determines the restriction interpretation of the seat array, where
   * 0 = block list, 1 = whitelist.
   * Default: 1
   */
  wseat?: number;
  /**
   * Allows bidder to retrieve data set on its behalf in the exchange’s cookie (refer to cdata in Object: Response)
   * if supported by the exchange. The string must be in base85 cookie-safe characters.
   */
  cdata?: string;
  /**
   * A Source object that provides data about the inventory source and which entity makes the final decision.
   * Refer to Object: Source.
   */
  source?: Source;
  /**
   * Array of Item objects (at least one) that constitute the set of goods being offered for sale.
   * Refer to Object: Item.
   * Required.
   */  
  item: Item[];
  /**
   * Flag to indicate if the Exchange can verify that the items offered represent all of the items available
   * in context (e.g., all impressions on a web page, all video spots such as pre/mid/post roll) to support road-blocking, where
   * 0 = no, 1 = yes.
   */
  package?: number;
}
