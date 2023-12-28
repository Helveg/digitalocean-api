/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ProjectsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Projects
   * To list all your projects, send a GET request to `/v2/projects`.
   * @returns any The response will be a JSON object with a key called `projects`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsList({
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
      projects?: Array<
        {
          /**
           * The unique universal identifier of this project.
           */
          readonly id?: string;
          /**
           * The unique universal identifier of the project owner.
           */
          readonly owner_uuid?: string;
          /**
           * The integer id of the project owner.
           */
          readonly owner_id?: number;
          /**
           * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
           */
          name?: string;
          /**
           * The description of the project. The maximum length is 255 characters.
           */
          description?: string;
          /**
           * The purpose of the project. The maximum length is 255 characters. It can
           * have one of the following values:
           *
           * - Just trying out DigitalOcean
           * - Class project / Educational purposes
           * - Website or blog
           * - Web Application
           * - Service or API
           * - Mobile Application
           * - Machine learning / AI / Data processing
           * - IoT
           * - Operational / Developer tooling
           *
           * If another value for purpose is specified, for example, "your custom purpose",
           * your purpose will be stored as `Other: your custom purpose`.
           *
           */
          purpose?: string;
          /**
           * The environment of the project's resources.
           */
          environment?: "Development" | "Staging" | "Production";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the project was created.
           */
          readonly created_at?: string;
          /**
           * A time value given in ISO8601 combined date and time format that represents when the project was updated.
           */
          readonly updated_at?: string;
        } & {
          /**
           * If true, all resources will be added to this project if no project is specified.
           */
          is_default?: boolean;
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
      url: "/v2/projects",
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
   * Create a Project
   * To create a project, send a POST request to `/v2/projects`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public projectsCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The unique universal identifier of this project.
       */
      readonly id?: string;
      /**
       * The unique universal identifier of the project owner.
       */
      readonly owner_uuid?: string;
      /**
       * The integer id of the project owner.
       */
      readonly owner_id?: number;
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name?: string;
      /**
       * The description of the project. The maximum length is 255 characters.
       */
      description?: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose?: string;
      /**
       * The environment of the project's resources.
       */
      environment?: "Development" | "Staging" | "Production";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was updated.
       */
      readonly updated_at?: string;
    } & {
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose: string;
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
      url: "/v2/projects",
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
   * Retrieve the Default Project
   * To get your default project, send a GET request to `/v2/projects/default`.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsGetDefault(): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/projects/default",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Update the Default Project
   * To update you default project, send a PUT request to `/v2/projects/default`. All of the following attributes must be sent.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsUpdateDefault({
    requestBody,
  }: {
    requestBody: {
      /**
       * The unique universal identifier of this project.
       */
      readonly id?: string;
      /**
       * The unique universal identifier of the project owner.
       */
      readonly owner_uuid?: string;
      /**
       * The integer id of the project owner.
       */
      readonly owner_id?: number;
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name?: string;
      /**
       * The description of the project. The maximum length is 255 characters.
       */
      description?: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose?: string;
      /**
       * The environment of the project's resources.
       */
      environment?: "Development" | "Staging" | "Production";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was updated.
       */
      readonly updated_at?: string;
    } & {
      /**
       * If true, all resources will be added to this project if no project is specified.
       */
      is_default?: boolean;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/projects/default",
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
   * Patch the Default Project
   * To update only specific attributes of your default project, send a PATCH request to `/v2/projects/default`. At least one of the following attributes needs to be sent.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsPatchDefault({
    requestBody,
  }: {
    requestBody: {
      /**
       * The unique universal identifier of this project.
       */
      readonly id?: string;
      /**
       * The unique universal identifier of the project owner.
       */
      readonly owner_uuid?: string;
      /**
       * The integer id of the project owner.
       */
      readonly owner_id?: number;
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name?: string;
      /**
       * The description of the project. The maximum length is 255 characters.
       */
      description?: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose?: string;
      /**
       * The environment of the project's resources.
       */
      environment?: "Development" | "Staging" | "Production";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was updated.
       */
      readonly updated_at?: string;
    } & {
      /**
       * If true, all resources will be added to this project if no project is specified.
       */
      is_default?: boolean;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PATCH",
      url: "/v2/projects/default",
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
   * Retrieve an Existing Project
   * To get a project, send a GET request to `/v2/projects/$PROJECT_ID`.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsGet({
    projectId,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/projects/{project_id}",
      path: {
        project_id: projectId,
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
   * Update a Project
   * To update a project, send a PUT request to `/v2/projects/$PROJECT_ID`. All of the following attributes must be sent.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsUpdate({
    projectId,
    requestBody,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
    requestBody: {
      /**
       * The unique universal identifier of this project.
       */
      readonly id?: string;
      /**
       * The unique universal identifier of the project owner.
       */
      readonly owner_uuid?: string;
      /**
       * The integer id of the project owner.
       */
      readonly owner_id?: number;
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name?: string;
      /**
       * The description of the project. The maximum length is 255 characters.
       */
      description?: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose?: string;
      /**
       * The environment of the project's resources.
       */
      environment?: "Development" | "Staging" | "Production";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was updated.
       */
      readonly updated_at?: string;
    } & {
      /**
       * If true, all resources will be added to this project if no project is specified.
       */
      is_default?: boolean;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/projects/{project_id}",
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
   * Patch a Project
   * To update only specific attributes of a project, send a PATCH request to `/v2/projects/$PROJECT_ID`. At least one of the following attributes needs to be sent.
   * @returns any The response will be a JSON object with a key called `project`. The value of this will be an object with the standard project attributes
   * @throws ApiError
   */
  public projectsPatch({
    projectId,
    requestBody,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
    requestBody: {
      /**
       * The unique universal identifier of this project.
       */
      readonly id?: string;
      /**
       * The unique universal identifier of the project owner.
       */
      readonly owner_uuid?: string;
      /**
       * The integer id of the project owner.
       */
      readonly owner_id?: number;
      /**
       * The human-readable name for the project. The maximum length is 175 characters and the name must be unique.
       */
      name?: string;
      /**
       * The description of the project. The maximum length is 255 characters.
       */
      description?: string;
      /**
       * The purpose of the project. The maximum length is 255 characters. It can
       * have one of the following values:
       *
       * - Just trying out DigitalOcean
       * - Class project / Educational purposes
       * - Website or blog
       * - Web Application
       * - Service or API
       * - Mobile Application
       * - Machine learning / AI / Data processing
       * - IoT
       * - Operational / Developer tooling
       *
       * If another value for purpose is specified, for example, "your custom purpose",
       * your purpose will be stored as `Other: your custom purpose`.
       *
       */
      purpose?: string;
      /**
       * The environment of the project's resources.
       */
      environment?: "Development" | "Staging" | "Production";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the project was updated.
       */
      readonly updated_at?: string;
    } & {
      /**
       * If true, all resources will be added to this project if no project is specified.
       */
      is_default?: boolean;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PATCH",
      url: "/v2/projects/{project_id}",
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
   * Delete an Existing Project
   * To delete a project, send a DELETE request to `/v2/projects/$PROJECT_ID`. To
   * be deleted, a project must not have any resources assigned to it. Any existing
   * resources must first be reassigned or destroyed, or you will receive a 412 error.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public projectsDelete({
    projectId,
  }: {
    /**
     * A unique identifier for a project.
     */
    projectId: string;
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
      url: "/v2/projects/{project_id}",
      path: {
        project_id: projectId,
      },
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        412: `Only an empty project can be deleted.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
