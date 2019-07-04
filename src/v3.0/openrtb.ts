import { Request } from './request';
import { Response } from './response';
/**
 * This top-level object is the root for both request and response payloads.
 * It includes versioning information and references to the Layer-4 domain model on which transactions are based.
 * By default, the domain model used by OpenRTB is the Advertising Common Object Model (AdCOM).
 * 
 * Note: As a convention in this document, objects being defined are denoted with uppercase first letter in deference
 * to the common convention for class names in programming languages such as Java, whereas actual instances of objects
 * and references thereto in payloads are lowercase.
 */
export type OpenRTB = {
  /**
   * Version of the Layer-3 OpenRTB specification (e.g., "3.0").
   */
  ver: string;
  /**
   * Identifier of the Layer-4 domain model used to define items for sale, media associated with bids, etc.
   * Default: 'adcom'
   */
  domainspec?: string;
  /**
   * Specification version of the Layer-4 domain model referenced in the domainspec attribute.
   * Required.
   */
  domainver: string;
  /**
   * Bid request container.
   * Required only for request payloads.
   */
  request?: Request;
  /**
   * Bid response container.
   * Required only for response payloads.
   */
  response?: Response;
}
