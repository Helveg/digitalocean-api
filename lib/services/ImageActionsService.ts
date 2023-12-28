/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class ImageActionsService extends ApiService {
  /**
   * List All Actions for an Image
   * To retrieve all actions that have been executed on an image, send a GET request to `/v2/images/$IMAGE_ID/actions`.
   * @returns any The results will be returned as a JSON object with an `actions` key. This will be set to an array filled with action objects containing the standard action attributes.
   * @throws ApiError
   */
  public imageActionsList({
    imageId,
  }: {
    /**
     * A unique number that can be used to identify and reference a specific image.
     */
    imageId: number;
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
      url: "/v2/images/{image_id}/actions",
      path: {
        image_id: imageId,
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
   * Initiate an Image Action
   * The following actions are available on an Image.
   *
   * ## Convert an Image to a Snapshot
   *
   * To convert an image, for example, a backup to a snapshot, send a POST request
   * to `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `convert`.
   *
   * ## Transfer an Image
   *
   * To transfer an image to another region, send a POST request to
   * `/v2/images/$IMAGE_ID/actions`. Set the `type` attribute to `transfer` and set
   * `region` attribute to the slug identifier of the region you wish to transfer
   * to.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public imageActionsPost({
    imageId,
    requestBody,
  }: {
    /**
     * A unique number that can be used to identify and reference a specific image.
     */
    imageId: number;
    requestBody?:
      | {
          /**
           * The action to be taken on the image. Can be either `convert` or `transfer`.
           */
          type: "convert" | "transfer";
        }
      | ({
          /**
           * The action to be taken on the image. Can be either `convert` or `transfer`.
           */
          type: "convert" | "transfer";
        } & {
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region:
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
      url: "/v2/images/{image_id}/actions",
      path: {
        image_id: imageId,
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
   * Retrieve an Existing Action
   * To retrieve the status of an image action, send a GET request to `/v2/images/$IMAGE_ID/actions/$IMAGE_ACTION_ID`.
   * @returns any The response will be an object with a key called `action`. The value of this will be an object that contains the standard image action attributes.
   * @throws ApiError
   */
  public imageActionsGet({
    imageId,
    actionId,
  }: {
    /**
     * A unique number that can be used to identify and reference a specific image.
     */
    imageId: number;
    /**
     * A unique numeric ID that can be used to identify and reference an action.
     */
    actionId: number;
  }): CancelablePromise<{
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
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/images/{image_id}/actions/{action_id}",
      path: {
        image_id: imageId,
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
