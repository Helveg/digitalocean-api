/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class DomainsService extends ApiService {
  /**
   * List All Domains
   * To retrieve a list of all of the domains in your account, send a GET request to `/v2/domains`.
   * @returns any The response will be a JSON object with a key called `domains`. The value of this will be an array of Domain objects, each of which contain the standard domain attributes.
   * @throws ApiError
   */
  public domainsList({
    perPage = 20,
    page = 1,
  }: {
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
      /**
       * Array of volumes.
       */
      domains: Array<{
        /**
         * The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name.
         */
        name?: string;
        /**
         * This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.
         */
        ip_address?: string;
        /**
         * This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
         */
        readonly ttl?: number | null;
        /**
         * This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource.
         */
        readonly zone_file?: string | null;
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
      url: "/v2/domains",
      query: {
        per_page: perPage,
        page: page,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create a New Domain
   * To create a new domain, send a POST request to `/v2/domains`. Set the "name"
   * attribute to the domain name you are adding. Optionally, you may set the
   * "ip_address" attribute, and an A record will be automatically created pointing
   * to the apex domain.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public domainsCreate({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The name of the domain itself. This should follow the standard domain format of domain.TLD. For instance, `example.com` is a valid domain name.
       */
      name?: string;
      /**
       * This optional attribute may contain an IP address. When provided, an A record will be automatically created pointing to the apex domain.
       */
      ip_address?: string;
      /**
       * This value is the time to live for the records on this domain, in seconds. This defines the time frame that clients can cache queried information before a refresh should be requested.
       */
      readonly ttl?: number | null;
      /**
       * This attribute contains the complete contents of the zone file for the selected domain. Individual domain record resources should be used to get more granular control over records. However, this attribute can also be used to get information about the SOA record, which is created automatically and is not accessible as an individual record resource.
       */
      readonly zone_file?: string | null;
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
      url: "/v2/domains",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Retrieve an Existing Domain
   * To get details about a specific domain, send a GET request to `/v2/domains/$DOMAIN_NAME`.
   * @returns any The response will be a JSON object with a key called `domain`. The value of this will be an object that contains the standard attributes defined for a domain.
   * @throws ApiError
   */
  public domainsGet({
    domainName,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/domains/{domain_name}",
      path: {
        domain_name: domainName,
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
   * Delete a Domain
   * To delete a domain, send a DELETE request to `/v2/domains/$DOMAIN_NAME`.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public domainsDelete({
    domainName,
  }: {
    /**
     * The name of the domain itself.
     */
    domainName: string;
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
      url: "/v2/domains/{domain_name}",
      path: {
        domain_name: domainName,
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
