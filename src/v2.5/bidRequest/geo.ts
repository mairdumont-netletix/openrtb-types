import { IPLocationService, LocationType } from '../common/enums';

/**
 * This object encapsulates various methods for specifying a geographic location.
 * When subordinate to a Device object, it indicates the location of the device which can also be interpreted as the user’s current location.
 * When subordinate to a User object, it indicates the location of the user’s home base (i.e., not necessarily their current location).
 * The lat/lon attributes should only be passed if they conform to the accuracy depicted in the type attribute.
 * For example, the centroid of a geographic region such as postal code should not be passed.
 */
export type Geo = {
  /**
   * Latitude from -90.0 to +90.0, where negative is south.
   */
  lat?: number;
  /**
   * Longitude from -180.0 to +180.0, where negative is west.
   */
  lon?: number;
  /**
   * Source of location data; recommended when passing lat/lon.
   * Refer to List 5.20.
   */
  type?: LocationType;
  /**
   * Estimated location accuracy in meters; recommended when lat/lon are specified and derived from a device’s location services (i.e., type = 1).
   * Note that this is the accuracy as reported from the device.
   * Consult OS specific documentation (e.g., Android, iOS) for exact interpretation.
   */
  accuracy?: number;
  /**
   * Number of seconds since this geolocation fix was established.
   * Note that devices may cache location data across multiple fetches.
   * Ideally, this value should be from the time the actual fix was taken.
   */
  lastfix?: number;
  /**
   * Service or provider used to determine geolocation from IP address if applicable (i.e., type = 2).
   * Refer to List 5.23.
   */
  ipservice?: IPLocationService;
  /**
   * Country code using ISO-3166-1-alpha-3.
   */
  country?: string;
  /**
   * Region code using ISO-3166-2; 2-letter state code if USA.
   */
  region?: string;
  /**
   * Region of a country using FIPS 10-4 notation.
   * While OpenRTB supports this attribute, it has been withdrawn by NIST in 2008.
   */
  regionfips104?: string;
  /**
   * Google metro code; similar to but not exactly Nielsen DMAs.
   * See Appendix A for a link to the codes.
   */
  metro?: string;
  /**
   * City using United Nations Code for Trade & Transport Locations.
   * See Appendix A for a link to the codes.
   */
  city?: string;
  /**
   * Zip or postal code.
   */
  zip?: string;
  /**
   * Local time as the number +/- of minutes from UTC.
   */
  utcoffset?: number;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
