/**
 * This object is associated with an impression as an array of metrics.
 * These metrics can offer insight into the impression to assist with decisioning such as average recent viewability, click-through rate, etc.
 * Each metric is identified by its type, reports the value of the metric, and optionally identifies the source or vendor measuring the value.
 */
export type Metric = {
  /**
   * Type of metric being presented using exchange curated string names which should be published to bidders a priori.
   */
  type: string;
  /**
   * Number representing the value of the metric.
   * Probabilities must be in the range 0.0 – 1.0.
   */
  value: number;
  /**
   * Source of the value using exchange curated string names which should be published to bidders a priori.
   * If the exchange itself is the source versus a third party, "EXCHANGE" is recommended.
   */
  vendor?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
