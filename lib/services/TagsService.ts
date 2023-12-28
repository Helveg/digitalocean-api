/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class TagsService extends ApiService {
  /**
   * List All Tags
   * To list all of your tags, you can send a GET request to `/v2/tags`.
   * @returns any To list all of your tags, you can send a `GET` request to `/v2/tags`.
   * @throws ApiError
   */
  public tagsList({
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
      tags?: Array<{
        /**
         * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.
         * There is a limit of 255 characters per tag.
         *
         * **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.
         *
         * When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).
         *
         * Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".
         *
         */
        name?: string;
        /**
         * An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.
         */
        readonly resources?: {
          /**
           * The number of tagged objects for this type of resource.
           */
          count?: number;
          /**
           * The URI for the last tagged object for this type of resource.
           */
          last_tagged_uri?: string;
        };
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
      url: "/v2/tags",
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
   * Create a New Tag
   * To create a tag you can send a POST request to `/v2/tags` with a `name` attribute.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public tagsCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.
       * There is a limit of 255 characters per tag.
       *
       * **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.
       *
       * When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).
       *
       * Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".
       *
       */
      name?: string;
      /**
       * An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.
       */
      readonly resources?: {
        /**
         * The number of tagged objects for this type of resource.
         */
        count?: number;
        /**
         * The URI for the last tagged object for this type of resource.
         */
        last_tagged_uri?: string;
      };
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
      url: "/v2/tags",
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
   * Retrieve a Tag
   * To retrieve an individual tag, you can send a `GET` request to `/v2/tags/$TAG_NAME`.
   * @returns any The response will be a JSON object with a key called `tag`.  The value of this will be a tag object containing the standard tag attributes.
   * @throws ApiError
   */
  public tagsGet({
    tagId,
  }: {
    /**
     * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.
     */
    tagId: string;
  }): CancelablePromise<{
    /**
     * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
     * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
     */
    tag?: {
      /**
       * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores.
       * There is a limit of 255 characters per tag.
       *
       * **Note:** Tag names are case stable, which means the capitalization you use when you first create a tag is canonical.
       *
       * When working with tags in the API, you must use the tag's canonical capitalization. For example, if you create a tag named "PROD", the URL to add that tag to a resource would be `https://api.digitalocean.com/v2/tags/PROD/resources` (not `/v2/tags/prod/resources`).
       *
       * Tagged resources in the control panel will always display the canonical capitalization. For example, if you create a tag named "PROD", you can tag resources in the control panel by entering "prod". The tag will still display with its canonical capitalization, "PROD".
       *
       */
      name?: string;
      /**
       * An embedded object containing key value pairs of resource type and resource statistics. It also includes a count of the total number of resources tagged with the current tag as well as a `last_tagged_uri` attribute set to the last resource tagged with the current tag.
       */
      readonly resources?: {
        /**
         * The number of tagged objects for this type of resource.
         */
        count?: number;
        /**
         * The URI for the last tagged object for this type of resource.
         */
        last_tagged_uri?: string;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/tags/{tag_id}",
      path: {
        tag_id: tagId,
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
   * Delete a Tag
   * A tag can be deleted by sending a `DELETE` request to `/v2/tags/$TAG_NAME`. Deleting a tag also untags all the resources that have previously been tagged by the Tag
   * @returns any Unexpected error
   * @throws ApiError
   */
  public tagsDelete({
    tagId,
  }: {
    /**
     * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.
     */
    tagId: string;
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
      url: "/v2/tags/{tag_id}",
      path: {
        tag_id: tagId,
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
   * Tag a Resource
   * Resources can be tagged by sending a POST request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
   * Currently only tagging of Droplets, Databases, Images, Volumes, and Volume Snapshots is supported. `resource_type` is expected to be the string `droplet`, `database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected to be the ID of the resource as a string.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public tagsAssignResources({
    tagId,
    requestBody,
  }: {
    /**
     * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.
     */
    tagId: string;
    requestBody: {
      /**
       * An array of objects containing resource_id and resource_type  attributes.
       */
      resources: Array<any>;
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
      url: "/v2/tags/{tag_id}/resources",
      path: {
        tag_id: tagId,
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
   * Untag a Resource
   * Resources can be untagged by sending a DELETE request to `/v2/tags/$TAG_NAME/resources` with an array of json objects containing `resource_id` and `resource_type` attributes.
   * Currently only untagging of Droplets, Databases, Images, Volumes, and Volume Snapshots is supported. `resource_type` is expected to be the string `droplet`, `database`, `image`, `volume` or `volume_snapshot`. `resource_id` is expected to be the ID of the resource as a string.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public tagsUnassignResources({
    tagId,
    requestBody,
  }: {
    /**
     * The name of the tag. Tags may contain letters, numbers, colons, dashes, and underscores. There is a limit of 255 characters per tag.
     */
    tagId: string;
    requestBody: {
      /**
       * An array of objects containing resource_id and resource_type  attributes.
       */
      resources: Array<any>;
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
      url: "/v2/tags/{tag_id}/resources",
      path: {
        tag_id: tagId,
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
}
