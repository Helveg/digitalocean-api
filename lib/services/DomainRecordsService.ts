/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class DomainRecordsService extends ApiService {
  /**
   * List All Domain Records
   * To get a listing of all records configured for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records`.
   * The list of records returned can be filtered by using the `name` and `type` query parameters. For example, to only include A records for a domain, send a GET request to `/v2/domains/$DOMAIN_NAME/records?type=A`. `name` must be a fully qualified record name. For example, to only include records matching `sub.example.com`, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`. Both name and type may be used together.
   *
   *
   * @returns any The response will be a JSON object with a key called `domain_records`. The value of this will be an array of domain record objects, each of which contains the standard domain record attributes. For attributes that are not used by a specific record type, a value of `null` will be returned. For instance, all records other than SRV will have `null` for the `weight` and `port` attributes.
   * @throws ApiError
   */
  public domainsListRecords({
    domainName,
    name,
    type,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    /**
     * A fully qualified record name. For example, to only include records matching sub.example.com, send a GET request to `/v2/domains/$DOMAIN_NAME/records?name=sub.example.com`.
     */
    name?: string;
    /**
     * The type of the DNS record. For example: A, CNAME, TXT, ...
     */
    type?: "A" | "AAAA" | "CAA" | "CNAME" | "MX" | "NS" | "SOA" | "SRV" | "TXT";
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
  }): CancelablePromise<
    {
      domain_records?: Array<{
        /**
         * A unique identifier for each domain record.
         */
        readonly id?: number;
        /**
         * The type of the DNS record. For example: A, CNAME, TXT, ...
         */
        type: string;
        /**
         * The host name, alias, or service being defined by the record.
         */
        name?: string;
        /**
         * Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.
         */
        data?: string;
        /**
         * The priority for SRV and MX records.
         */
        priority?: number | null;
        /**
         * The port for SRV records.
         */
        port?: number | null;
        /**
         * This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
         */
        ttl?: number;
        /**
         * The weight for SRV records.
         */
        weight?: number | null;
        /**
         * An unsigned integer between 0-255 used for CAA records.
         */
        flags?: number | null;
        /**
         * The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"
         */
        tag?: string | null;
      }>;
    } & {
      links?: {
        pages?:
          | ({
              /**
               * URI of the last page of the results.
               */
              last?: string;
            } & {
              /**
               * URI of the next page of the results.
               */
              next?: string;
            })
          | ({
              /**
               * URI of the first page of the results.
               */
              first?: string;
            } & {
              /**
               * URI of the previous page of the results.
               */
              prev?: string;
            });
      };
    } & {
      meta: {
        /**
         * Number of objects returned by the request.
         */
        total?: number;
      };
    }
  > {
    return __request(this.client, {
      method: "GET",
      url: "/v2/domains/{domain_name}/records",
      path: {
        domain_name: domainName,
      },
      query: {
        name: name,
        type: type,
        per_page: perPage,
        page: page,
      },
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create a New Domain Record
   * To create a new record to a domain, send a POST request to
   * `/v2/domains/$DOMAIN_NAME/records`.
   *
   * The request must include all of the required fields for the domain record type
   * being added.
   *
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective required attributes.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public domainsCreateRecord({
    domainName,
    requestBody,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    requestBody?: {
      /**
       * A unique identifier for each domain record.
       */
      readonly id?: number;
      /**
       * The type of the DNS record. For example: A, CNAME, TXT, ...
       */
      type: string;
      /**
       * The host name, alias, or service being defined by the record.
       */
      name?: string;
      /**
       * Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.
       */
      data?: string;
      /**
       * The priority for SRV and MX records.
       */
      priority?: number | null;
      /**
       * The port for SRV records.
       */
      port?: number | null;
      /**
       * This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
       */
      ttl?: number;
      /**
       * The weight for SRV records.
       */
      weight?: number | null;
      /**
       * An unsigned integer between 0-255 used for CAA records.
       */
      flags?: number | null;
      /**
       * The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"
       */
      tag?: string | null;
    };
  }): CancelablePromise<{
    /**
     * A short identifier corresponding to the HTTP status code returned. For  example, the ID for a response returning a 404 status code would be "not_found."
     */
    id: string;
    /**
     * A message providing additional information about the error, including  details to help resolve it when possible.
     */
    message: string;
    /**
     * Optionally, some endpoints may include a request ID that should be  provided when reporting bugs or opening support tickets to help  identify the issue.
     */
    request_id?: string;
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/domains/{domain_name}/records",
      path: {
        domain_name: domainName,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Retrieve an Existing Domain Record
   * To retrieve a specific domain record, send a GET request to `/v2/domains/$DOMAIN_NAME/records/$RECORD_ID`.
   * @returns any The response will be a JSON object with a key called `domain_record`. The value of this will be a domain record object which contains the standard domain record attributes.
   * @throws ApiError
   */
  public domainsGetRecord({
    domainName,
    domainRecordId,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    /**
     * The unique identifier of the domain record.
     */
    domainRecordId: number;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/domains/{domain_name}/records/{domain_record_id}",
      path: {
        domain_name: domainName,
        domain_record_id: domainRecordId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Update a Domain Record
   * To update an existing record, send a PATCH request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
   * the record type can be set to a new value for the record.
   *
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective attributes.
   *
   * @returns any The response will be a JSON object with a key called `domain_record`. The value of this will be a domain record object which contains the standard domain record attributes.
   * @throws ApiError
   */
  public domainsPatchRecord({
    domainName,
    domainRecordId,
    requestBody,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    /**
     * The unique identifier of the domain record.
     */
    domainRecordId: number;
    requestBody?: {
      /**
       * A unique identifier for each domain record.
       */
      readonly id?: number;
      /**
       * The type of the DNS record. For example: A, CNAME, TXT, ...
       */
      type: string;
      /**
       * The host name, alias, or service being defined by the record.
       */
      name?: string;
      /**
       * Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.
       */
      data?: string;
      /**
       * The priority for SRV and MX records.
       */
      priority?: number | null;
      /**
       * The port for SRV records.
       */
      port?: number | null;
      /**
       * This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
       */
      ttl?: number;
      /**
       * The weight for SRV records.
       */
      weight?: number | null;
      /**
       * An unsigned integer between 0-255 used for CAA records.
       */
      flags?: number | null;
      /**
       * The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"
       */
      tag?: string | null;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PATCH",
      url: "/v2/domains/{domain_name}/records/{domain_record_id}",
      path: {
        domain_name: domainName,
        domain_record_id: domainRecordId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Update a Domain Record
   * To update an existing record, send a PUT request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`. Any attribute valid for
   * the record type can be set to a new value for the record.
   *
   * See the [attribute table](#tag/Domain-Records) for details regarding record
   * types and their respective attributes.
   *
   * @returns any The response will be a JSON object with a key called `domain_record`. The value of this will be a domain record object which contains the standard domain record attributes.
   * @throws ApiError
   */
  public domainsUpdateRecord({
    domainName,
    domainRecordId,
    requestBody,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    /**
     * The unique identifier of the domain record.
     */
    domainRecordId: number;
    requestBody?: {
      /**
       * A unique identifier for each domain record.
       */
      readonly id?: number;
      /**
       * The type of the DNS record. For example: A, CNAME, TXT, ...
       */
      type: string;
      /**
       * The host name, alias, or service being defined by the record.
       */
      name?: string;
      /**
       * Variable data depending on record type. For example, the "data" value for an A record would be the IPv4 address to which the domain will be mapped. For a CAA record, it would contain the domain name of the CA being granted permission to issue certificates.
       */
      data?: string;
      /**
       * The priority for SRV and MX records.
       */
      priority?: number | null;
      /**
       * The port for SRV records.
       */
      port?: number | null;
      /**
       * This value is the time to live for the record, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
       */
      ttl?: number;
      /**
       * The weight for SRV records.
       */
      weight?: number | null;
      /**
       * An unsigned integer between 0-255 used for CAA records.
       */
      flags?: number | null;
      /**
       * The parameter tag for CAA records. Valid values are "issue", "issuewild", or "iodef"
       */
      tag?: string | null;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/domains/{domain_name}/records/{domain_record_id}",
      path: {
        domain_name: domainName,
        domain_record_id: domainRecordId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Delete a Domain Record
   * To delete a record for a domain, send a DELETE request to
   * `/v2/domains/$DOMAIN_NAME/records/$DOMAIN_RECORD_ID`.
   *
   * The record will be deleted and the response status will be a 204. This
   * indicates a successful request with no body returned.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public domainsDeleteRecord({
    domainName,
    domainRecordId,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
    /**
     * The unique identifier of the domain record.
     */
    domainRecordId: number;
  }): CancelablePromise<{
    /**
     * A short identifier corresponding to the HTTP status code returned. For  example, the ID for a response returning a 404 status code would be "not_found."
     */
    id: string;
    /**
     * A message providing additional information about the error, including  details to help resolve it when possible.
     */
    message: string;
    /**
     * Optionally, some endpoints may include a request ID that should be  provided when reporting bugs or opening support tickets to help  identify the issue.
     */
    request_id?: string;
  }> {
    return __request(this.client, {
      method: "DELETE",
      url: "/v2/domains/{domain_name}/records/{domain_record_id}",
      path: {
        domain_name: domainName,
        domain_record_id: domainRecordId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
