/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class VpCsService extends ApiService {
  /**
   * List All VPCs
   * To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.
   * @returns any The response will be a JSON object with a key called `vpcs`. This will be set to an array of objects, each of which will contain the standard attributes associated with a VPC
   * @throws ApiError
   */
  public vpcsList({
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
      vpcs?: Array<
        {
          /**
           * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
           */
          name?: string;
          /**
           * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
           */
          description?: string;
        } & {
          /**
           * The slug identifier for the region where the VPC will be created.
           */
          region?: string;
          /**
           * The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
           */
          ip_range?: string;
        } & {
          /**
           * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
           */
          default?: boolean;
        } & {
          /**
           * A unique ID that can be used to identify and reference the VPC.
           */
          readonly id?: string;
          /**
           * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
           */
          urn?: string;
          /**
           * A time value given in ISO8601 combined date and time format.
           */
          readonly created_at?: string;
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
      url: "/v2/vpcs",
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
   * Create a New VPC
   * To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes
   * in the table below in the JSON body.
   *
   * **Note:** If you do not currently have a VPC network in a specific datacenter
   * region, the first one that you create will be set as the default for that
   * region. The default VPC for a region cannot be changed or deleted.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public vpcsCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * The slug identifier for the region where the VPC will be created.
       */
      region?: string;
      /**
       * The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
       */
      ip_range?: string;
    } & {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name: string;
      /**
       * The slug identifier for the region where the VPC will be created.
       */
      region: string;
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
      url: "/v2/vpcs",
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
   * Retrieve an Existing VPC
   * To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.
   * @returns any The response will be a JSON object with a key called `vpc`. The value of this will be an object that contains the standard attributes associated with a VPC.
   * @throws ApiError
   */
  public vpcsGet({
    vpcId,
  }: {
    /**
     * A unique identifier for a VPC.
     */
    vpcId: string;
  }): CancelablePromise<{
    vpc?: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * The slug identifier for the region where the VPC will be created.
       */
      region?: string;
      /**
       * The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
       */
      ip_range?: string;
    } & {
      /**
       * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
       */
      default?: boolean;
    } & {
      /**
       * A unique ID that can be used to identify and reference the VPC.
       */
      readonly id?: string;
      /**
       * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
       */
      urn?: string;
      /**
       * A time value given in ISO8601 combined date and time format.
       */
      readonly created_at?: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/vpcs/{vpc_id}",
      path: {
        vpc_id: vpcId,
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
   * Update a VPC
   * To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.
   *
   * @returns any The response will be a JSON object with a key called `vpc`. The value of this will be an object that contains the standard attributes associated with a VPC.
   * @throws ApiError
   */
  public vpcsUpdate({
    vpcId,
    requestBody,
  }: {
    /**
     * A unique identifier for a VPC.
     */
    vpcId: string;
    requestBody: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
       */
      default?: boolean;
    } & {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name: string;
    };
  }): CancelablePromise<{
    vpc?: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * The slug identifier for the region where the VPC will be created.
       */
      region?: string;
      /**
       * The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
       */
      ip_range?: string;
    } & {
      /**
       * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
       */
      default?: boolean;
    } & {
      /**
       * A unique ID that can be used to identify and reference the VPC.
       */
      readonly id?: string;
      /**
       * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
       */
      urn?: string;
      /**
       * A time value given in ISO8601 combined date and time format.
       */
      readonly created_at?: string;
    };
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/vpcs/{vpc_id}",
      path: {
        vpc_id: vpcId,
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
   * Partially Update a VPC
   * To update a subset of information about a VPC, send a PATCH request to
   * `/v2/vpcs/$VPC_ID`.
   *
   * @returns any The response will be a JSON object with a key called `vpc`. The value of this will be an object that contains the standard attributes associated with a VPC.
   * @throws ApiError
   */
  public vpcsPatch({
    vpcId,
    requestBody,
  }: {
    /**
     * A unique identifier for a VPC.
     */
    vpcId: string;
    requestBody: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
       */
      default?: boolean;
    };
  }): CancelablePromise<{
    vpc?: {
      /**
       * The name of the VPC. Must be unique and may only contain alphanumeric characters, dashes, and periods.
       */
      name?: string;
      /**
       * A free-form text field for describing the VPC's purpose. It may be a maximum of 255 characters.
       */
      description?: string;
    } & {
      /**
       * The slug identifier for the region where the VPC will be created.
       */
      region?: string;
      /**
       * The range of IP addresses in the VPC in CIDR notation. Network ranges cannot overlap with other networks in the same account and must be in range of private addresses as defined in RFC1918. It may not be smaller than `/28` nor larger than `/16`. If no IP range is specified, a `/20` network range is generated that won't conflict with other VPC networks in your account.
       */
      ip_range?: string;
    } & {
      /**
       * A boolean value indicating whether or not the VPC is the default network for the region. All applicable resources are placed into the default VPC network unless otherwise specified during their creation. The `default` field cannot be unset from `true`. If you want to set a new default VPC network, update the `default` field of another VPC network in the same region. The previous network's `default` field will be set to `false` when a new default VPC has been defined.
       */
      default?: boolean;
    } & {
      /**
       * A unique ID that can be used to identify and reference the VPC.
       */
      readonly id?: string;
      /**
       * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
       */
      urn?: string;
      /**
       * A time value given in ISO8601 combined date and time format.
       */
      readonly created_at?: string;
    };
  }> {
    return __request(this.client, {
      method: "PATCH",
      url: "/v2/vpcs/{vpc_id}",
      path: {
        vpc_id: vpcId,
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
   * Delete a VPC
   * To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status
   * code with no body will be returned in response to a successful request.
   *
   * The default VPC for a region can not be deleted. Additionally, a VPC can only
   * be deleted if it does not contain any member resources. Attempting to delete
   * a region's default VPC or a VPC that still has members will result in a
   * 403 Forbidden error response.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public vpcsDelete({
    vpcId,
  }: {
    /**
     * A unique identifier for a VPC.
     */
    vpcId: string;
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
      url: "/v2/vpcs/{vpc_id}",
      path: {
        vpc_id: vpcId,
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
   * List the Member Resources of a VPC
   * To list all of the resources that are members of a VPC, send a GET request to
   * `/v2/vpcs/$VPC_ID/members`.
   *
   * To only list resources of a specific type that are members of the VPC,
   * included a `resource_type` query parameter. For example, to only list Droplets
   * in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.
   *
   * @returns any The response will be a JSON object with a key called members. This will be set to an array of objects, each of which will contain the standard attributes associated with a VPC member.
   * @throws ApiError
   */
  public vpcsListMembers({
    vpcId,
    resourceType,
    perPage = 20,
    page = 1,
  }: {
    /**
     * A unique identifier for a VPC.
     */
    vpcId: string;
    /**
     * Used to filter VPC members by a resource type.
     */
    resourceType?: string;
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
      members?: Array<{
        /**
         * The name of the resource.
         */
        name?: string;
        /**
         * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
         */
        urn?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the resource was created.
         */
        created_at?: string;
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
      url: "/v2/vpcs/{vpc_id}/members",
      path: {
        vpc_id: vpcId,
      },
      query: {
        resource_type: resourceType,
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
