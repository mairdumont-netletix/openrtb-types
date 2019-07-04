import { Segment } from './segment';

/**
 * The data and segment objects together allow additional data about the related object (e.g., user, content) to be specified.
 * This data may be from multiple sources whether from the exchange itself or third parties as specified by the id field.
 * A bid request can mix data objects from multiple providers.
 * The specific data providers in use should be published by the exchange a priori to its bidders.
 */
export type Data = {
  /**
   * Exchange-specific ID for the data provider.
   */
  id?: string;
  /**
   * Exchange-specific name for the data provider.
   */
  name?: string;
  /**
   * Array of Segment (Section 3.2.22) objects that contain the actual data values.
   */
  segment?: Segment[];
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
