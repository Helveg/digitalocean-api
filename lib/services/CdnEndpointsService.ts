/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class CdnEndpointsService extends ApiService {
  /**
   * List All CDN Endpoints
   * To list all of the CDN endpoints available on your account, send a GET request to `/v2/cdn/endpoints`.
   * @returns any The result will be a JSON object with an `endpoints` key. This will be set to an array of endpoint objects, each of which will contain the standard CDN endpoint attributes.
   * @throws ApiError
   */
  public cdnListEndpoints({
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
      endpoints?: Array<{
        /**
         * A unique ID that can be used to identify and reference a CDN endpoint.
         */
        readonly id?: string;
        /**
         * The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space.
         */
        origin: string;
        /**
         * The fully qualified domain name (FQDN) from which the CDN-backed content is served.
         */
        readonly endpoint?: string;
        /**
         * The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.
         */
        ttl?: 60 | 600 | 3600 | 86400 | 604800;
        /**
         * The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.
         */
        certificate_id?: string;
        /**
         * The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.
         */
        custom_domain?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created.
         */
        readonly created_at?: string;
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
      url: "/v2/cdn/endpoints",
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
   * Create a New CDN Endpoint
   * To create a new CDN endpoint, send a POST request to `/v2/cdn/endpoints`. The
   * origin attribute must be set to the fully qualified domain name (FQDN) of a
   * DigitalOcean Space. Optionally, the TTL may be configured by setting the `ttl`
   * attribute.
   *
   * A custom subdomain may be configured by specifying the `custom_domain` and
   * `certificate_id` attributes.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public cdnCreateEndpoint({
    requestBody,
  }: {
    requestBody: {
      /**
       * A unique ID that can be used to identify and reference a CDN endpoint.
       */
      readonly id?: string;
      /**
       * The fully qualified domain name (FQDN) for the origin server which provides the content for the CDN. This is currently restricted to a Space.
       */
      origin: string;
      /**
       * The fully qualified domain name (FQDN) from which the CDN-backed content is served.
       */
      readonly endpoint?: string;
      /**
       * The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.
       */
      ttl?: 60 | 600 | 3600 | 86400 | 604800;
      /**
       * The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.
       */
      certificate_id?: string;
      /**
       * The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.
       */
      custom_domain?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the CDN endpoint was created.
       */
      readonly created_at?: string;
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
      url: "/v2/cdn/endpoints",
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
   * Retrieve an Existing CDN Endpoint
   * To show information about an existing CDN endpoint, send a GET request to `/v2/cdn/endpoints/$ENDPOINT_ID`.
   * @returns any The response will be a JSON object with an `endpoint` key. This will be set to an object containing the standard CDN endpoint attributes.
   * @throws ApiError
   */
  public cdnGetEndpoint({
    cdnId,
  }: {
    /**
     * A unique identifier for a CDN endpoint.
     */
    cdnId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/cdn/endpoints/{cdn_id}",
      path: {
        cdn_id: cdnId,
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
   * Update a CDN Endpoint
   * To update the TTL, certificate ID, or the FQDN of the custom subdomain for
   * an existing CDN endpoint, send a PUT request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID`.
   *
   * @returns any The response will be a JSON object with an `endpoint` key. This will be set to an object containing the standard CDN endpoint attributes.
   * @throws ApiError
   */
  public cdnUpdateEndpoints({
    cdnId,
    requestBody,
  }: {
    /**
     * A unique identifier for a CDN endpoint.
     */
    cdnId: string;
    requestBody: {
      /**
       * The amount of time the content is cached by the CDN's edge servers in seconds. TTL must be one of 60, 600, 3600, 86400, or 604800. Defaults to 3600 (one hour) when excluded.
       */
      ttl?: 60 | 600 | 3600 | 86400 | 604800;
      /**
       * The ID of a DigitalOcean managed TLS certificate used for SSL when a custom subdomain is provided.
       */
      certificate_id?: string;
      /**
       * The fully qualified domain name (FQDN) of the custom subdomain used with the CDN endpoint.
       */
      custom_domain?: string;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/cdn/endpoints/{cdn_id}",
      path: {
        cdn_id: cdnId,
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
   * Delete a CDN Endpoint
   * To delete a specific CDN endpoint, send a DELETE request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public cdnDeleteEndpoint({
    cdnId,
  }: {
    /**
     * A unique identifier for a CDN endpoint.
     */
    cdnId: string;
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
      url: "/v2/cdn/endpoints/{cdn_id}",
      path: {
        cdn_id: cdnId,
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
   * Purge the Cache for an Existing CDN Endpoint
   * To purge cached content from a CDN endpoint, send a DELETE request to
   * `/v2/cdn/endpoints/$ENDPOINT_ID/cache`. The body of the request should include
   * a `files` attribute containing a list of cached file paths to be purged. A
   * path may be for a single file or may contain a wildcard (`*`) to recursively
   * purge all files under a directory. When only a wildcard is provided, all
   * cached files will be purged. There is a rate limit of 50 files per 20 seconds
   * that can be purged.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public cdnPurgeCache({
    cdnId,
    requestBody,
  }: {
    /**
     * A unique identifier for a CDN endpoint.
     */
    cdnId: string;
    requestBody: {
      /**
       * An array of strings containing the path to the content to be purged from the CDN cache.
       */
      files: Array<string>;
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
      method: "DELETE",
      url: "/v2/cdn/endpoints/{cdn_id}/cache",
      path: {
        cdn_id: cdnId,
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
}
