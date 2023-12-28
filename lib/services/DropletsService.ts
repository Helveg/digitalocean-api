/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class DropletsService extends ApiService {
  /**
   * List All Droplets
   * To list all Droplets in your account, send a GET request to `/v2/droplets`.
   *
   * The response body will be a JSON object with a key of `droplets`. This will be
   * set to an array containing objects each representing a Droplet. These will
   * contain the standard Droplet attributes.
   *
   * ### Filtering Results by Tag
   *
   * It's possible to request filtered results by including certain query parameters.
   * To only list Droplets assigned to a specific tag, include the `tag_name` query
   * parameter set to the name of the tag in your GET request. For example,
   * `/v2/droplets?tag_name=$TAG_NAME`.
   *
   * @returns any A JSON object with a key of `droplets`.
   * @throws ApiError
   */
  public dropletsList({
    perPage = 20,
    page = 1,
    tagName,
    name,
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
     * Used to filter Droplets by a specific tag. Can not be combined with `name`.
     */
    tagName?: string;
    /**
     * Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.
     */
    name?: string;
  }): CancelablePromise<
    {
      droplets?: Array<{
        /**
         * A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation.
         */
        id: number;
        /**
         * The human-readable name set for the Droplet instance.
         */
        name: string;
        /**
         * Memory of the Droplet in megabytes.
         */
        memory: number;
        /**
         * The number of virtual CPUs.
         */
        vcpus: number;
        /**
         * The size of the Droplet's disk in gigabytes.
         */
        disk: number;
        /**
         * A boolean value indicating whether the Droplet has been locked, preventing actions by users.
         */
        locked: boolean;
        /**
         * A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive".
         */
        status: "new" | "active" | "off" | "archive";
        /**
         * **Note**: All Droplets created after March 2017 use internal kernels by default.
         * These Droplets will have this attribute set to `null`.
         *
         * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
         * for Droplets with externally managed kernels. This will initially be set to
         * the kernel of the base image when the Droplet is created.
         *
         * @deprecated
         */
        kernel?: {
          /**
           * A unique number used to identify and reference a specific kernel.
           */
          id?: number;
          /**
           * The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question.
           */
          name?: string;
          /**
           * A standard kernel version string representing the version, patch, and release information.
           */
          version?: string;
        } | null;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the Droplet was created.
         */
        created_at: string;
        /**
         * An array of features enabled on this Droplet.
         */
        features: Array<string>;
        /**
         * An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.
         */
        backup_ids: Array<number>;
        /**
         * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
         */
        next_backup_window: {
          /**
           * A time value given in ISO8601 combined date and time format specifying the start of the Droplet's backup window.
           */
          start?: string;
          /**
           * A time value given in ISO8601 combined date and time format specifying the end of the Droplet's backup window.
           */
          end?: string;
        } | null;
        /**
         * An array of snapshot IDs of any snapshots created from the Droplet instance.
         */
        snapshot_ids: Array<number>;
        image: {
          /**
           * A unique number that can be used to identify and reference a specific image.
           */
          readonly id?: number;
          /**
           * The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.
           */
          name?: string;
          /**
           * Describes the kind of image. It may be one of `base`, `snapshot`, `backup`, `custom`, or `admin`. Respectively, this specifies whether an image is a DigitalOcean base OS image, user-generated Droplet snapshot, automatically created Droplet backup, user-provided virtual machine image, or an image used for DigitalOcean managed resources (e.g. DOKS worker nodes).
           */
          type?: "base" | "snapshot" | "backup" | "custom" | "admin";
          /**
           * The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.
           */
          distribution?:
            | "Arch Linux"
            | "CentOS"
            | "CoreOS"
            | "Debian"
            | "Fedora"
            | "Fedora Atomic"
            | "FreeBSD"
            | "Gentoo"
            | "openSUSE"
            | "RancherOS"
            | "Rocky Linux"
            | "Ubuntu"
            | "Unknown";
          /**
           * A uniquely identifying string that is associated with each of the DigitalOcean-provided public images. These can be used to reference a public image as an alternative to the numeric id.
           */
          slug?: string | null;
          /**
           * This is a boolean value that indicates whether the image in question is public or not. An image that is public is available to all accounts. A non-public image is only accessible from your account.
           */
          public?: boolean;
          /**
           * This attribute is an array of the regions that the image is available in. The regions are represented by their identifying slug values.
           */
          regions?: Array<
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
            | "tor1"
          >;
          /**
           * A time value given in ISO8601 combined date and time format that represents when the image was created.
           */
          created_at?: string;
          /**
           * The minimum disk size in GB required for a Droplet to use this image.
           */
          min_disk_size?: number | null;
          /**
           * The size of the image in gigabytes.
           */
          size_gigabytes?: number | null;
          /**
           * An optional free-form text field to describe an image.
           */
          description?: string;
          /**
           * A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.
           */
          tags?: Array<string> | null;
          /**
           * A status string indicating the state of a custom image. This may be `NEW`,
           * `available`, `pending`, `deleted`, or `retired`.
           */
          status?: "NEW" | "available" | "pending" | "deleted" | "retired";
          /**
           * A string containing information about errors that may occur when importing
           * a custom image.
           */
          error_message?: string;
        };
        /**
         * A flat array including the unique identifier for each Block Storage volume attached to the Droplet.
         */
        volume_ids: Array<string>;
        size: {
          /**
           * A human-readable string that is used to uniquely identify each size.
           */
          slug: string;
          /**
           * The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes.
           */
          memory: number;
          /**
           * The integer of number CPUs allocated to Droplets of this size.
           */
          vcpus: number;
          /**
           * The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes.
           */
          disk: number;
          /**
           * The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes.
           */
          transfer: number;
          /**
           * This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars.
           */
          price_monthly: number;
          /**
           * This describes the price of the Droplet size as measured hourly. The value is measured in US dollars.
           */
          price_hourly: number;
          /**
           * An array containing the region slugs where this size is available for Droplet creates.
           */
          regions: Array<string>;
          /**
           * This is a boolean value that represents whether new Droplets can be created with this size.
           */
          available: boolean;
          /**
           * A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized.
           */
          description: string;
        };
        /**
         * The unique slug identifier for the size of this Droplet.
         */
        size_slug: string;
        /**
         * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
         */
        networks: {
          v4?: Array<{
            /**
             * The IP address of the IPv4 network interface.
             */
            ip_address?: string;
            /**
             * The netmask of the IPv4 network interface.
             */
            netmask?: string;
            /**
             * The gateway of the specified IPv4 network interface.
             *
             * For private interfaces, a gateway is not provided. This is denoted by
             * returning `nil` as its value.
             *
             */
            gateway?: string;
            /**
             * The type of the IPv4 network interface.
             */
            type?: "public" | "private";
          }>;
          v6?: Array<{
            /**
             * The IP address of the IPv6 network interface.
             */
            ip_address?: string;
            /**
             * The netmask of the IPv6 network interface.
             */
            netmask?: number;
            /**
             * The gateway of the specified IPv6 network interface.
             */
            gateway?: string;
            /**
             * The type of the IPv6 network interface.
             *
             * **Note**: IPv6 private  networking is not currently supported.
             *
             */
            type?: "public";
          }>;
        };
        region: {
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
        /**
         * An array of Tags the Droplet has been tagged with.
         */
        tags: Array<string>;
        /**
         * A string specifying the UUID of the VPC to which the Droplet is assigned.
         */
        vpc_uuid?: string;
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
      url: "/v2/droplets",
      query: {
        per_page: perPage,
        page: page,
        tag_name: tagName,
        name: name,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create a New Droplet
   * To create a new Droplet, send a POST request to `/v2/droplets` setting the
   * required attributes.
   *
   * A Droplet will be created using the provided information. The response body
   * will contain a JSON object with a key called `droplet`. The value will be an
   * object containing the standard attributes for your new Droplet. The response
   * code, 202 Accepted, does not indicate the success or failure of the operation,
   * just that the request has been accepted for processing. The `actions` returned
   * as part of the response's `links` object can be used to check the status
   * of the Droplet create event.
   *
   * ### Create Multiple Droplets
   *
   * Creating multiple Droplets is very similar to creating a single Droplet.
   * Instead of sending `name` as a string, send `names` as an array of strings. A
   * Droplet will be created for each name you send using the associated
   * information. Up to ten Droplets may be created this way at a time.
   *
   * Rather than returning a single Droplet, the response body will contain a JSON
   * array with a key called `droplets`. This will be set to an array of JSON
   * objects, each of which will contain the standard Droplet attributes. The
   * response code, 202 Accepted, does not indicate the success or failure of any
   * operation, just that the request has been accepted for processing. The array
   * of `actions` returned as part of the response's `links` object can be used to
   * check the status of each individual Droplet create event.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public dropletsCreate({
    requestBody,
  }: {
    requestBody?:
      | ({
          /**
           * The human-readable string you wish to use when displaying the Droplet name. The name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. The name set during creation will also determine the hostname for the Droplet in its internal configuration.
           */
          name: string;
        } & {
          /**
           * The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be used to deploy the Droplet in any of the that region's locations (`nyc1`, `nyc2`, or `nyc3`). If the region is omitted from the create request completely, the Droplet may deploy in any region.
           */
          region?: string;
          /**
           * The slug identifier for the size that you wish to select for this Droplet.
           */
          size: string;
          /**
           * The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.
           */
          image: string | number;
          /**
           * An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation.
           */
          ssh_keys?: Array<string | number>;
          /**
           * A boolean indicating whether automated backups should be enabled for the Droplet.
           */
          backups?: boolean;
          /**
           * A boolean indicating whether to enable IPv6 on the Droplet.
           */
          ipv6?: boolean;
          /**
           * A boolean indicating whether to install the DigitalOcean agent for monitoring.
           */
          monitoring?: boolean;
          /**
           * A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.
           */
          tags?: Array<string> | null;
          /**
           * A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size.
           */
          user_data?: string;
          /**
           * This parameter has been deprecated. Use `vpc_uuid` instead to specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet will be placed in your account's default VPC for the region.
           * @deprecated
           */
          private_networking?: boolean;
          /**
           * An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.
           */
          volumes?: Array<string>;
          /**
           * A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.
           */
          vpc_uuid?: string;
          /**
           * A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to `false`. To make installation errors fatal, explicitly set it to `true`.
           */
          with_droplet_agent?: boolean;
        })
      | ({
          /**
           * An array of human human-readable strings you wish to use when displaying the Droplet name. Each name, if set to a domain name managed in the DigitalOcean DNS management system, will configure a PTR record for the Droplet. Each name set during creation will also determine the hostname for the Droplet in its internal configuration.
           */
          names: Array<string>;
        } & {
          /**
           * The slug identifier for the region that you wish to deploy the Droplet in. If the specific datacenter is not not important, a slug prefix (e.g. `nyc`) can be used to deploy the Droplet in any of the that region's locations (`nyc1`, `nyc2`, or `nyc3`). If the region is omitted from the create request completely, the Droplet may deploy in any region.
           */
          region?: string;
          /**
           * The slug identifier for the size that you wish to select for this Droplet.
           */
          size: string;
          /**
           * The image ID of a public or private image or the slug identifier for a public image. This image will be the base image for your Droplet.
           */
          image: string | number;
          /**
           * An array containing the IDs or fingerprints of the SSH keys that you wish to embed in the Droplet's root account upon creation.
           */
          ssh_keys?: Array<string | number>;
          /**
           * A boolean indicating whether automated backups should be enabled for the Droplet.
           */
          backups?: boolean;
          /**
           * A boolean indicating whether to enable IPv6 on the Droplet.
           */
          ipv6?: boolean;
          /**
           * A boolean indicating whether to install the DigitalOcean agent for monitoring.
           */
          monitoring?: boolean;
          /**
           * A flat array of tag names as strings to apply to the Droplet after it is created. Tag names can either be existing or new tags.
           */
          tags?: Array<string> | null;
          /**
           * A string containing 'user data' which may be used to configure the Droplet on first boot, often a 'cloud-config' file or Bash script. It must be plain text and may not exceed 64 KiB in size.
           */
          user_data?: string;
          /**
           * This parameter has been deprecated. Use `vpc_uuid` instead to specify a VPC network for the Droplet. If no `vpc_uuid` is provided, the Droplet will be placed in your account's default VPC for the region.
           * @deprecated
           */
          private_networking?: boolean;
          /**
           * An array of IDs for block storage volumes that will be attached to the Droplet once created. The volumes must not already be attached to an existing Droplet.
           */
          volumes?: Array<string>;
          /**
           * A string specifying the UUID of the VPC to which the Droplet will be assigned. If excluded, the Droplet will be assigned to your account's default VPC for the region.
           */
          vpc_uuid?: string;
          /**
           * A boolean indicating whether to install the DigitalOcean agent used for providing access to the Droplet web console in the control panel. By default, the agent is installed on new Droplets but installation errors (i.e. OS not supported) are ignored. To prevent it from being installed, set to `false`. To make installation errors fatal, explicitly set it to `true`.
           */
          with_droplet_agent?: boolean;
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
      url: "/v2/droplets",
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
   * Deleting Droplets by Tag
   * To delete **all** Droplets assigned to a specific tag, include the `tag_name`
   * query parameter set to the name of the tag in your DELETE request. For
   * example,  `/v2/droplets?tag_name=$TAG_NAME`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public dropletsDestroyByTag({
    tagName,
  }: {
    /**
     * Specifies Droplets to be deleted by tag.
     */
    tagName: string;
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
      url: "/v2/droplets",
      query: {
        tag_name: tagName,
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
   * Retrieve an Existing Droplet
   * To show information about an individual Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID`.
   *
   * @returns any The response will be a JSON object with a key called `droplet`. This will be
   * set to a JSON object that contains the standard Droplet attributes.
   *
   * @throws ApiError
   */
  public dropletsGet({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/droplets/{droplet_id}",
      path: {
        droplet_id: dropletId,
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
   * Delete an Existing Droplet
   * To delete a Droplet, send a DELETE request to `/v2/droplets/$DROPLET_ID`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public dropletsDestroy({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
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
      url: "/v2/droplets/{droplet_id}",
      path: {
        droplet_id: dropletId,
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
   * List Backups for a Droplet
   * To retrieve any backups associated with a Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/backups`.
   *
   * You will get back a JSON object that has a `backups` key. This will be set to
   * an array of backup objects, each of which contain the standard
   * Droplet backup attributes.
   *
   * @returns any A JSON object with an `backups` key.
   * @throws ApiError
   */
  public dropletsListBackups({
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
      backups?: Array<
        {
          /**
           * The unique identifier for the snapshot or backup.
           */
          id: number;
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
           * Describes the kind of image. It may be one of `snapshot` or `backup`. This specifies whether an image is a user-generated Droplet snapshot or automatically created Droplet backup.
           */
          type: "snapshot" | "backup";
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
      url: "/v2/droplets/{droplet_id}/backups",
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
   * List Snapshots for a Droplet
   * To retrieve the snapshots that have been created from a Droplet, send a GET
   * request to `/v2/droplets/$DROPLET_ID/snapshots`.
   *
   * You will get back a JSON object that has a `snapshots` key. This will be set
   * to an array of snapshot objects, each of which contain the standard Droplet
   * snapshot attributes.
   *
   * @returns any A JSON object with an `snapshots` key.
   * @throws ApiError
   */
  public dropletsListSnapshots({
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
      snapshots?: Array<
        {
          /**
           * The unique identifier for the snapshot or backup.
           */
          id: number;
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
           * Describes the kind of image. It may be one of `snapshot` or `backup`. This specifies whether an image is a user-generated Droplet snapshot or automatically created Droplet backup.
           */
          type: "snapshot" | "backup";
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
      url: "/v2/droplets/{droplet_id}/snapshots",
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
   * List All Available Kernels for a Droplet
   * To retrieve a list of all kernels available to a Droplet, send a GET request
   * to `/v2/droplets/$DROPLET_ID/kernels`
   *
   * The response will be a JSON object that has a key called `kernels`. This will
   * be set to an array of `kernel` objects, each of which contain the standard
   * `kernel` attributes.
   *
   * @returns any A JSON object that has a key called `kernels`.
   * @throws ApiError
   */
  public dropletsListKernels({
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
      kernels?: Array<{
        /**
         * A unique number used to identify and reference a specific kernel.
         */
        id?: number;
        /**
         * The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question.
         */
        name?: string;
        /**
         * A standard kernel version string representing the version, patch, and release information.
         */
        version?: string;
      } | null>;
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
      url: "/v2/droplets/{droplet_id}/kernels",
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
   * List all Firewalls Applied to a Droplet
   * To retrieve a list of all firewalls available to a Droplet, send a GET request
   * to `/v2/droplets/$DROPLET_ID/firewalls`
   *
   * The response will be a JSON object that has a key called `firewalls`. This will
   * be set to an array of `firewall` objects, each of which contain the standard
   * `firewall` attributes.
   *
   * @returns any A JSON object that has a key called `firewalls`.
   * @throws ApiError
   */
  public dropletsListFirewalls({
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
      url: "/v2/droplets/{droplet_id}/firewalls",
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
   * List Neighbors for a Droplet
   * To retrieve a list of any "neighbors" (i.e. Droplets that are co-located on
   * the same physical hardware) for a specific Droplet, send a GET request to
   * `/v2/droplets/$DROPLET_ID/neighbors`.
   *
   * The results will be returned as a JSON object with a key of `droplets`. This
   * will be set to an array containing objects representing any other Droplets
   * that share the same physical hardware. An empty array indicates that the
   * Droplet is not co-located any other Droplets associated with your account.
   *
   * @returns any A JSON object with an `droplets` key.
   * @throws ApiError
   */
  public dropletsListNeighbors({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
  }): CancelablePromise<{
    droplets?: Array<{
      /**
       * A unique identifier for each Droplet instance. This is automatically generated upon Droplet creation.
       */
      id: number;
      /**
       * The human-readable name set for the Droplet instance.
       */
      name: string;
      /**
       * Memory of the Droplet in megabytes.
       */
      memory: number;
      /**
       * The number of virtual CPUs.
       */
      vcpus: number;
      /**
       * The size of the Droplet's disk in gigabytes.
       */
      disk: number;
      /**
       * A boolean value indicating whether the Droplet has been locked, preventing actions by users.
       */
      locked: boolean;
      /**
       * A status string indicating the state of the Droplet instance. This may be "new", "active", "off", or "archive".
       */
      status: "new" | "active" | "off" | "archive";
      /**
       * **Note**: All Droplets created after March 2017 use internal kernels by default.
       * These Droplets will have this attribute set to `null`.
       *
       * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
       * for Droplets with externally managed kernels. This will initially be set to
       * the kernel of the base image when the Droplet is created.
       *
       * @deprecated
       */
      kernel?: {
        /**
         * A unique number used to identify and reference a specific kernel.
         */
        id?: number;
        /**
         * The display name of the kernel. This is shown in the web UI and is generally a descriptive title for the kernel in question.
         */
        name?: string;
        /**
         * A standard kernel version string representing the version, patch, and release information.
         */
        version?: string;
      } | null;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the Droplet was created.
       */
      created_at: string;
      /**
       * An array of features enabled on this Droplet.
       */
      features: Array<string>;
      /**
       * An array of backup IDs of any backups that have been taken of the Droplet instance.  Droplet backups are enabled at the time of the instance creation.
       */
      backup_ids: Array<number>;
      /**
       * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
       */
      next_backup_window: {
        /**
         * A time value given in ISO8601 combined date and time format specifying the start of the Droplet's backup window.
         */
        start?: string;
        /**
         * A time value given in ISO8601 combined date and time format specifying the end of the Droplet's backup window.
         */
        end?: string;
      } | null;
      /**
       * An array of snapshot IDs of any snapshots created from the Droplet instance.
       */
      snapshot_ids: Array<number>;
      image: {
        /**
         * A unique number that can be used to identify and reference a specific image.
         */
        readonly id?: number;
        /**
         * The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.
         */
        name?: string;
        /**
         * Describes the kind of image. It may be one of `base`, `snapshot`, `backup`, `custom`, or `admin`. Respectively, this specifies whether an image is a DigitalOcean base OS image, user-generated Droplet snapshot, automatically created Droplet backup, user-provided virtual machine image, or an image used for DigitalOcean managed resources (e.g. DOKS worker nodes).
         */
        type?: "base" | "snapshot" | "backup" | "custom" | "admin";
        /**
         * The name of a custom image's distribution. Currently, the valid values are  `Arch Linux`, `CentOS`, `CoreOS`, `Debian`, `Fedora`, `Fedora Atomic`,  `FreeBSD`, `Gentoo`, `openSUSE`, `RancherOS`, `Rocky Linux`, `Ubuntu`, and `Unknown`.  Any other value will be accepted but ignored, and `Unknown` will be used in its place.
         */
        distribution?:
          | "Arch Linux"
          | "CentOS"
          | "CoreOS"
          | "Debian"
          | "Fedora"
          | "Fedora Atomic"
          | "FreeBSD"
          | "Gentoo"
          | "openSUSE"
          | "RancherOS"
          | "Rocky Linux"
          | "Ubuntu"
          | "Unknown";
        /**
         * A uniquely identifying string that is associated with each of the DigitalOcean-provided public images. These can be used to reference a public image as an alternative to the numeric id.
         */
        slug?: string | null;
        /**
         * This is a boolean value that indicates whether the image in question is public or not. An image that is public is available to all accounts. A non-public image is only accessible from your account.
         */
        public?: boolean;
        /**
         * This attribute is an array of the regions that the image is available in. The regions are represented by their identifying slug values.
         */
        regions?: Array<
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
          | "tor1"
        >;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the image was created.
         */
        created_at?: string;
        /**
         * The minimum disk size in GB required for a Droplet to use this image.
         */
        min_disk_size?: number | null;
        /**
         * The size of the image in gigabytes.
         */
        size_gigabytes?: number | null;
        /**
         * An optional free-form text field to describe an image.
         */
        description?: string;
        /**
         * A flat array of tag names as strings to be applied to the resource. Tag names may be for either existing or new tags.
         */
        tags?: Array<string> | null;
        /**
         * A status string indicating the state of a custom image. This may be `NEW`,
         * `available`, `pending`, `deleted`, or `retired`.
         */
        status?: "NEW" | "available" | "pending" | "deleted" | "retired";
        /**
         * A string containing information about errors that may occur when importing
         * a custom image.
         */
        error_message?: string;
      };
      /**
       * A flat array including the unique identifier for each Block Storage volume attached to the Droplet.
       */
      volume_ids: Array<string>;
      size: {
        /**
         * A human-readable string that is used to uniquely identify each size.
         */
        slug: string;
        /**
         * The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes.
         */
        memory: number;
        /**
         * The integer of number CPUs allocated to Droplets of this size.
         */
        vcpus: number;
        /**
         * The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes.
         */
        disk: number;
        /**
         * The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes.
         */
        transfer: number;
        /**
         * This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars.
         */
        price_monthly: number;
        /**
         * This describes the price of the Droplet size as measured hourly. The value is measured in US dollars.
         */
        price_hourly: number;
        /**
         * An array containing the region slugs where this size is available for Droplet creates.
         */
        regions: Array<string>;
        /**
         * This is a boolean value that represents whether new Droplets can be created with this size.
         */
        available: boolean;
        /**
         * A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized.
         */
        description: string;
      };
      /**
       * The unique slug identifier for the size of this Droplet.
       */
      size_slug: string;
      /**
       * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
       */
      networks: {
        v4?: Array<{
          /**
           * The IP address of the IPv4 network interface.
           */
          ip_address?: string;
          /**
           * The netmask of the IPv4 network interface.
           */
          netmask?: string;
          /**
           * The gateway of the specified IPv4 network interface.
           *
           * For private interfaces, a gateway is not provided. This is denoted by
           * returning `nil` as its value.
           *
           */
          gateway?: string;
          /**
           * The type of the IPv4 network interface.
           */
          type?: "public" | "private";
        }>;
        v6?: Array<{
          /**
           * The IP address of the IPv6 network interface.
           */
          ip_address?: string;
          /**
           * The netmask of the IPv6 network interface.
           */
          netmask?: number;
          /**
           * The gateway of the specified IPv6 network interface.
           */
          gateway?: string;
          /**
           * The type of the IPv6 network interface.
           *
           * **Note**: IPv6 private  networking is not currently supported.
           *
           */
          type?: "public";
        }>;
      };
      region: {
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
      /**
       * An array of Tags the Droplet has been tagged with.
       */
      tags: Array<string>;
      /**
       * A string specifying the UUID of the VPC to which the Droplet is assigned.
       */
      vpc_uuid?: string;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/droplets/{droplet_id}/neighbors",
      path: {
        droplet_id: dropletId,
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
   * List Associated Resources for a Droplet
   * To list the associated billable resources that can be destroyed along with a
   * Droplet, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources` endpoint.
   *
   * The response will be a JSON object containing `snapshots`, `volumes`, and
   * `volume_snapshots` keys. Each will be set to an array of objects containing
   * information about the associated resources.
   *
   * @returns any A JSON object containing `snapshots`, `volumes`, and `volume_snapshots` keys.
   * @throws ApiError
   */
  public dropletsListAssociatedResources({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
  }): CancelablePromise<{
    reserved_ips?: Array<{
      /**
       * The unique identifier for the resource associated with the Droplet.
       */
      id?: string;
      /**
       * The name of the resource associated with the Droplet.
       */
      name?: string;
      /**
       * The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.
       */
      cost?: string;
    }>;
    floating_ips?: Array<{
      /**
       * The unique identifier for the resource associated with the Droplet.
       */
      id?: string;
      /**
       * The name of the resource associated with the Droplet.
       */
      name?: string;
      /**
       * The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.
       */
      cost?: string;
    }>;
    snapshots?: Array<{
      /**
       * The unique identifier for the resource associated with the Droplet.
       */
      id?: string;
      /**
       * The name of the resource associated with the Droplet.
       */
      name?: string;
      /**
       * The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.
       */
      cost?: string;
    }>;
    volumes?: Array<{
      /**
       * The unique identifier for the resource associated with the Droplet.
       */
      id?: string;
      /**
       * The name of the resource associated with the Droplet.
       */
      name?: string;
      /**
       * The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.
       */
      cost?: string;
    }>;
    volume_snapshots?: Array<{
      /**
       * The unique identifier for the resource associated with the Droplet.
       */
      id?: string;
      /**
       * The name of the resource associated with the Droplet.
       */
      name?: string;
      /**
       * The cost of the resource in USD per month if the resource is retained after the Droplet is destroyed.
       */
      cost?: string;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/droplets/{droplet_id}/destroy_with_associated_resources",
      path: {
        droplet_id: dropletId,
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
   * Selectively Destroy a Droplet and its Associated Resources
   * To destroy a Droplet along with a sub-set of its associated resources, send a
   * DELETE request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/selective`
   * endpoint. The JSON body of the request should include `reserved_ips`, `snapshots`, `volumes`,
   * or `volume_snapshots` keys each set to an array of IDs for the associated
   * resources to be destroyed. The IDs can be found by querying the Droplet's
   * associated resources. Any associated resource not included in the request
   * will remain and continue to accrue changes on your account.
   *
   * A successful response will include a 202 response code and no content. Use
   * the status endpoint to check on the success or failure of the destruction of
   * the individual resources.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public dropletsDestroyWithAssociatedResourcesSelective({
    dropletId,
    requestBody,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
    requestBody?: {
      /**
       * An array of unique identifiers for the floating IPs to be scheduled for deletion.
       * @deprecated
       */
      floating_ips?: Array<string>;
      /**
       * An array of unique identifiers for the reserved IPs to be scheduled for deletion.
       */
      reserved_ips?: Array<string>;
      /**
       * An array of unique identifiers for the snapshots to be scheduled for deletion.
       */
      snapshots?: Array<string>;
      /**
       * An array of unique identifiers for the volumes to be scheduled for deletion.
       */
      volumes?: Array<string>;
      /**
       * An array of unique identifiers for the volume snapshots to be scheduled for deletion.
       */
      volume_snapshots?: Array<string>;
    };
  }): CancelablePromise<
    | {
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
      }
    | string
  > {
    return __request(this.client, {
      method: "DELETE",
      url: "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective",
      path: {
        droplet_id: dropletId,
      },
      body: requestBody,
      mediaType: "application/json",
      responseHeader: "ratelimit-limit",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Destroy a Droplet and All of its Associated Resources (Dangerous)
   * To destroy a Droplet along with all of its associated resources, send a DELETE
   * request to the `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/dangerous`
   * endpoint. The headers of this request must include an `X-Dangerous` key set to
   * `true`. To preview which resources will be destroyed, first query the
   * Droplet's associated resources. This operation _can not_ be reverse and should
   * be used with caution.
   *
   * A successful response will include a 202 response code and no content. Use the
   * status endpoint to check on the success or failure of the destruction of the
   * individual resources.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public dropletsDestroyWithAssociatedResourcesDangerous({
    dropletId,
    xDangerous,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
    /**
     * Acknowledge this action will destroy the Droplet and all associated resources and _can not_ be reversed.
     */
    xDangerous: boolean;
  }): CancelablePromise<
    | {
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
      }
    | string
  > {
    return __request(this.client, {
      method: "DELETE",
      url: "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous",
      path: {
        droplet_id: dropletId,
      },
      headers: {
        "X-Dangerous": xDangerous,
      },
      responseHeader: "ratelimit-limit",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Check Status of a Droplet Destroy with Associated Resources Request
   * To check on the status of a request to destroy a Droplet with its associated
   * resources, send a GET request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/status` endpoint.
   *
   * @returns any A JSON object containing containing the status of a request to destroy a Droplet and its associated resources.
   * @throws ApiError
   */
  public dropletsGetDestroyAssociatedResourcesStatus({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
  }): CancelablePromise<{
    /**
     * An object containing information about a resource scheduled for deletion.
     */
    droplet?: {
      /**
       * The unique identifier for the resource scheduled for deletion.
       */
      id?: string;
      /**
       * The name of the resource scheduled for deletion.
       */
      name?: string;
      /**
       * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
       */
      destroyed_at?: string;
      /**
       * A string indicating that the resource was not successfully destroyed and providing additional information.
       */
      error_message?: string;
    };
    /**
     * An object containing additional information about resource related to a Droplet requested to be destroyed.
     */
    resources?: {
      reserved_ips?: Array<{
        /**
         * The unique identifier for the resource scheduled for deletion.
         */
        id?: string;
        /**
         * The name of the resource scheduled for deletion.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
         */
        destroyed_at?: string;
        /**
         * A string indicating that the resource was not successfully destroyed and providing additional information.
         */
        error_message?: string;
      }>;
      floating_ips?: Array<{
        /**
         * The unique identifier for the resource scheduled for deletion.
         */
        id?: string;
        /**
         * The name of the resource scheduled for deletion.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
         */
        destroyed_at?: string;
        /**
         * A string indicating that the resource was not successfully destroyed and providing additional information.
         */
        error_message?: string;
      }>;
      snapshots?: Array<{
        /**
         * The unique identifier for the resource scheduled for deletion.
         */
        id?: string;
        /**
         * The name of the resource scheduled for deletion.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
         */
        destroyed_at?: string;
        /**
         * A string indicating that the resource was not successfully destroyed and providing additional information.
         */
        error_message?: string;
      }>;
      volumes?: Array<{
        /**
         * The unique identifier for the resource scheduled for deletion.
         */
        id?: string;
        /**
         * The name of the resource scheduled for deletion.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
         */
        destroyed_at?: string;
        /**
         * A string indicating that the resource was not successfully destroyed and providing additional information.
         */
        error_message?: string;
      }>;
      volume_snapshots?: Array<{
        /**
         * The unique identifier for the resource scheduled for deletion.
         */
        id?: string;
        /**
         * The name of the resource scheduled for deletion.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format indicating when the resource was destroyed if the request was successful.
         */
        destroyed_at?: string;
        /**
         * A string indicating that the resource was not successfully destroyed and providing additional information.
         */
        error_message?: string;
      }>;
    };
    /**
     * A time value given in ISO8601 combined date and time format indicating when the requested action was completed.
     */
    completed_at?: string;
    /**
     * A count of the associated resources that failed to be destroyed, if any.
     */
    failures?: number;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/droplets/{droplet_id}/destroy_with_associated_resources/status",
      path: {
        droplet_id: dropletId,
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
   * Retry a Droplet Destroy with Associated Resources Request
   * If the status of a request to destroy a Droplet with its associated resources
   * reported any errors, it can be retried by sending a POST request to the
   * `/v2/droplets/$DROPLET_ID/destroy_with_associated_resources/retry` endpoint.
   *
   * Only one destroy can be active at a time per Droplet. If a retry is issued
   * while another destroy is in progress for the Droplet a 409 status code will
   * be returned. A successful response will include a 202 response code and no
   * content.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public dropletsDestroyRetryWithAssociatedResources({
    dropletId,
  }: {
    /**
     * A unique identifier for a Droplet instance.
     */
    dropletId: number;
  }): CancelablePromise<
    | {
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
      }
    | string
  > {
    return __request(this.client, {
      method: "POST",
      url: "/v2/droplets/{droplet_id}/destroy_with_associated_resources/retry",
      path: {
        droplet_id: dropletId,
      },
      responseHeader: "ratelimit-limit",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        409: `Conflict`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List All Droplet Neighbors
   * To retrieve a list of all Droplets that are co-located on the same physical
   * hardware, send a GET request to `/v2/reports/droplet_neighbors_ids`.
   *
   * The results will be returned as a JSON object with a key of `neighbor_ids`.
   * This will be set to an array of arrays. Each array will contain a set of
   * Droplet IDs for Droplets that share a physical server. An empty array
   * indicates that all Droplets associated with your account are located on
   * separate physical hardware.
   *
   * @returns any A JSON object with an `neighbor_ids` key.
   * @throws ApiError
   */
  public dropletsListNeighborsIds(): CancelablePromise<{
    /**
     * An array of arrays. Each array will contain a set of Droplet IDs for Droplets that share a physical server.
     */
    neighbor_ids?: Array<Array<number>>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/reports/droplet_neighbors_ids",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
