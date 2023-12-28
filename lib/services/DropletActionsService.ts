/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DropletActionsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List Actions for a Droplet
   * To retrieve a list of all actions that have been executed for a Droplet, send
   * a GET request to `/v2/droplets/$DROPLET_ID/actions`.
   *
   * The results will be returned as a JSON object with an `actions` key. This will
   * be set to an array filled with `action` objects containing the standard
   * `action` attributes.
   *
   * @returns any A JSON object with an `actions` key.
   * @throws ApiError
   */
  public dropletActionsList({
    dropletId,
    perPage = 20,
    page = 1,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
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
      url: "/v2/droplets/{droplet_id}/actions",
      path: {
        droplet_id: dropletId,
      },
      query: {
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
   * Initiate a Droplet Action
   * To initiate an action on a Droplet send a POST request to
   * `/v2/droplets/$DROPLET_ID/actions`. In the JSON body to the request,
   * set the `type` attribute to on of the supported action types:
   *
   * | Action                                   | Details |
   * | ---------------------------------------- | ----------- |
   * | <nobr>`enable_backups`</nobr>            | Enables backups for a Droplet |
   * | <nobr>`disable_backups`</nobr>           | Disables backups for a Droplet |
   * | <nobr>`reboot`</nobr>                    | Reboots a Droplet. A `reboot` action is an attempt to reboot the Droplet in a graceful way, similar to using the `reboot` command from the console. |
   * | <nobr>`power_cycle`</nobr>               | Power cycles a Droplet. A `powercycle` action is similar to pushing the reset button on a physical machine, it's similar to booting from scratch. |
   * | <nobr>`shutdown`</nobr>                  | Shutsdown a Droplet. A shutdown action is an attempt to shutdown the Droplet in a graceful way, similar to using the `shutdown` command from the console. Since a `shutdown` command can fail, this action guarantees that the command is issued, not that it succeeds. The preferred way to turn off a Droplet is to attempt a shutdown, with a reasonable timeout, followed by a `power_off` action to ensure the Droplet is off. |
   * | <nobr>`power_off`</nobr>                 | Powers off a Droplet. A `power_off` event is a hard shutdown and should only be used if the `shutdown` action is not successful. It is similar to cutting the power on a server and could lead to complications. |
   * | <nobr>`power_on`</nobr>                  | Powers on a Droplet. |
   * | <nobr>`restore`</nobr>                   | Restore a Droplet using a backup image. The image ID that is passed in must be a backup of the current Droplet instance. The operation will leave any embedded SSH keys intact. |
   * | <nobr>`password_reset`</nobr>            | Resets the root password for a Droplet. A new password will be provided via email. It must be changed after first use. |
   * | <nobr>`resize`</nobr>                    | Resizes a Droplet. Set the `size` attribute to a size slug. If a permanent resize with disk changes included is desired, set the `disk` attribute to `true`. |
   * | <nobr>`rebuild`</nobr>                   | Rebuilds a Droplet from a new base image. Set the `image` attribute to an image ID or slug. |
   * | <nobr>`rename`</nobr>                    | Renames a Droplet. |
   * | <nobr>`change_kernel`</nobr>             | Changes a Droplet's kernel. Only applies to Droplets with externally managed kernels. All Droplets created after March 2017 use internal kernels by default. |
   * | <nobr>`enable_ipv6`</nobr>               | Enables IPv6 for a Droplet. |
   * | <nobr>`snapshot`</nobr>                  | Takes a snapshot of a Droplet. |
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public dropletActionsPost({
    dropletId,
    requestBody,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
    /**
     * The `type` attribute set in the request body will specify the  action that
     * will be taken on the Droplet. Some actions will require additional
     * attributes to be set as well.
     *
     */
    requestBody?:
      | {
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        }
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * The ID of a backup of the current Droplet instance to restore from.
           */
          image?: number;
        })
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * When `true`, the Droplet's disk will be resized in addition to its RAM and CPU. This is a permanent change and cannot be reversed as a Droplet's disk size cannot be decreased.
           */
          disk?: boolean;
          /**
           * The slug identifier for the size to which you wish to resize the Droplet.
           */
          size?: string;
        })
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * The image ID of a public or private image or the slug identifier for a public image. The Droplet will be rebuilt using this image as its base.
           */
          image?: string | number;
        })
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * The new name for the Droplet.
           */
          name?: string;
        })
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * A unique number used to identify and reference a specific kernel.
           */
          kernel?: number;
        })
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * The name to give the new snapshot of the Droplet.
           */
          name?: string;
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
      url: "/v2/droplets/{droplet_id}/actions",
      path: {
        droplet_id: dropletId,
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
   * Acting on Tagged Droplets
   * Some actions can be performed in bulk on tagged Droplets. The actions can be
   * initiated by sending a POST to `/v2/droplets/actions?tag_name=$TAG_NAME` with
   * the action arguments.
   *
   * Only a sub-set of action types are supported:
   *
   * - `power_cycle`
   * - `power_on`
   * - `power_off`
   * - `shutdown`
   * - `enable_ipv6`
   * - `enable_backups`
   * - `disable_backups`
   * - `snapshot`
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public dropletActionsPostByTag({
    tagName,
    requestBody,
  }: {
    /**
     * Used to filter Droplets by a specific tag. Can not be combined with `name`.
     */
    tagName?: string;
    /**
     * The `type` attribute set in the request body will specify the  action that
     * will be taken on the Droplet. Some actions will require additional
     * attributes to be set as well.
     *
     */
    requestBody?:
      | {
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        }
      | ({
          /**
           * The type of action to initiate for the Droplet.
           */
          type:
            | "enable_backups"
            | "disable_backups"
            | "reboot"
            | "power_cycle"
            | "shutdown"
            | "power_off"
            | "power_on"
            | "restore"
            | "password_reset"
            | "resize"
            | "rebuild"
            | "rename"
            | "change_kernel"
            | "enable_ipv6"
            | "snapshot";
        } & {
          /**
           * The name to give the new snapshot of the Droplet.
           */
          name?: string;
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
      url: "/v2/droplets/actions",
      query: {
        tag_name: tagName,
      },
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
   * Retrieve a Droplet Action
   * To retrieve a Droplet action, send a GET request to
   * `/v2/droplets/$DROPLET_ID/actions/$ACTION_ID`.
   *
   * The response will be a JSON object with a key called `action`. The value will
   * be a Droplet action object.
   *
   * @returns any The result will be a JSON object with an action key.  This will be set to an action object containing the standard action attributes.
   * @throws ApiError
   */
  public dropletActionsGet({
    dropletId,
    actionId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
    /**
     * A unique numeric ID that can be used to identify and reference an action.
     */
    actionId: number;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/droplets/{droplet_id}/actions/{action_id}",
      path: {
        droplet_id: dropletId,
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
