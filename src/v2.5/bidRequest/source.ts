/**
 * This object describes the nature and behavior of the entity that is the source of the bid request upstream from the exchange.
 * 
 * The primary purpose of this object is to define post-auction or upstream decisioning when the exchange itself does not control the final decision.
 * 
 * A common example of this is header bidding, but it can also apply to upstream server entities such as another RTB exchange,
 * a mediation platform, or an ad server combines direct campaigns with 3rd party demand in decisioning.
 */
export type Source = {
  /**
   * Entity responsible for the final impression sale decision,
   * where 0 = exchange, 1 = upstream source.
   */
  fd?: number;
  /**
   * Transaction ID that must be common across all participants in this bid request (e.g., potentially multiple exchanges).
   */
  tid?: string;
  /**
   * Payment ID chain string containing embedded syntax described in the TAG Payment ID Protocol v1.0.
   */
  pchain?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
