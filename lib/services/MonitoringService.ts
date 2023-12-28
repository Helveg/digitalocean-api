/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class MonitoringService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List Alert Policies
   * Returns all alert policies that are configured for the given account. To List all alert policies, send a GET request to `/v2/monitoring/alerts`.
   * @returns any A list of alert policies.
   * @throws ApiError
   */
  public monitoringListAlertPolicy({
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
      policies: Array<{
        alerts: {
          /**
           * An email to notify on an alert trigger.
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
        compare: "GreaterThan" | "LessThan";
        description: string;
        enabled: boolean;
        entities: Array<string>;
        tags: Array<string>;
        type:
          | "v1/insights/droplet/load_1"
          | "v1/insights/droplet/load_5"
          | "v1/insights/droplet/load_15"
          | "v1/insights/droplet/memory_utilization_percent"
          | "v1/insights/droplet/disk_utilization_percent"
          | "v1/insights/droplet/cpu"
          | "v1/insights/droplet/disk_read"
          | "v1/insights/droplet/disk_write"
          | "v1/insights/droplet/public_outbound_bandwidth"
          | "v1/insights/droplet/public_inbound_bandwidth"
          | "v1/insights/droplet/private_outbound_bandwidth"
          | "v1/insights/droplet/private_inbound_bandwidth"
          | "v1/insights/lbaas/avg_cpu_utilization_percent"
          | "v1/insights/lbaas/connection_utilization_percent"
          | "v1/insights/lbaas/droplet_health"
          | "v1/insights/lbaas/tls_connections_per_second_utilization_percent"
          | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx"
          | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx"
          | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx"
          | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx"
          | "v1/insights/lbaas/high_http_request_response_time"
          | "v1/insights/lbaas/high_http_request_response_time_50p"
          | "v1/insights/lbaas/high_http_request_response_time_95p"
          | "v1/insights/lbaas/high_http_request_response_time_99p"
          | "v1/dbaas/alerts/load_15_alerts"
          | "v1/dbaas/alerts/memory_utilization_alerts"
          | "v1/dbaas/alerts/disk_utilization_alerts"
          | "v1/dbaas/alerts/cpu_alerts";
        uuid: string;
        value: number;
        window: "5m" | "10m" | "30m" | "1h";
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
      url: "/v2/monitoring/alerts",
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
   * Create Alert Policy
   * To create a new alert, send a POST request to `/v2/monitoring/alerts`.
   * @returns any An alert policy.
   * @throws ApiError
   */
  public monitoringCreateAlertPolicy({
    requestBody,
  }: {
    /**
     * The `type` field dictates what type of entity that the alert policy applies to and hence what type of entity is passed in the `entities` array. If both the `tags` array and `entities` array are empty the alert policy applies to all entities of the relevant type that are owned by the user account. Otherwise the following table shows the valid entity types for each type of alert policy:
     *
     * Type | Description | Valid Entity Type
     * -----|-------------|--------------------
     * `v1/insights/droplet/memory_utilization_percent` | alert on the percent of memory utilization | Droplet ID
     * `v1/insights/droplet/disk_read` | alert on the rate of disk read I/O in MBps | Droplet ID
     * `v1/insights/droplet/load_5` | alert on the 5 minute load average | Droplet ID
     * `v1/insights/droplet/load_15` | alert on the 15 minute load average | Droplet ID
     * `v1/insights/droplet/disk_utilization_percent` | alert on the percent of disk utilization | Droplet ID
     * `v1/insights/droplet/cpu` | alert on the percent of CPU utilization | Droplet ID
     * `v1/insights/droplet/disk_write` | alert on the rate of disk write I/O in MBps | Droplet ID
     * `v1/insights/droplet/public_outbound_bandwidth` | alert on the rate of public outbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/public_inbound_bandwidth` | alert on the rate of public inbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/private_outbound_bandwidth` | alert on the rate of private outbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/private_inbound_bandwidth` | alert on the rate of private inbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/load_1` | alert on the 1 minute load average | Droplet ID
     * `v1/insights/lbaas/avg_cpu_utilization_percent`|alert on the percent of CPU utilization|load balancer ID
     * `v1/insights/lbaas/connection_utilization_percent`|alert on the percent of connection utilization|load balancer ID
     * `v1/insights/lbaas/droplet_health`|alert on Droplet health status changes|load balancer ID
     * `v1/insights/lbaas/tls_connections_per_second_utilization_percent`|alert on the percent of TLS connections per second utilization|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx`|alert on the percent increase of 5xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx`|alert on the percent increase of 4xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_count_5xx`|alert on the count of 5xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_count_4xx`|alert on the count of 4xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time`|alert on high average http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_50p`|alert on high 50th percentile http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_95p`|alert on high 95th percentile http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_99p`|alert on high 99th percentile http response time|load balancer ID
     * `v1/dbaas/alerts/load_15_alerts` | alert on 15 minute load average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/memory_utilization_alerts` | alert on the percent memory utilization average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/disk_utilization_alerts` | alert on the percent disk utilization average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/cpu_alerts` | alert on the percent CPU usage average across the database cluster | database cluster UUID
     *
     */
    requestBody: {
      alerts: {
        /**
         * An email to notify on an alert trigger.
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
      compare: "GreaterThan" | "LessThan";
      description: string;
      enabled: boolean;
      entities: Array<string>;
      tags: Array<string>;
      type:
        | "v1/insights/droplet/load_1"
        | "v1/insights/droplet/load_5"
        | "v1/insights/droplet/load_15"
        | "v1/insights/droplet/memory_utilization_percent"
        | "v1/insights/droplet/disk_utilization_percent"
        | "v1/insights/droplet/cpu"
        | "v1/insights/droplet/disk_read"
        | "v1/insights/droplet/disk_write"
        | "v1/insights/droplet/public_outbound_bandwidth"
        | "v1/insights/droplet/public_inbound_bandwidth"
        | "v1/insights/droplet/private_outbound_bandwidth"
        | "v1/insights/droplet/private_inbound_bandwidth"
        | "v1/insights/lbaas/avg_cpu_utilization_percent"
        | "v1/insights/lbaas/connection_utilization_percent"
        | "v1/insights/lbaas/droplet_health"
        | "v1/insights/lbaas/tls_connections_per_second_utilization_percent"
        | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx"
        | "v1/insights/lbaas/high_http_request_response_time"
        | "v1/insights/lbaas/high_http_request_response_time_50p"
        | "v1/insights/lbaas/high_http_request_response_time_95p"
        | "v1/insights/lbaas/high_http_request_response_time_99p"
        | "v1/dbaas/alerts/load_15_alerts"
        | "v1/dbaas/alerts/memory_utilization_alerts"
        | "v1/dbaas/alerts/disk_utilization_alerts"
        | "v1/dbaas/alerts/cpu_alerts";
      value: number;
      window: "5m" | "10m" | "30m" | "1h";
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/monitoring/alerts",
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
   * Retrieve an Existing Alert Policy
   * To retrieve a given alert policy, send a GET request to `/v2/monitoring/alerts/{alert_uuid}`
   * @returns any An alert policy.
   * @throws ApiError
   */
  public monitoringGetAlertPolicy({
    alertUuid,
  }: {
    /**
     * A unique identifier for an alert policy.
     */
    alertUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/alerts/{alert_uuid}",
      path: {
        alert_uuid: alertUuid,
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
   * Update an Alert Policy
   * To update en existing policy, send a PUT request to `v2/monitoring/alerts/{alert_uuid}`.
   * @returns any An alert policy.
   * @throws ApiError
   */
  public monitoringUpdateAlertPolicy({
    alertUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for an alert policy.
     */
    alertUuid: string;
    /**
     * The `type` field dictates what type of entity that the alert policy applies to and hence what type of entity is passed in the `entities` array. If both the `tags` array and `entities` array are empty the alert policy applies to all entities of the relevant type that are owned by the user account. Otherwise the following table shows the valid entity types for each type of alert policy:
     *
     * Type | Description | Valid Entity Type
     * -----|-------------|--------------------
     * `v1/insights/droplet/memory_utilization_percent` | alert on the percent of memory utilization | Droplet ID
     * `v1/insights/droplet/disk_read` | alert on the rate of disk read I/O in MBps | Droplet ID
     * `v1/insights/droplet/load_5` | alert on the 5 minute load average | Droplet ID
     * `v1/insights/droplet/load_15` | alert on the 15 minute load average | Droplet ID
     * `v1/insights/droplet/disk_utilization_percent` | alert on the percent of disk utilization | Droplet ID
     * `v1/insights/droplet/cpu` | alert on the percent of CPU utilization | Droplet ID
     * `v1/insights/droplet/disk_write` | alert on the rate of disk write I/O in MBps | Droplet ID
     * `v1/insights/droplet/public_outbound_bandwidth` | alert on the rate of public outbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/public_inbound_bandwidth` | alert on the rate of public inbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/private_outbound_bandwidth` | alert on the rate of private outbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/private_inbound_bandwidth` | alert on the rate of private inbound bandwidth in Mbps | Droplet ID
     * `v1/insights/droplet/load_1` | alert on the 1 minute load average | Droplet ID
     * `v1/insights/lbaas/avg_cpu_utilization_percent`|alert on the percent of CPU utilization|load balancer ID
     * `v1/insights/lbaas/connection_utilization_percent`|alert on the percent of connection utilization|load balancer ID
     * `v1/insights/lbaas/droplet_health`|alert on Droplet health status changes|load balancer ID
     * `v1/insights/lbaas/tls_connections_per_second_utilization_percent`|alert on the percent of TLS connections per second utilization|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx`|alert on the percent increase of 5xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx`|alert on the percent increase of 4xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_count_5xx`|alert on the count of 5xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/increase_in_http_error_rate_count_4xx`|alert on the count of 4xx level http errors over 5m|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time`|alert on high average http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_50p`|alert on high 50th percentile http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_95p`|alert on high 95th percentile http response time|load balancer ID
     * `v1/insights/lbaas/high_http_request_response_time_99p`|alert on high 99th percentile http response time|load balancer ID
     * `v1/dbaas/alerts/load_15_alerts` | alert on 15 minute load average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/memory_utilization_alerts` | alert on the percent memory utilization average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/disk_utilization_alerts` | alert on the percent disk utilization average across the database cluster | database cluster UUID
     * `v1/dbaas/alerts/cpu_alerts` | alert on the percent CPU usage average across the database cluster | database cluster UUID
     *
     */
    requestBody: {
      alerts: {
        /**
         * An email to notify on an alert trigger.
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
      compare: "GreaterThan" | "LessThan";
      description: string;
      enabled: boolean;
      entities: Array<string>;
      tags: Array<string>;
      type:
        | "v1/insights/droplet/load_1"
        | "v1/insights/droplet/load_5"
        | "v1/insights/droplet/load_15"
        | "v1/insights/droplet/memory_utilization_percent"
        | "v1/insights/droplet/disk_utilization_percent"
        | "v1/insights/droplet/cpu"
        | "v1/insights/droplet/disk_read"
        | "v1/insights/droplet/disk_write"
        | "v1/insights/droplet/public_outbound_bandwidth"
        | "v1/insights/droplet/public_inbound_bandwidth"
        | "v1/insights/droplet/private_outbound_bandwidth"
        | "v1/insights/droplet/private_inbound_bandwidth"
        | "v1/insights/lbaas/avg_cpu_utilization_percent"
        | "v1/insights/lbaas/connection_utilization_percent"
        | "v1/insights/lbaas/droplet_health"
        | "v1/insights/lbaas/tls_connections_per_second_utilization_percent"
        | "v1/insights/lbaas/increase_in_http_error_rate_percentage_5xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_percentage_4xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_count_5xx"
        | "v1/insights/lbaas/increase_in_http_error_rate_count_4xx"
        | "v1/insights/lbaas/high_http_request_response_time"
        | "v1/insights/lbaas/high_http_request_response_time_50p"
        | "v1/insights/lbaas/high_http_request_response_time_95p"
        | "v1/insights/lbaas/high_http_request_response_time_99p"
        | "v1/dbaas/alerts/load_15_alerts"
        | "v1/dbaas/alerts/memory_utilization_alerts"
        | "v1/dbaas/alerts/disk_utilization_alerts"
        | "v1/dbaas/alerts/cpu_alerts";
      value: number;
      window: "5m" | "10m" | "30m" | "1h";
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/monitoring/alerts/{alert_uuid}",
      path: {
        alert_uuid: alertUuid,
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
   * Delete an Alert Policy
   * To delete an alert policy, send a DELETE request to `/v2/monitoring/alerts/{alert_uuid}`
   * @returns any Unexpected error
   * @throws ApiError
   */
  public monitoringDeleteAlertPolicy({
    alertUuid,
  }: {
    /**
     * A unique identifier for an alert policy.
     */
    alertUuid: string;
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
      url: "/v2/monitoring/alerts/{alert_uuid}",
      path: {
        alert_uuid: alertUuid,
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
   * Get Droplet Bandwidth Metrics
   * To retrieve bandwidth metrics for a given Droplet, send a GET request to `/v2/monitoring/metrics/droplet/bandwidth`. Use the `interface` query parameter to specify if the results should be for the `private` or `public` interface. Use the `direction` query parameter to specify if the results should be for `inbound` or `outbound` traffic.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletBandwidthMetrics({
    hostId,
    _interface,
    direction,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * The network interface.
     */
    _interface: "private" | "public";
    /**
     * The traffic direction.
     */
    direction: "inbound" | "outbound";
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/bandwidth",
      query: {
        host_id: hostId,
        interface: _interface,
        direction: direction,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet CPU Metrics
   * To retrieve CPU metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/cpu`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletCpuMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/cpu",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Filesystem Free Metrics
   * To retrieve filesystem free metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_free`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletFilesystemFreeMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/filesystem_free",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Filesystem Size Metrics
   * To retrieve filesystem size metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/filesystem_size`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletFilesystemSizeMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/filesystem_size",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Load1 Metrics
   * To retrieve 1 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_1`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletLoad1Metrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/load_1",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Load5 Metrics
   * To retrieve 5 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_5`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletLoad5Metrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/load_5",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Load15 Metrics
   * To retrieve 15 minute load average metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/load_15`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletLoad15Metrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/load_15",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Cached Memory Metrics
   * To retrieve cached memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_cached`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletMemoryCachedMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/memory_cached",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Free Memory Metrics
   * To retrieve free memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_free`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletMemoryFreeMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/memory_free",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Total Memory Metrics
   * To retrieve total memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_total`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletMemoryTotalMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/memory_total",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Droplet Available Memory Metrics
   * To retrieve available memory metrics for a given droplet, send a GET request to `/v2/monitoring/metrics/droplet/memory_available`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetDropletMemoryAvailableMetrics({
    hostId,
    start,
    end,
  }: {
    /**
     * The droplet ID.
     */
    hostId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/droplet/memory_available",
      query: {
        host_id: hostId,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get App Memory Percentage Metrics
   * To retrieve memory percentage metrics for a given app, send a GET request to `/v2/monitoring/metrics/apps/memory_percentage`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetAppMemoryPercentageMetrics({
    appId,
    start,
    end,
    appComponent,
  }: {
    /**
     * The app UUID.
     */
    appId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
    /**
     * The app component name.
     */
    appComponent?: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/apps/memory_percentage",
      query: {
        app_id: appId,
        app_component: appComponent,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get App CPU Percentage Metrics
   * To retrieve cpu percentage metrics for a given app, send a GET request to `/v2/monitoring/metrics/apps/cpu_percentage`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetAppCpuPercentageMetrics({
    appId,
    start,
    end,
    appComponent,
  }: {
    /**
     * The app UUID.
     */
    appId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
    /**
     * The app component name.
     */
    appComponent?: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/apps/cpu_percentage",
      query: {
        app_id: appId,
        app_component: appComponent,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get App Restart Count Metrics
   * To retrieve restart count metrics for a given app, send a GET request to `/v2/monitoring/metrics/apps/restart_count`.
   * @returns any The response will be a JSON object with a key called `data` and `status`.
   * @throws ApiError
   */
  public monitoringGetAppRestartCountMetricsYml({
    appId,
    start,
    end,
    appComponent,
  }: {
    /**
     * The app UUID.
     */
    appId: string;
    /**
     * Timestamp to start metric window.
     */
    start: string;
    /**
     * Timestamp to end metric window.
     */
    end: string;
    /**
     * The app component name.
     */
    appComponent?: string;
  }): CancelablePromise<{
    data: {
      /**
       * Result of query.
       */
      result: Array<{
        /**
         * An object containing the metric labels.
         */
        metric: Record<string, string>;
        values: Array<Array<number | string>>;
      }>;
      resultType: "matrix";
    };
    status: "success" | "error";
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/monitoring/metrics/apps/restart_count",
      query: {
        app_id: appId,
        app_component: appComponent,
        start: start,
        end: end,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
