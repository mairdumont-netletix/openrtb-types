/**
 * Segment objects are essentially key-value pairs that convey specific units of data.
 * The parent Data object is a collection of such values from a given data provider.
 * The specific segment names and value options must be published by the exchange a priori to its bidders.
 */
export type Segment = {
  /**
   * ID of the data segment specific to the data provider.
   */
  id?: string;
  /**
   * Name of the data segment specific to the data provider.
   */
  name?: string;
  /**
   * String representation of the data segment value.
   */
  value?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
