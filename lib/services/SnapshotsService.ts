/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SnapshotsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Snapshots
   * To list all of the snapshots available on your account, send a GET request to
   * `/v2/snapshots`.
   *
   * The response will be a JSON object with a key called `snapshots`. This will be
   * set to an array of `snapshot` objects, each of which will contain the standard
   * snapshot attributes.
   *
   * ### Filtering Results by Resource Type
   *
   * It's possible to request filtered results by including certain query parameters.
   *
   * #### List Droplet Snapshots
   *
   * To retrieve only snapshots based on Droplets, include the `resource_type`
   * query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.
   *
   * #### List Volume Snapshots
   *
   * To retrieve only snapshots based on volumes, include the `resource_type`
   * query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.
   *
   * @returns any A JSON object with a key of `snapshots`.
   * @throws ApiError
   */
  public snapshotsList({
    perPage = 20,
    page = 1,
    resourceType,
  }: {
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
    /**
     * Used to filter snapshots by a resource type.
     */
    resourceType?: "droplet" | "volume";
  }): CancelablePromise<
    {
      snapshots?: Array<
        {
          /**
           * The unique identifier for the snapshot.
           */
          id: string;
        } & {
          /**
           * A human-readable name for the snapshot.
           */
          name: string;
          /**
           * A time value given in ISO8601 combined date and time format that represents when the snapshot was created.
           */
          created_at: string;
          /**
           * An array of the regions that the snapshot is available in. The regions are represented by their identifying slug values.
           */
          regions: Array<string>;
          /**
           * The minimum size in GB required for a volume or Droplet to use this snapshot.
           */
          min_disk_size: number;
          /**
           * The billable size of the snapshot in gigabytes.
           */
          size_gigabytes: number;
        } & {
          /**
           * The unique identifier for the resource that the snapshot originated from.
           */
          resource_id: string;
          /**
           * The type of resource that the snapshot originated from.
           */
          resource_type: "droplet" | "volume";
          /**
           * An array of Tags the snapshot has been tagged with.
           */
          tags: Array<string> | null;
        }
      >;
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
      url: "/v2/snapshots",
      query: {
        per_page: perPage,
        page: page,
        resource_type: resourceType,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Retrieve an Existing Snapshot
   * To retrieve information about a snapshot, send a GET request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   *
   * The response will be a JSON object with a key called `snapshot`. The value of
   * this will be an snapshot object containing the standard snapshot attributes.
   *
   * @returns any A JSON object with a key called `snapshot`.
   *
   * @throws ApiError
   */
  public snapshotsGet({
    snapshotId,
  }: {
    /**
     * Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.
     */
    snapshotId: number | string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/snapshots/{snapshot_id}",
      path: {
        snapshot_id: snapshotId,
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
   * Delete a Snapshot
   * Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
   * endpoint. To delete a snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public snapshotsDelete({
    snapshotId,
  }: {
    /**
     * Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.
     */
    snapshotId: number | string;
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
      url: "/v2/snapshots/{snapshot_id}",
      path: {
        snapshot_id: snapshotId,
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
