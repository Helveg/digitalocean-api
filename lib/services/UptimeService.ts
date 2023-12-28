/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class UptimeService extends ApiService {
  /**
   * List All Checks
   * To list all of the Uptime checks on your account, send a GET request to `/v2/uptime/checks`.
   * @returns any The response will be a JSON object with a key called `checks`. This will be set to an array of objects, each of which will contain the standard attributes associated with an uptime check
   * @throws ApiError
   */
  public uptimeListChecks({
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
      checks?: Array<
        {
          /**
           * A unique ID that can be used to identify and reference the check.
           */
          readonly id?: string;
        } & {
          /**
           * A human-friendly display name.
           */
          name?: string;
          /**
           * The type of health check to perform.
           */
          type?: "ping" | "http" | "https";
          /**
           * The endpoint to perform healthchecks on.
           */
          target?: string;
          /**
           * An array containing the selected regions to perform healthchecks from.
           */
          regions?: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
          /**
           * A boolean value indicating whether the check is enabled/disabled.
           */
          enabled?: boolean;
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
      url: "/v2/uptime/checks",
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
   * Create a New Check
   * To create an Uptime check, send a POST request to `/v2/uptime/checks` specifying the attributes
   * in the table below in the JSON body.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public uptimeCreateCheck({
    requestBody,
  }: {
    requestBody: {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of health check to perform.
       */
      type?: "ping" | "http" | "https";
      /**
       * The endpoint to perform healthchecks on.
       */
      target?: string;
      /**
       * An array containing the selected regions to perform healthchecks from.
       */
      regions?: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
      /**
       * A boolean value indicating whether the check is enabled/disabled.
       */
      enabled?: boolean;
    } & {
      /**
       * A human-friendly display name.
       */
      name: string;
      /**
       * The type of health check to perform.
       */
      type: "ping" | "http" | "https";
      /**
       * The endpoint to perform healthchecks on.
       */
      target: string;
      /**
       * An array containing the selected regions to perform healthchecks from.
       */
      regions: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
      /**
       * A boolean value indicating whether the check is enabled/disabled.
       */
      enabled: boolean;
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
      url: "/v2/uptime/checks",
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
   * Retrieve an Existing Check
   * To show information about an existing check, send a GET request to `/v2/uptime/checks/$CHECK_ID`.
   * @returns any The response will be a JSON object with a key called `check`. The value of this will be an object that contains the standard attributes associated with an uptime check.
   * @throws ApiError
   */
  public uptimeGetCheck({
    checkId,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
  }): CancelablePromise<{
    check?: {
      /**
       * A unique ID that can be used to identify and reference the check.
       */
      readonly id?: string;
    } & {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of health check to perform.
       */
      type?: "ping" | "http" | "https";
      /**
       * The endpoint to perform healthchecks on.
       */
      target?: string;
      /**
       * An array containing the selected regions to perform healthchecks from.
       */
      regions?: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
      /**
       * A boolean value indicating whether the check is enabled/disabled.
       */
      enabled?: boolean;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/uptime/checks/{check_id}",
      path: {
        check_id: checkId,
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
   * Update a Check
   * To update the settings of an Uptime check, send a PUT request to `/v2/uptime/checks/$CHECK_ID`.
   *
   * @returns any The response will be a JSON object with a key called `check`. The value of this will be an object that contains the standard attributes associated with an uptime check.
   * @throws ApiError
   */
  public uptimeUpdateCheck({
    checkId,
    requestBody,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
    requestBody: {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of health check to perform.
       */
      type?: "ping" | "http" | "https";
      /**
       * The endpoint to perform healthchecks on.
       */
      target?: string;
      /**
       * An array containing the selected regions to perform healthchecks from.
       */
      regions?: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
      /**
       * A boolean value indicating whether the check is enabled/disabled.
       */
      enabled?: boolean;
    };
  }): CancelablePromise<{
    check?: {
      /**
       * A unique ID that can be used to identify and reference the check.
       */
      readonly id?: string;
    } & {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of health check to perform.
       */
      type?: "ping" | "http" | "https";
      /**
       * The endpoint to perform healthchecks on.
       */
      target?: string;
      /**
       * An array containing the selected regions to perform healthchecks from.
       */
      regions?: Array<"us_east" | "us_west" | "eu_west" | "se_asia">;
      /**
       * A boolean value indicating whether the check is enabled/disabled.
       */
      enabled?: boolean;
    };
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/uptime/checks/{check_id}",
      path: {
        check_id: checkId,
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
   * Delete a Check
   * To delete an Uptime check, send a DELETE request to `/v2/uptime/checks/$CHECK_ID`. A 204 status
   * code with no body will be returned in response to a successful request.
   *
   *
   * Deleting a check will also delete alerts associated with the check.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public uptimeDeleteCheck({
    checkId,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
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
      url: "/v2/uptime/checks/{check_id}",
      path: {
        check_id: checkId,
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
   * Retrieve Check State
   * To show information about an existing check's state, send a GET request to `/v2/uptime/checks/$CHECK_ID/state`.
   * @returns any The response will be a JSON object with a key called `state`. The value of this will be an object that contains the standard attributes associated with an uptime check's state.
   * @throws ApiError
   */
  public uptimeGetCheckState({
    checkId,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
  }): CancelablePromise<{
    state?: {
      /**
       * A map of region to regional state
       */
      regions?: {
        us_east?: {
          status?: "DOWN" | "UP" | "CHECKING";
          status_changed_at?: string;
          thirty_day_uptime_percentage?: number;
        };
        eu_west?: {
          status?: "DOWN" | "UP" | "CHECKING";
          status_changed_at?: string;
          thirty_day_uptime_percentage?: number;
        };
      };
      previous_outage?: {
        region?: string;
        started_at?: string;
        ended_at?: string;
        duration_seconds?: number;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/uptime/checks/{check_id}/state",
      path: {
        check_id: checkId,
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
   * List All Alerts
   * To list all of the alerts for an Uptime check, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts`.
   * @returns any The response will be a JSON object with a key called `alerts`. This will be set to an array of objects, each of which will contain the standard attributes associated with an uptime alert.
   * @throws ApiError
   */
  public uptimeListAlerts({
    checkId,
    perPage = 20,
    page = 1,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
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
      alerts?: Array<
        {
          /**
           * A unique ID that can be used to identify and reference the alert.
           */
          readonly id?: string;
        } & {
          /**
           * A human-friendly display name.
           */
          name?: string;
          /**
           * The type of alert.
           */
          type?: "latency" | "down" | "down_global" | "ssl_expiry";
          /**
           * The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
           */
          threshold?: number;
          /**
           * The comparison operator used against the alert's threshold.
           */
          comparison?: "greater_than" | "less_than";
          /**
           * The notification settings for a trigger alert.
           */
          notifications?: {
            /**
             * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
             */
            email: Array<string>;
            /**
             * Slack integration details.
             */
            slack: Array<{
              /**
               * Slack channel to notify of an alert trigger.
               */
              channel: string;
              /**
               * Slack Webhook URL.
               */
              url: string;
            }>;
          };
          /**
           * Period of time the threshold must be exceeded to trigger the alert.
           */
          period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
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
      url: "/v2/uptime/checks/{check_id}/alerts",
      path: {
        check_id: checkId,
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
   * Create a New Alert
   * To create an Uptime alert, send a POST request to `/v2/uptime/checks/$CHECK_ID/alerts` specifying the attributes
   * in the table below in the JSON body.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public uptimeCreateAlert({
    checkId,
    requestBody,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
    /**
     * The ''type'' field dictates the type of alert, and hence what type of value to pass into the threshold property.
     * Type | Description | Threshold Value
     * -----|-------------|--------------------
     * `latency` | alerts on the response latency | milliseconds
     * `down` | alerts on a target registering as down in any region | N/A (Not required)
     * `down_global` | alerts on a target registering as down globally | N/A (Not required)
     * `ssl_expiry` | alerts on a SSL certificate expiring within $threshold days | days
     *
     */
    requestBody: {
      /**
       * A unique ID that can be used to identify and reference the alert.
       */
      readonly id?: string;
    } & {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of alert.
       */
      type?: "latency" | "down" | "down_global" | "ssl_expiry";
      /**
       * The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
       */
      threshold?: number;
      /**
       * The comparison operator used against the alert's threshold.
       */
      comparison?: "greater_than" | "less_than";
      /**
       * The notification settings for a trigger alert.
       */
      notifications?: {
        /**
         * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
         */
        email: Array<string>;
        /**
         * Slack integration details.
         */
        slack: Array<{
          /**
           * Slack channel to notify of an alert trigger.
           */
          channel: string;
          /**
           * Slack Webhook URL.
           */
          url: string;
        }>;
      };
      /**
       * Period of time the threshold must be exceeded to trigger the alert.
       */
      period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
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
      url: "/v2/uptime/checks/{check_id}/alerts",
      path: {
        check_id: checkId,
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
   * Retrieve an Existing Alert
   * To show information about an existing alert, send a GET request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.
   * @returns any The response will be a JSON object with a key called `alert`. The value of this will be an object that contains the standard attributes associated with an uptime alert.
   * @throws ApiError
   */
  public uptimeGetAlert({
    checkId,
    alertId,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
    /**
     * A unique identifier for an alert.
     */
    alertId: string;
  }): CancelablePromise<{
    alert?: {
      /**
       * A unique ID that can be used to identify and reference the alert.
       */
      readonly id?: string;
    } & {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of alert.
       */
      type?: "latency" | "down" | "down_global" | "ssl_expiry";
      /**
       * The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
       */
      threshold?: number;
      /**
       * The comparison operator used against the alert's threshold.
       */
      comparison?: "greater_than" | "less_than";
      /**
       * The notification settings for a trigger alert.
       */
      notifications?: {
        /**
         * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
         */
        email: Array<string>;
        /**
         * Slack integration details.
         */
        slack: Array<{
          /**
           * Slack channel to notify of an alert trigger.
           */
          channel: string;
          /**
           * Slack Webhook URL.
           */
          url: string;
        }>;
      };
      /**
       * Period of time the threshold must be exceeded to trigger the alert.
       */
      period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
      path: {
        check_id: checkId,
        alert_id: alertId,
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
   * Update an Alert
   * To update the settings of an Uptime alert, send a PUT request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`.
   *
   * @returns any The response will be a JSON object with a key called `alert`. The value of this will be an object that contains the standard attributes associated with an uptime alert.
   * @throws ApiError
   */
  public uptimeUpdateAlert({
    checkId,
    alertId,
    requestBody,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
    /**
     * A unique identifier for an alert.
     */
    alertId: string;
    requestBody: {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of alert.
       */
      type?: "latency" | "down" | "down_global" | "ssl_expiry";
      /**
       * The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
       */
      threshold?: number;
      /**
       * The comparison operator used against the alert's threshold.
       */
      comparison?: "greater_than" | "less_than";
      /**
       * The notification settings for a trigger alert.
       */
      notifications?: {
        /**
         * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
         */
        email: Array<string>;
        /**
         * Slack integration details.
         */
        slack: Array<{
          /**
           * Slack channel to notify of an alert trigger.
           */
          channel: string;
          /**
           * Slack Webhook URL.
           */
          url: string;
        }>;
      };
      /**
       * Period of time the threshold must be exceeded to trigger the alert.
       */
      period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    } & {
      /**
       * A human-friendly display name.
       */
      name: string;
      /**
       * The type of alert.
       */
      type: "latency" | "down" | "down_global" | "ssl_expiry";
      /**
       * The notification settings for a trigger alert.
       */
      notifications: {
        /**
         * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
         */
        email: Array<string>;
        /**
         * Slack integration details.
         */
        slack: Array<{
          /**
           * Slack channel to notify of an alert trigger.
           */
          channel: string;
          /**
           * Slack Webhook URL.
           */
          url: string;
        }>;
      };
      /**
       * Period of time the threshold must be exceeded to trigger the alert.
       */
      period: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    };
  }): CancelablePromise<{
    alert?: {
      /**
       * A unique ID that can be used to identify and reference the alert.
       */
      readonly id?: string;
    } & {
      /**
       * A human-friendly display name.
       */
      name?: string;
      /**
       * The type of alert.
       */
      type?: "latency" | "down" | "down_global" | "ssl_expiry";
      /**
       * The threshold at which the alert will enter a trigger state. The specific threshold is dependent on the alert type.
       */
      threshold?: number;
      /**
       * The comparison operator used against the alert's threshold.
       */
      comparison?: "greater_than" | "less_than";
      /**
       * The notification settings for a trigger alert.
       */
      notifications?: {
        /**
         * An email to notify on an alert trigger. The Email has to be one that is verified on that DigitalOcean account.
         */
        email: Array<string>;
        /**
         * Slack integration details.
         */
        slack: Array<{
          /**
           * Slack channel to notify of an alert trigger.
           */
          channel: string;
          /**
           * Slack Webhook URL.
           */
          url: string;
        }>;
      };
      /**
       * Period of time the threshold must be exceeded to trigger the alert.
       */
      period?: "2m" | "3m" | "5m" | "10m" | "15m" | "30m" | "1h";
    };
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
      path: {
        check_id: checkId,
        alert_id: alertId,
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
   * Delete an Alert
   * To delete an Uptime alert, send a DELETE request to `/v2/uptime/checks/$CHECK_ID/alerts/$ALERT_ID`. A 204 status
   * code with no body will be returned in response to a successful request.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public uptimeDeleteAlert({
    checkId,
    alertId,
  }: {
    /**
     * A unique identifier for a check.
     */
    checkId: string;
    /**
     * A unique identifier for an alert.
     */
    alertId: string;
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
      url: "/v2/uptime/checks/{check_id}/alerts/{alert_id}",
      path: {
        check_id: checkId,
        alert_id: alertId,
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
