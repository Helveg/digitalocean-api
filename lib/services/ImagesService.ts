/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ImagesService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Images
   * To list all of the images available on your account, send a GET request to /v2/images.
   *
   * ## Filtering Results
   * -----
   *
   * It's possible to request filtered results by including certain query parameters.
   *
   * **Image Type**
   *
   * Either 1-Click Application or OS Distribution images can be filtered by using the `type` query parameter.
   *
   * > Important: The `type` query parameter does not directly relate to the `type` attribute.
   *
   * To retrieve only ***distribution*** images, include the `type` query parameter set to distribution, `/v2/images?type=distribution`.
   *
   * To retrieve only ***application*** images, include the `type` query parameter set to application, `/v2/images?type=application`.
   *
   * **User Images**
   *
   * To retrieve only the private images of a user, include the `private` query parameter set to true, `/v2/images?private=true`.
   *
   * **Tags**
   *
   * To list all images assigned to a specific tag, include the `tag_name` query parameter set to the name of the tag in your GET request. For example, `/v2/images?tag_name=$TAG_NAME`.
   *
   * @returns any The response will be a JSON object with a key called `images`.  This will be set to an array of image objects, each of which will contain the standard image attributes.
   * @throws ApiError
   */
  public imagesList({
    type,
    _private,
    tagName,
    perPage = 20,
    page = 1,
  }: {
    /**
     * Filters results based on image type which can be either `application` or `distribution`.
     */
    type?: "application" | "distribution";
    /**
     * Used to filter only user images.
     */
    _private?: boolean;
    /**
     * Used to filter images by a specific tag.
     */
    tagName?: string;
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
      images: Array<{
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
      url: "/v2/images",
      query: {
        type: type,
        private: _private,
        tag_name: tagName,
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
   * Create a Custom Image
   * To create a new custom image, send a POST request to /v2/images.
   * The body must contain a url attribute pointing to a Linux virtual machine
   * image to be imported into DigitalOcean.
   * The image must be in the raw, qcow2, vhdx, vdi, or vmdk format.
   * It may be compressed using gzip or bzip2 and must be smaller than 100 GB after
   * being decompressed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public imagesCreateCustom({
    requestBody,
  }: {
    requestBody: {
      /**
       * The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.
       */
      name?: string;
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
       * An optional free-form text field to describe an image.
       */
      description?: string;
    } & {
      /**
       * The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.
       */
      name: string;
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
      url: "/v2/images",
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
   * Retrieve an Existing Image
   * To retrieve information about an image, send a `GET` request to
   * `/v2/images/$IDENTIFIER`.
   *
   * @returns any The response will be a JSON object with a key called `image`.  The value of this will be an image object containing the standard image attributes.
   * @throws ApiError
   */
  public imagesGet({
    imageId,
  }: {
    /**
     * A unique number (id) or string (slug) used to identify and reference a
     * specific image.
     *
     * **Public** images can be identified by image `id` or `slug`.
     *
     * **Private** images *must* be identified by image `id`.
     *
     */
    imageId: number | string;
  }): CancelablePromise<{
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
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/images/{image_id}",
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
   * Update an Image
   * To update an image, send a `PUT` request to `/v2/images/$IMAGE_ID`.
   * Set the `name` attribute to the new value you would like to use.
   * For custom images, the `description` and `distribution` attributes may also be updated.
   *
   * @returns any The response will be a JSON object with a key set to `image`.  The value of this will be an image object containing the standard image attributes.
   * @throws ApiError
   */
  public imagesUpdate({
    imageId,
    requestBody,
  }: {
    /**
     * A unique number that can be used to identify and reference a specific image.
     */
    imageId: number;
    requestBody: {
      /**
       * The display name that has been given to an image.  This is what is shown in the control panel and is generally a descriptive title for the image in question.
       */
      name?: string;
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
       * An optional free-form text field to describe an image.
       */
      description?: string;
    };
  }): CancelablePromise<{
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
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/images/{image_id}",
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
   * Delete an Image
   * To delete a snapshot or custom image, send a `DELETE` request to `/v2/images/$IMAGE_ID`.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public imagesDelete({
    imageId,
  }: {
    /**
     * A unique number that can be used to identify and reference a specific image.
     */
    imageId: number;
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
      url: "/v2/images/{image_id}",
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
}
