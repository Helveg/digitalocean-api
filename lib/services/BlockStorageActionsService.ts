/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class BlockStorageActionsService extends ApiService {
  /**
   * Initiate A Block Storage Action By Volume Name
   * To initiate an action on a block storage volume by Name, send a POST request to
   * `~/v2/volumes/actions`. The body should contain the appropriate
   * attributes for the respective action.
   *
   * ## Attach a Block Storage Volume to a Droplet
   *
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `attach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   *
   * Each volume may only be attached to a single Droplet. However, up to five
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
   * is required.
   *
   * ## Remove a Block Storage Volume from a Droplet
   *
   * | Attribute   | Details                                                             |
   * | ----------- | ------------------------------------------------------------------- |
   * | type        | This must be `detach`                                               |
   * | volume_name | The name of the block storage volume                                |
   * | droplet_id  | Set to the Droplet's ID                                             |
   * | region      | Set to the slug representing the region where the volume is located |
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumeActionsPost({
    requestBody,
    perPage = 20,
    page = 1,
  }: {
    requestBody: {
      /**
       * The volume action to initiate.
       */
      type: "attach" | "detach" | "resize";
      /**
       * The slug identifier for the region where the resource will initially be  available.
       */
      region?:
        | "ams1"
        | "ams2"
        | "ams3"
        | "blr1"
        | "fra1"
        | "lon1"
        | "nyc1"
        | "nyc2"
        | "nyc3"
        | "sfo1"
        | "sfo2"
        | "sfo3"
        | "sgp1"
        | "tor1";
    };
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
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
      url: "/v2/volumes/actions",
      query: {
        per_page: perPage,
        page: page,
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
   * List All Actions for a Volume
   * To retrieve all actions that have been executed on a volume, send a GET request to `/v2/volumes/$VOLUME_ID/actions`.
   *
   *
   * @returns any The response will be an object with a key called `action`. The value of this will be an object that contains the standard volume action attributes.
   * @throws ApiError
   */
  public volumeActionsList({
    volumeId,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
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
      url: "/v2/volumes/{volume_id}/actions",
      path: {
        volume_id: volumeId,
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
   * Initiate A Block Storage Action By Volume Id
   * To initiate an action on a block storage volume by Id, send a POST request to
   * `~/v2/volumes/$VOLUME_ID/actions`. The body should contain the appropriate
   * attributes for the respective action.
   *
   * ## Attach a Block Storage Volume to a Droplet
   *
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `attach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   *
   * Each volume may only be attached to a single Droplet. However, up to seven
   * volumes may be attached to a Droplet at a time. Pre-formatted volumes will be
   * automatically mounted to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS
   * Droplets created on or after April 26, 2018 when attached. On older Droplets,
   * [additional configuration](https://www.digitalocean.com/community/tutorials/how-to-partition-and-format-digitalocean-block-storage-volumes-in-linux#mounting-the-filesystems)
   * is required.
   *
   * ## Remove a Block Storage Volume from a Droplet
   *
   * | Attribute  | Details                                                             |
   * | ---------- | ------------------------------------------------------------------- |
   * | type       | This must be `detach`                                               |
   * | droplet_id | Set to the Droplet's ID                                             |
   * | region     | Set to the slug representing the region where the volume is located |
   *
   * ## Resize a Volume
   *
   * | Attribute      | Details                                                             |
   * | -------------- | ------------------------------------------------------------------- |
   * | type           | This must be `resize`                                               |
   * | size_gigabytes | The new size of the block storage volume in GiB (1024^3)            |
   * | region         | Set to the slug representing the region where the volume is located |
   *
   * Volumes may only be resized upwards. The maximum size for a volume is 16TiB.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumeActionsPostById({
    volumeId,
    requestBody,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
    requestBody: {
      /**
       * The volume action to initiate.
       */
      type: "attach" | "detach" | "resize";
      /**
       * The slug identifier for the region where the resource will initially be  available.
       */
      region?:
        | "ams1"
        | "ams2"
        | "ams3"
        | "blr1"
        | "fra1"
        | "lon1"
        | "nyc1"
        | "nyc2"
        | "nyc3"
        | "sfo1"
        | "sfo2"
        | "sfo3"
        | "sgp1"
        | "tor1";
    };
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
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
      url: "/v2/volumes/{volume_id}/actions",
      path: {
        volume_id: volumeId,
      },
      query: {
        per_page: perPage,
        page: page,
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
   * Retrieve an Existing Volume Action
   * To retrieve the status of a volume action, send a GET request to `/v2/volumes/$VOLUME_ID/actions/$ACTION_ID`.
   *
   *
   * @returns any The response will be an object with a key called `action`. The value of this will be an object that contains the standard volume action attributes
   * @throws ApiError
   */
  public volumeActionsGet({
    volumeId,
    actionId,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
    /**
     * A unique numeric ID that can be used to identify and reference an action.
     */
    actionId: number;
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/volumes/{volume_id}/actions/{action_id}",
      path: {
        volume_id: volumeId,
        action_id: actionId,
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
}
