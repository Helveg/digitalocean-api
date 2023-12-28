/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class ProjectResourcesService extends ApiService {
  /**
   * List Project Resources
   * To list all your resources in a project, send a GET request to `/v2/projects/$PROJECT_ID/resources`.
   * @returns any The response will be a JSON object with a key called `resources`. The value of this will be an object with the standard resource attributes.
   * @throws ApiError
   */
  public projectsListResources({
    projectId,
    perPage = 20,
    page = 1,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
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
      resources?: Array<{
        /**
         * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
         */
        urn?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the project was created.
         */
        assigned_at?: string;
        /**
         * The links object contains the `self` object, which contains the resource relationship.
         */
        links?: {
          /**
           * A URI that can be used to retrieve the resource.
           */
          self?: string;
        };
        /**
         * The status of assigning and fetching the resources.
         */
        status?:
          | "ok"
          | "not_found"
          | "assigned"
          | "already_assigned"
          | "service_down";
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
      url: "/v2/projects/{project_id}/resources",
      path: {
        project_id: projectId,
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
   * Assign Resources to a Project
   * To assign resources to a project, send a POST request to `/v2/projects/$PROJECT_ID/resources`.
   * @returns any The response will be a JSON object with a key called `resources`. The value of this will be an object with the standard resource attributes.
   * @throws ApiError
   */
  public projectsAssignResources({
    projectId,
    requestBody,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
    requestBody: {
      /**
       * A list of uniform resource names (URNs) to be added to a project.
       */
      resources?: Array<string>;
    };
  }): CancelablePromise<{
    resources?: Array<{
      /**
       * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
       */
      urn?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      assigned_at?: string;
      /**
       * The links object contains the `self` object, which contains the resource relationship.
       */
      links?: {
        /**
         * A URI that can be used to retrieve the resource.
         */
        self?: string;
      };
      /**
       * The status of assigning and fetching the resources.
       */
      status?:
        | "ok"
        | "not_found"
        | "assigned"
        | "already_assigned"
        | "service_down";
    }>;
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/projects/{project_id}/resources",
      path: {
        project_id: projectId,
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
   * List Default Project Resources
   * To list all your resources in your default project, send a GET request to `/v2/projects/default/resources`.
   * @returns any The response will be a JSON object with a key called `resources`. The value of this will be an object with the standard resource attributes.
   * @throws ApiError
   */
  public projectsListResourcesDefault(): CancelablePromise<
    {
      resources?: Array<{
        /**
         * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
         */
        urn?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the project was created.
         */
        assigned_at?: string;
        /**
         * The links object contains the `self` object, which contains the resource relationship.
         */
        links?: {
          /**
           * A URI that can be used to retrieve the resource.
           */
          self?: string;
        };
        /**
         * The status of assigning and fetching the resources.
         */
        status?:
          | "ok"
          | "not_found"
          | "assigned"
          | "already_assigned"
          | "service_down";
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
      url: "/v2/projects/default/resources",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Assign Resources to Default Project
   * To assign resources to your default project, send a POST request to `/v2/projects/default/resources`.
   * @returns any The response will be a JSON object with a key called `resources`. The value of this will be an object with the standard resource attributes.
   * @throws ApiError
   */
  public projectsAssignResourcesDefault({
    requestBody,
  }: {
    requestBody: {
      /**
       * A list of uniform resource names (URNs) to be added to a project.
       */
      resources?: Array<string>;
    };
  }): CancelablePromise<{
    resources?: Array<{
      /**
       * The uniform resource name (URN) for the resource in the format do:resource_type:resource_id.
       */
      urn?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      assigned_at?: string;
      /**
       * The links object contains the `self` object, which contains the resource relationship.
       */
      links?: {
        /**
         * A URI that can be used to retrieve the resource.
         */
        self?: string;
      };
      /**
       * The status of assigning and fetching the resources.
       */
      status?:
        | "ok"
        | "not_found"
        | "assigned"
        | "already_assigned"
        | "service_down";
    }>;
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/projects/default/resources",
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
