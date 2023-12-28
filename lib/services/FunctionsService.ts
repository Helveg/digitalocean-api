/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class FunctionsService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List Namespaces
   * Returns a list of namespaces associated with the current user. To get all namespaces, send a GET request to `/v2/functions/namespaces`.
   * @returns any An array of JSON objects with a key called `namespaces`.  Each object represents a namespace and contains
   * the properties associated with it.
   * @throws ApiError
   */
  public functionsListNamespaces(): CancelablePromise<{
    namespaces?: Array<{
      /**
       * The namespace's API hostname. Each function in a namespace is provided an endpoint at the namespace's hostname.
       */
      api_host?: string;
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * The namespace's unique name.
       */
      label?: string;
      /**
       * The namespace's datacenter region.
       */
      region?: string;
      /**
       * The namespace's Universally Unique Identifier.
       */
      uuid?: string;
      /**
       * A random alpha numeric string. This key is used in conjunction with the namespace's UUID to authenticate
       * a user to use the namespace via `doctl`, DigitalOcean's official CLI.
       */
      key?: string;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/functions/namespaces",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create Namespace
   * Creates a new serverless functions namespace in the desired region and associates it with the provided label. A namespace is a collection of functions and their associated packages, triggers, and project specifications. To create a namespace, send a POST request to `/v2/functions/namespaces` with the `region` and `label` properties.
   * @returns any A JSON response object with a key called `namespace`. The object contains the properties associated
   * with the namespace.
   * @throws ApiError
   */
  public functionsCreateNamespace({
    requestBody,
  }: {
    requestBody: {
      /**
       * The [datacenter region](https://docs.digitalocean.com/products/platform/availability-matrix/#available-datacenters) in which to create the namespace.
       */
      region: string;
      /**
       * The namespace's unique name.
       */
      label: string;
    };
  }): CancelablePromise<{
    namespace?: {
      /**
       * The namespace's API hostname. Each function in a namespace is provided an endpoint at the namespace's hostname.
       */
      api_host?: string;
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * The namespace's unique name.
       */
      label?: string;
      /**
       * The namespace's datacenter region.
       */
      region?: string;
      /**
       * The namespace's Universally Unique Identifier.
       */
      uuid?: string;
      /**
       * A random alpha numeric string. This key is used in conjunction with the namespace's UUID to authenticate
       * a user to use the namespace via `doctl`, DigitalOcean's official CLI.
       */
      key?: string;
    };
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/functions/namespaces",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        404: `Bad Request.`,
        422: `Limit Reached`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Namespace
   * Gets the namespace details for the given namespace UUID. To get namespace details, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID` with no parameters.
   * @returns any A JSON response object with a key called `namespace`. The object contains the properties associated
   * with the namespace.
   * @throws ApiError
   */
  public functionsGetNamespace({
    namespaceId,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
  }): CancelablePromise<{
    namespace?: {
      /**
       * The namespace's API hostname. Each function in a namespace is provided an endpoint at the namespace's hostname.
       */
      api_host?: string;
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * The namespace's unique name.
       */
      label?: string;
      /**
       * The namespace's datacenter region.
       */
      region?: string;
      /**
       * The namespace's Universally Unique Identifier.
       */
      uuid?: string;
      /**
       * A random alpha numeric string. This key is used in conjunction with the namespace's UUID to authenticate
       * a user to use the namespace via `doctl`, DigitalOcean's official CLI.
       */
      key?: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/functions/namespaces/{namespace_id}",
      path: {
        namespace_id: namespaceId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Not Allowed.`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Delete Namespace
   * Deletes the given namespace.  When a namespace is deleted all assets, in the namespace are deleted, this includes packages, functions and triggers. Deleting a namespace is a destructive operation and assets in the namespace are not recoverable after deletion. Some metadata is retained, such as activations, or soft deleted for reporting purposes.
   * To delete namespace, send a DELETE request to `/v2/functions/namespaces/$NAMESPACE_ID`.
   * A successful deletion returns a 204 response.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public functionsDeleteNamespace({
    namespaceId,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
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
      url: "/v2/functions/namespaces/{namespace_id}",
      path: {
        namespace_id: namespaceId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List Triggers
   * Returns a list of triggers associated with the current user and namespace. To get all triggers, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers`.
   * @returns any An array of JSON objects with a key called `namespaces`.  Each object represents a namespace and contains
   * the properties associated with it.
   * @throws ApiError
   */
  public functionsListTriggers({
    namespaceId,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
  }): CancelablePromise<{
    triggers?: Array<{
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * The trigger's unique name within the namespace.
       */
      name?: string;
      /**
       * Name of function(action) that exists in the given namespace.
       */
      function?: string;
      /**
       * String which indicates the type of trigger source like SCHEDULED.
       */
      type?: string;
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled?: boolean;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details?: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
      scheduled_runs?: {
        /**
         * Indicates last run time. null value indicates trigger not run yet.
         */
        last_run_at?: string | null;
        /**
         * Indicates next run time. null value indicates trigger will not run.
         */
        next_run_at?: string | null;
      };
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/functions/namespaces/{namespace_id}/triggers",
      path: {
        namespace_id: namespaceId,
      },
      errors: {
        401: `Unauthorized`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create Trigger
   * Creates a new trigger for a given function in a namespace. To create a trigger, send a POST request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers` with the `name`, `function`, `type`, `is_enabled` and `scheduled_details` properties.
   * @returns any A JSON response object with a key called `trigger`. The object contains the properties associated
   * with the trigger.
   * @throws ApiError
   */
  public functionsCreateTrigger({
    namespaceId,
    requestBody,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
    requestBody: {
      /**
       * The trigger's unique name within the namespace.
       */
      name: string;
      /**
       * Name of function(action) that exists in the given namespace.
       */
      function: string;
      /**
       * One of different type of triggers. Currently only SCHEDULED is supported.
       */
      type: string;
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled: boolean;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
    };
  }): CancelablePromise<{
    trigger?: {
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * The trigger's unique name within the namespace.
       */
      name?: string;
      /**
       * Name of function(action) that exists in the given namespace.
       */
      function?: string;
      /**
       * String which indicates the type of trigger source like SCHEDULED.
       */
      type?: string;
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled?: boolean;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details?: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
      scheduled_runs?: {
        /**
         * Indicates last run time. null value indicates trigger not run yet.
         */
        last_run_at?: string | null;
        /**
         * Indicates next run time. null value indicates trigger will not run.
         */
        next_run_at?: string | null;
      };
    };
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/functions/namespaces/{namespace_id}/triggers",
      path: {
        namespace_id: namespaceId,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request.`,
        401: `Unauthorized`,
        404: `Bad Request.`,
        422: `Limit Reached`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Trigger
   * Gets the trigger details. To get the trigger details, send a GET request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.
   * @returns any A JSON response object with a key called `trigger`. The object contains the properties associated
   * with the trigger.
   * @throws ApiError
   */
  public functionsGetTrigger({
    namespaceId,
    triggerName,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
    /**
     * The name of the trigger to be managed.
     */
    triggerName: string;
  }): CancelablePromise<{
    trigger?: {
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * The trigger's unique name within the namespace.
       */
      name?: string;
      /**
       * Name of function(action) that exists in the given namespace.
       */
      function?: string;
      /**
       * String which indicates the type of trigger source like SCHEDULED.
       */
      type?: string;
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled?: boolean;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details?: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
      scheduled_runs?: {
        /**
         * Indicates last run time. null value indicates trigger not run yet.
         */
        last_run_at?: string | null;
        /**
         * Indicates next run time. null value indicates trigger will not run.
         */
        next_run_at?: string | null;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
      path: {
        namespace_id: namespaceId,
        trigger_name: triggerName,
      },
      errors: {
        401: `Unauthorized`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Update Trigger
   * Updates the details of the given trigger. To update a trigger, send a PUT request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME` with new values for the `is_enabled ` or `scheduled_details` properties.
   * @returns any A JSON response object with a key called `trigger`. The object contains the properties associated
   * with the trigger.
   * @throws ApiError
   */
  public functionsUpdateTrigger({
    namespaceId,
    triggerName,
    requestBody,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
    /**
     * The name of the trigger to be managed.
     */
    triggerName: string;
    requestBody: {
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled?: boolean;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details?: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
    };
  }): CancelablePromise<{
    trigger?: {
      /**
       * A unique string format of UUID with a prefix fn-.
       */
      namespace?: string;
      /**
       * The trigger's unique name within the namespace.
       */
      name?: string;
      /**
       * Name of function(action) that exists in the given namespace.
       */
      function?: string;
      /**
       * String which indicates the type of trigger source like SCHEDULED.
       */
      type?: string;
      /**
       * Indicates weather the trigger is paused or unpaused.
       */
      is_enabled?: boolean;
      /**
       * UTC time string.
       */
      created_at?: string;
      /**
       * UTC time string.
       */
      updated_at?: string;
      /**
       * Trigger details for SCHEDULED type, where body is optional.
       *
       */
      scheduled_details?: {
        /**
         * valid cron expression string which is required for SCHEDULED type triggers.
         */
        cron: string;
        /**
         * Optional data to be sent to function while triggering the function.
         */
        body?: {
          name?: string;
        } | null;
      };
      scheduled_runs?: {
        /**
         * Indicates last run time. null value indicates trigger not run yet.
         */
        last_run_at?: string | null;
        /**
         * Indicates next run time. null value indicates trigger will not run.
         */
        next_run_at?: string | null;
      };
    };
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
      path: {
        namespace_id: namespaceId,
        trigger_name: triggerName,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Bad Request.`,
        401: `Unauthorized`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Delete Trigger
   * Deletes the given trigger.
   * To delete trigger, send a DELETE request to `/v2/functions/namespaces/$NAMESPACE_ID/triggers/$TRIGGER_NAME`.
   * A successful deletion returns a 204 response.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public functionsDeleteTrigger({
    namespaceId,
    triggerName,
  }: {
    /**
     * The ID of the namespace to be managed.
     */
    namespaceId: string;
    /**
     * The name of the trigger to be managed.
     */
    triggerName: string;
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
      url: "/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}",
      path: {
        namespace_id: namespaceId,
        trigger_name: triggerName,
      },
      errors: {
        401: `Unauthorized`,
        404: `Bad Request.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
