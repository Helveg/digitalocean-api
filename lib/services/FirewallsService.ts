/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FirewallsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Firewalls
   * To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
   * @returns any To list all of the firewalls available on your account, send a GET request to `/v2/firewalls`.
   * @throws ApiError
   */
  public firewallsList({
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
      firewalls?: Array<{
        inbound_rules?: Array<{
          /**
           * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
           */
          protocol: "tcp" | "udp" | "icmp";
          /**
           * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
           */
          ports: string;
        }> | null;
        outbound_rules?: Array<{
          /**
           * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
           */
          protocol: "tcp" | "udp" | "icmp";
          /**
           * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
           */
          ports: string;
        }> | null;
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
      url: "/v2/firewalls",
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
   * Create a New Firewall
   * To create a new firewall, send a POST request to `/v2/firewalls`. The request
   * must contain at least one inbound or outbound access rule.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsCreate({
    requestBody,
  }: {
    requestBody?: {
      inbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
      outbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
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
      url: "/v2/firewalls",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Retrieve an Existing Firewall
   * To show information about an existing firewall, send a GET request to `/v2/firewalls/$FIREWALL_ID`.
   * @returns any The response will be a JSON object with a firewall key. This will be set to an object containing the standard firewall attributes.
   * @throws ApiError
   */
  public firewallsGet({
    firewallId,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/firewalls/{firewall_id}",
      path: {
        firewall_id: firewallId,
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
   * Update a Firewall
   * To update the configuration of an existing firewall, send a PUT request to
   * `/v2/firewalls/$FIREWALL_ID`. The request should contain a full representation
   * of the firewall including existing attributes. **Note that any attributes that
   * are not provided will be reset to their default values.**
   *
   * @returns any The response will be a JSON object with a `firewall` key. This will be set to an object containing the standard firewall attributes.
   * @throws ApiError
   */
  public firewallsUpdate({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: {
      inbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
      outbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/firewalls/{firewall_id}",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Delete a Firewall
   * To delete a firewall send a DELETE request to `/v2/firewalls/$FIREWALL_ID`.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsDelete({
    firewallId,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
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
      url: "/v2/firewalls/{firewall_id}",
      path: {
        firewall_id: firewallId,
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
   * Add Droplets to a Firewall
   * To assign a Droplet to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there
   * should be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsAssignDroplets({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: any;
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
      url: "/v2/firewalls/{firewall_id}/droplets",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Remove Droplets from a Firewall
   * To remove a Droplet from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/droplets`. In the body of the request, there should
   * be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsDeleteDroplets({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: any;
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
      url: "/v2/firewalls/{firewall_id}/droplets",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Add Tags to a Firewall
   * To assign a tag representing a group of Droplets to a firewall, send a POST
   * request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the request,
   * there should be a `tags` attribute containing a list of tag names.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsAddTags({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: any;
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
      url: "/v2/firewalls/{firewall_id}/tags",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Remove Tags from a Firewall
   * To remove a tag representing a group of Droplets from a firewall, send a
   * DELETE request to `/v2/firewalls/$FIREWALL_ID/tags`. In the body of the
   * request, there should be a `tags` attribute containing a list of tag names.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsDeleteTags({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: any;
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
      url: "/v2/firewalls/{firewall_id}/tags",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Add Rules to a Firewall
   * To add additional access rules to a firewall, send a POST request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * inbound_rules and/or outbound_rules attribute containing an array of rules to
   * be added.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsAddRules({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: {
      inbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
      outbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
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
      url: "/v2/firewalls/{firewall_id}/rules",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Remove Rules from a Firewall
   * To remove access rules from a firewall, send a DELETE request to
   * `/v2/firewalls/$FIREWALL_ID/rules`. The body of the request may include an
   * `inbound_rules` and/or `outbound_rules` attribute containing an array of rules
   * to be removed.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public firewallsDeleteRules({
    firewallId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to identify and reference a firewall.
     */
    firewallId: string;
    requestBody?: {
      inbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
      outbound_rules?: Array<{
        /**
         * The type of traffic to be allowed. This may be one of `tcp`, `udp`, or `icmp`.
         */
        protocol: "tcp" | "udp" | "icmp";
        /**
         * The ports on which traffic will be allowed specified as a string containing a single port, a range (e.g. "8000-9000"), or "0" when all ports are open for a protocol. For ICMP rules this parameter will always return "0".
         */
        ports: string;
      }> | null;
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
      url: "/v2/firewalls/{firewall_id}/rules",
      path: {
        firewall_id: firewallId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
