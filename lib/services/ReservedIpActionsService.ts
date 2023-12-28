/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ReservedIpActionsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Actions for a Reserved IP
   * To retrieve all actions that have been executed on a reserved IP, send a GET request to `/v2/reserved_ips/$RESERVED_IP/actions`.
   * @returns any The results will be returned as a JSON object with an `actions` key. This will be set to an array filled with action objects containing the standard reserved IP action attributes.
   * @throws ApiError
   */
  public reservedIPsActionsList({
    reservedIp,
  }: {
    /**
     * A reserved IP address.
     */
    reservedIp: string;
  }): CancelablePromise<
    {
      actions?: Array<{
        /**
         * A unique numeric ID that can be used to identify and reference an action.
         */
        id?: number;
        /**
         * The current status of the action. This can be "in-progress", "completed", or "errored".
         */
        status?: "in-progress" | "completed" | "errored";
        /**
         * This is the type of action that the object represents. For example, this could be "transfer" to represent the state of an image transfer action.
         */
        type?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the action was initiated.
         */
        started_at?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the action was completed.
         */
        completed_at?: string | null;
        /**
         * A unique identifier for the resource that the action is associated with.
         */
        resource_id?: number | null;
        /**
         * The type of resource that the action is associated with.
         */
        resource_type?: string;
        region?: {
          /**
           * The display name of the region.  This will be a full name that is used in the control panel and other interfaces.
           */
          name: string;
          /**
           * A human-readable string that is used as a unique identifier for each region.
           */
          slug: string;
          /**
           * This attribute is set to an array which contains features available in this region
           */
          features: any;
          /**
           * This is a boolean value that represents whether new Droplets can be created in this region.
           */
          available: boolean;
          /**
           * This attribute is set to an array which contains the identifying slugs for the sizes available in this region.
           */
          sizes: any;
        };
        region_slug?: (string & string) | null;
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
      url: "/v2/reserved_ips/{reserved_ip}/actions",
      path: {
        reserved_ip: reservedIp,
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
   * Initiate a Reserved IP Action
   * To initiate an action on a reserved IP send a POST request to
   * `/v2/reserved_ips/$RESERVED_IP/actions`. In the JSON body to the request,
   * set the `type` attribute to on of the supported action types:
   *
   * | Action     | Details
   * |------------|--------
   * | `assign`   | Assigns a reserved IP to a Droplet
   * | `unassign` | Unassign a reserved IP from a Droplet
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public reservedIPsActionsPost({
    reservedIp,
    requestBody,
  }: {
    /**
     * A reserved IP address.
     */
    reservedIp: string;
    /**
     * The `type` attribute set in the request body will specify the action that
     * will be taken on the reserved IP.
     *
     */
    requestBody?:
      | ({
          /**
           * The type of action to initiate for the reserved IP.
           */
          type: "assign" | "unassign";
        } & Record<string, any>)
      | ({
          /**
           * The type of action to initiate for the reserved IP.
           */
          type: "assign" | "unassign";
        } & {
          /**
           * The ID of the Droplet that the reserved IP will be assigned to.
           */
          droplet_id: number;
        });
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
      url: "/v2/reserved_ips/{reserved_ip}/actions",
      path: {
        reserved_ip: reservedIp,
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
   * Retrieve an Existing Reserved IP Action
   * To retrieve the status of a reserved IP action, send a GET request to `/v2/reserved_ips/$RESERVED_IP/actions/$ACTION_ID`.
   * @returns any The response will be an object with a key called `action`. The value of this will be an object that contains the standard reserved IP action attributes.
   * @throws ApiError
   */
  public reservedIPsActionsGet({
    reservedIp,
    actionId,
  }: {
    /**
     * A reserved IP address.
     */
    reservedIp: string;
    /**
     * A unique numeric ID that can be used to identify and reference an action.
     */
    actionId: number;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/reserved_ips/{reserved_ip}/actions/{action_id}",
      path: {
        reserved_ip: reservedIp,
        action_id: actionId,
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
