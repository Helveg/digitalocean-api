/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class BlockStorageService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Block Storage Volumes
   * To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.
   * ## Filtering Results
   * ### By Region
   * The `region` may be provided as query parameter in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
   * ### By Name
   * It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.
   * **Note:** You can only create one volume per region with the same name.
   * ### By Name and Region
   * It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
   *
   *
   *
   * @returns any The response will be a JSON object with a key called `volumes`. This will be set to an array of volume objects, each of which will contain the standard volume attributes.
   * @throws ApiError
   */
  public volumesList({
    name,
    region,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The block storage volume's name.
     */
    name?: string;
    /**
     * The slug identifier for the region where the resource is available.
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
      volumes: Array<{
        /**
         * The unique identifier for the block storage volume.
         */
        readonly id?: string;
        /**
         * An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.
         */
        readonly droplet_ids?: Array<number> | null;
        /**
         * A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter.
         */
        name?: string;
        /**
         * An optional free-form text field to describe a block storage volume.
         */
        description?: string;
        /**
         * The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.
         */
        size_gigabytes?: number;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the block storage volume was created.
         */
        readonly created_at?: string;
        /**
         * A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.
         */
        tags?: Array<string> | null;
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
      url: "/v2/volumes",
      query: {
        name: name,
        region: region,
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
   * Create a New Block Storage Volume
   * To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumesCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The unique identifier for the block storage volume.
       */
      readonly id?: string;
      /**
       * An array containing the IDs of the Droplets the volume is attached to. Note that at this time, a volume can only be attached to a single Droplet.
       */
      readonly droplet_ids?: Array<number> | null;
      /**
       * A human-readable name for the block storage volume. Must be lowercase and be composed only of numbers, letters and "-", up to a limit of 64 characters. The name must begin with a letter.
       */
      name?: string;
      /**
       * An optional free-form text field to describe a block storage volume.
       */
      description?: string;
      /**
       * The size of the block storage volume in GiB (1024^3). This field does not apply  when creating a volume from a snapshot.
       */
      size_gigabytes?: number;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the block storage volume was created.
       */
      readonly created_at?: string;
      /**
       * A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.
       */
      tags?: Array<string> | null;
    } & {
      /**
       * The name of the filesystem type to be used on the volume. When provided, the volume will automatically be formatted to the specified filesystem type. Currently, the available options are `ext4` and `xfs`. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to other Droplets is not recommended.
       */
      filesystem_type?: string;
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
      url: "/v2/volumes",
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
   * Delete a Block Storage Volume by Name
   * Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
   * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
   *
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumesDeleteByName({
    name,
    region,
  }: {
    /**
     * The block storage volume's name.
     */
    name?: string;
    /**
     * The slug identifier for the region where the resource is available.
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
      url: "/v2/volumes",
      query: {
        name: name,
        region: region,
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
   * Retrieve an Existing Volume Snapshot
   * To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$SNAPSHOT_ID`.
   *
   *
   * @returns any You will get back a JSON object that has a `snapshot` key. This will contain the standard snapshot attributes
   * @throws ApiError
   */
  public volumeSnapshotsGetById({
    snapshotId,
  }: {
    /**
     * Either the ID of an existing snapshot. This will be an integer for a Droplet snapshot or a string for a volume snapshot.
     */
    snapshotId: number | string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/volumes/snapshots/{snapshot_id}",
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
   * Delete a Volume Snapshot
   * To delete a volume snapshot, send a DELETE request to
   * `/v2/snapshots/$SNAPSHOT_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumeSnapshotsDeleteById({
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
      url: "/v2/volumes/snapshots/{snapshot_id}",
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
   * Retrieve an Existing Block Storage Volume
   * To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.
   *
   *
   * @returns any The response will be a JSON object with a key called `volume`. The value will be an object containing the standard attributes associated with a volume.
   * @throws ApiError
   */
  public volumesGet({
    volumeId,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/volumes/{volume_id}",
      path: {
        volume_id: volumeId,
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
   * Delete a Block Storage Volume
   * To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.
   * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
   *
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumesDelete({
    volumeId,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
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
      url: "/v2/volumes/{volume_id}",
      path: {
        volume_id: volumeId,
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
   * List Snapshots for a Volume
   * To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.
   *
   *
   * @returns any You will get back a JSON object that has a `snapshots` key. This will be set to an array of snapshot objects, each of which contain the standard snapshot attributes
   * @throws ApiError
   */
  public volumeSnapshotsList({
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
      url: "/v2/volumes/{volume_id}/snapshots",
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
   * Create Snapshot from a Volume
   * To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public volumeSnapshotsCreate({
    volumeId,
    requestBody,
  }: {
    /**
     * The ID of the block storage volume.
     */
    volumeId: string;
    requestBody: any;
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
      url: "/v2/volumes/{volume_id}/snapshots",
      path: {
        volume_id: volumeId,
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
