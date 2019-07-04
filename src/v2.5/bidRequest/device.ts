import { Geo } from './geo';
import { ConnectionType, DeviceType } from '../common/enums';
import { BooleanNumber } from '../common/types';

/**
 * This object provides information pertaining to the device through which the user is interacting.
 * Device information includes its hardware, platform, location, and carrier data. The device can refer to a mobile handset, a desktop computer, set top box, or other digital device.
 */
export type Device = {
  /**
   * Browser user agent string.
   */
  ua?: string;
  /**
   * Location of the device assumed to be the user’s current location defined by a Geo object (Section 3.2.19).
   */
  geo?: Geo;
  /**
   * Standard "Do Not Track" flag as set in the header by the browser, where
   * 0 = tracking is unrestricted, 1 = do not track.
   */
  dnt?: number;
  /**
   * "Limit Ad Tracking" signal commercially endorsed (e.g., iOS, Android), where
   * 0 = tracking is unrestricted, 1 = tracking must be limited per commercial guidelines.
   */
  lmp?: number;
  /**
   * IPv4 address closest to device.
   */
  ip?: string;
  /**
   * IP address closest to device as IPv6.
   */
  ipv6?: string;
  /**
   * The general type of device. Refer to List 5.21.
   */
  devicetype?: DeviceType;
  /**
   * Device make (e.g., "Apple").
   */
  make?: string;
  /**
   * Device model (e.g., "iPhone").
   */
  model?: string;
  /**
   * Device operating system (e.g., "iOS").
   */
  os?: string;
  /**
   * Device operating system version (e.g., "3.1.2").
   */
  osv?: string;
  /**
   * Hardware version of the device (e.g., "5S" for iPhone 5S).
   */
  hwv?: string;
  /**
   * Physical height of the screen in pixels.
   */
  h?: number;
  /**
   * Physical width of the screen in pixels.
   */
  w?: number;
  /**
   * Screen size as pixels per linear inch.
   */
  ppi?: number;
  /**
   * The ratio of physical pixels to device independent pixels
   */
  pxratio?: number;
  /**
   * Support for JavaScript, where
   * 0 = no, 1 = yes.
   */
  js?: BooleanNumber;
  /**
   * Indicates if the geolocation API will be available to JavaScript code running in the banner, where
   * 0 = no, 1 = yes.
   */
  geofetch?: BooleanNumber;
  /**
   * Version of Flash supported by the browser.
   */
  flashver?: string;
  /**
   * Browser language using ISO-639-1-alpha-2.
   */
  language?: string;
  /**
   * Carrier or ISP (e.g., "VERIZON") using exchange curated string names which should be published to bidders a priori.
   */
  carrier?: string;
  /**
   * Mobile carrier as the concatenated MCC-MNC code (e.g., "310-005" identifies Verizon Wireless CDMA in the USA).
   * Refer to https://en.wikipedia.org/wiki/Mobile_country_code for further examples.
   * Note that the dash between the MCC and MNC parts is required to remove parsing ambiguity.
   */
  mccmnc?: string;
  /**
   * Network connection type. Refer to List 5.22
   */
  connectiontype?: ConnectionType;
  /**
   * ID sanctioned for advertiser use in the clear (i.e., not hashed).
   */
  ifa?: string;
  /**
   * Hardware device ID (e.g., IMEI); hashed via SHA1.
   */
  didsha1?: string;
  /**
   * Hardware device ID (e.g., IMEI); hashed via MD5.
   */
  didmd5?: string;
  /**
   * Platform device ID (e.g., Android ID); hashed via SHA1.
   */
  dpidsha1?: string;
  /**
   * Platform device ID (e.g., Android ID); hashed via MD5.
   */
  dpidmd5?: string;
  /**
   * MAC address of the device; hashed via SHA1.
   */
  macsha1?: string;
  /**
   * MAC address of the device; hashed via MD5.
   */
  macmd5?: string;
  /**
   * Placeholder for exchange-specific extensions to OpenRTB.
   */
  ext?: any;
}
