/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FloatingIPsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Floating IPs
   * To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.
   * @returns any The response will be a JSON object with a key called `floating_ips`. This will be set to an array of floating IP objects, each of which will contain the standard floating IP attributes
   * @throws ApiError
   */
  public floatingIPsList({
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
      floating_ips?: Array<{
        /**
         * The public IP address of the floating IP. It also serves as its identifier.
         */
        ip?: string;
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
        } & Record<string, any>;
        /**
         * The Droplet that the floating IP has been assigned to. When you query a floating IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null.
         */
        droplet?:
          | Record<string, any>
          | null
          | {
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
                status?:
                  | "NEW"
                  | "available"
                  | "pending"
                  | "deleted"
                  | "retired";
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
            };
        /**
         * A boolean value indicating whether or not the floating IP has pending actions preventing new ones from being submitted.
         */
        locked?: boolean;
        /**
         * The UUID of the project to which the reserved IP currently belongs.
         */
        project_id?: string;
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
      url: "/v2/floating_ips",
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
   * Create a New Floating IP
   * On creation, a floating IP must be either assigned to a Droplet or reserved to a region.
   * * To create a new floating IP assigned to a Droplet, send a POST
   * request to `/v2/floating_ips` with the `droplet_id` attribute.
   *
   * * To create a new floating IP reserved to a region, send a POST request to
   * `/v2/floating_ips` with the `region` attribute.
   *
   * **Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public floatingIPsCreate({
    requestBody,
  }: {
    requestBody:
      | {
          /**
           * The ID of the Droplet that the floating IP will be assigned to.
           */
          droplet_id: number;
        }
      | {
          /**
           * The slug identifier for the region the floating IP will be reserved to.
           */
          region: string;
          /**
           * The UUID of the project to which the floating IP will be assigned.
           */
          project_id?: string;
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
      url: "/v2/floating_ips",
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
   * Retrieve an Existing Floating IP
   * To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.
   * @returns any The response will be a JSON object with a key called `floating_ip`. The value of this will be an object that contains the standard attributes associated with a floating IP.
   * @throws ApiError
   */
  public floatingIPsGet({
    floatingIp,
  }: {
    /**
     * A floating IP address.
     */
    floatingIp: string;
  }): CancelablePromise<{
    floating_ip?: {
      /**
       * The public IP address of the floating IP. It also serves as its identifier.
       */
      ip?: string;
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
      } & Record<string, any>;
      /**
       * The Droplet that the floating IP has been assigned to. When you query a floating IP, if it is assigned to a Droplet, the entire Droplet object will be returned. If it is not assigned, the value will be null.
       */
      droplet?:
        | Record<string, any>
        | null
        | {
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
          };
      /**
       * A boolean value indicating whether or not the floating IP has pending actions preventing new ones from being submitted.
       */
      locked?: boolean;
      /**
       * The UUID of the project to which the reserved IP currently belongs.
       */
      project_id?: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/floating_ips/{floating_ip}",
      path: {
        floating_ip: floatingIp,
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
   * Delete a Floating IP
   * To delete a floating IP and remove it from your account, send a DELETE request
   * to `/v2/floating_ips/$FLOATING_IP_ADDR`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public floatingIPsDelete({
    floatingIp,
  }: {
    /**
     * A floating IP address.
     */
    floatingIp: string;
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
      url: "/v2/floating_ips/{floating_ip}",
      path: {
        floating_ip: floatingIp,
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
