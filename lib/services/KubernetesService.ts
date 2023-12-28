/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class KubernetesService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Kubernetes Clusters
   * To list all of the Kubernetes clusters on your account, send a GET request
   * to `/v2/kubernetes/clusters`.
   *
   * @returns any The response will be a JSON object with a key called `kubernetes_clusters`.
   * This will be set to an array of objects, each of which will contain the
   * standard Kubernetes cluster attributes.
   *
   * @throws ApiError
   */
  public kubernetesListClusters({
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
      kubernetes_clusters?: Array<{
        /**
         * A unique ID that can be used to identify and reference a Kubernetes cluster.
         */
        readonly id?: string;
        /**
         * A human-readable name for a Kubernetes cluster.
         */
        name: string;
        /**
         * The slug identifier for the region where the Kubernetes cluster is located.
         */
        region: string;
        /**
         * The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions.
         */
        version: string;
        /**
         * The range of IP addresses in the overlay network of the Kubernetes cluster in CIDR notation.
         */
        readonly cluster_subnet?: string;
        /**
         * The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation.
         */
        readonly service_subnet?: string;
        /**
         * A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.
         */
        vpc_uuid?: string;
        /**
         * The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+)
         */
        readonly ipv4?: string;
        /**
         * The base URL of the API server on the Kubernetes master node.
         */
        readonly endpoint?: string;
        /**
         * An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.
         */
        tags?: Array<string>;
        /**
         * An object specifying the details of the worker nodes available to the Kubernetes cluster.
         */
        node_pools: Array<
          {
            /**
             * The slug identifier for the type of Droplet used as workers in the node pool.
             */
            size?: string;
          } & {
            /**
             * A unique ID that can be used to identify and reference a specific node pool.
             */
            readonly id?: string;
            /**
             * A human-readable name for the node pool.
             */
            name?: string;
            /**
             * The number of Droplet instances in the node pool.
             */
            count?: number;
            /**
             * An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`.
             */
            tags?: Array<string>;
            /**
             * An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.
             */
            labels?: Record<string, any> | null;
            /**
             * An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.
             */
            taints?: Array<{
              /**
               * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
               */
              key?: string;
              /**
               * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
               */
              value?: string;
              /**
               * How the node reacts to pods that it won't tolerate. Available effect values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
               */
              effect?: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
            }>;
            /**
             * A boolean value indicating whether auto-scaling is enabled for this node pool.
             */
            auto_scale?: boolean;
            /**
             * The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
             */
            min_nodes?: number;
            /**
             * The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
             */
            max_nodes?: number;
            /**
             * An object specifying the details of a specific worker node in a node pool.
             */
            readonly nodes?: Array<{
              /**
               * A unique ID that can be used to identify and reference the node.
               */
              id?: string;
              /**
               * An automatically generated, human-readable name for the node.
               */
              name?: string;
              /**
               * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
               */
              status?: {
                /**
                 * A string indicating the current status of the node.
                 */
                state?: "provisioning" | "running" | "draining" | "deleting";
              };
              /**
               * The ID of the Droplet used for the worker node.
               */
              droplet_id?: string;
              /**
               * A time value given in ISO8601 combined date and time format that represents when the node was created.
               */
              created_at?: string;
              /**
               * A time value given in ISO8601 combined date and time format that represents when the node was last updated.
               */
              updated_at?: string;
            }>;
          } & {
            /**
             * The slug identifier for the type of Droplet used as workers in the node pool.
             */
            size: string;
            /**
             * A human-readable name for the node pool.
             */
            name: string;
            /**
             * The number of Droplet instances in the node pool.
             */
            count: number;
          }
        >;
        /**
         * An object specifying the maintenance window policy for the Kubernetes cluster.
         */
        maintenance_policy?: {
          /**
           * The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).
           */
          start_time?: string;
          /**
           * The duration of the maintenance window policy in human-readable format.
           */
          readonly duration?: string;
          /**
           * The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.
           */
          day?:
            | "any"
            | "monday"
            | "tuesday"
            | "wednesday"
            | "thursday"
            | "friday"
            | "saturday"
            | "sunday";
        } | null;
        /**
         * A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.
         */
        auto_upgrade?: boolean;
        /**
         * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
         */
        readonly status?: {
          /**
           * A string indicating the current status of the cluster.
           */
          state?:
            | "running"
            | "provisioning"
            | "degraded"
            | "error"
            | "deleted"
            | "upgrading"
            | "deleting";
          /**
           * An optional message providing additional information about the current cluster state.
           */
          message?: string;
        };
        /**
         * A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created.
         */
        readonly created_at?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated.
         */
        readonly updated_at?: string;
        /**
         * A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.
         */
        surge_upgrade?: boolean;
        /**
         * A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.
         */
        ha?: boolean;
        /**
         * A read-only boolean value indicating if a container registry is integrated with the cluster.
         */
        readonly registry_enabled?: boolean;
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
      url: "/v2/kubernetes/clusters",
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
   * Create a New Kubernetes Cluster
   * To create a new Kubernetes cluster, send a POST request to
   * `/v2/kubernetes/clusters`. The request must contain at least one node pool
   * with at least one worker.
   *
   * The request may contain a maintenance window policy describing a time period
   * when disruptive maintenance tasks may be carried out. Omitting the policy
   * implies that a window will be chosen automatically. See
   * [here](https://www.digitalocean.com/docs/kubernetes/how-to/upgrade-cluster/)
   * for details.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesCreateCluster({
    requestBody,
  }: {
    requestBody: {
      /**
       * A unique ID that can be used to identify and reference a Kubernetes cluster.
       */
      readonly id?: string;
      /**
       * A human-readable name for a Kubernetes cluster.
       */
      name: string;
      /**
       * The slug identifier for the region where the Kubernetes cluster is located.
       */
      region: string;
      /**
       * The slug identifier for the version of Kubernetes used for the cluster. If set to a minor version (e.g. "1.14"), the latest version within it will be used (e.g. "1.14.6-do.1"); if set to "latest", the latest published version will be used. See the `/v2/kubernetes/options` endpoint to find all currently available versions.
       */
      version: string;
      /**
       * The range of IP addresses in the overlay network of the Kubernetes cluster in CIDR notation.
       */
      readonly cluster_subnet?: string;
      /**
       * The range of assignable IP addresses for services running in the Kubernetes cluster in CIDR notation.
       */
      readonly service_subnet?: string;
      /**
       * A string specifying the UUID of the VPC to which the Kubernetes cluster is assigned.
       */
      vpc_uuid?: string;
      /**
       * The public IPv4 address of the Kubernetes master node. This will not be set if high availability is configured on the cluster (v1.21+)
       */
      readonly ipv4?: string;
      /**
       * The base URL of the API server on the Kubernetes master node.
       */
      readonly endpoint?: string;
      /**
       * An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.
       */
      tags?: Array<string>;
      /**
       * An object specifying the details of the worker nodes available to the Kubernetes cluster.
       */
      node_pools: Array<
        {
          /**
           * The slug identifier for the type of Droplet used as workers in the node pool.
           */
          size?: string;
        } & {
          /**
           * A unique ID that can be used to identify and reference a specific node pool.
           */
          readonly id?: string;
          /**
           * A human-readable name for the node pool.
           */
          name?: string;
          /**
           * The number of Droplet instances in the node pool.
           */
          count?: number;
          /**
           * An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`.
           */
          tags?: Array<string>;
          /**
           * An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.
           */
          labels?: Record<string, any> | null;
          /**
           * An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.
           */
          taints?: Array<{
            /**
             * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
             */
            key?: string;
            /**
             * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
             */
            value?: string;
            /**
             * How the node reacts to pods that it won't tolerate. Available effect values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
             */
            effect?: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
          }>;
          /**
           * A boolean value indicating whether auto-scaling is enabled for this node pool.
           */
          auto_scale?: boolean;
          /**
           * The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
           */
          min_nodes?: number;
          /**
           * The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
           */
          max_nodes?: number;
          /**
           * An object specifying the details of a specific worker node in a node pool.
           */
          readonly nodes?: Array<{
            /**
             * A unique ID that can be used to identify and reference the node.
             */
            id?: string;
            /**
             * An automatically generated, human-readable name for the node.
             */
            name?: string;
            /**
             * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
             */
            status?: {
              /**
               * A string indicating the current status of the node.
               */
              state?: "provisioning" | "running" | "draining" | "deleting";
            };
            /**
             * The ID of the Droplet used for the worker node.
             */
            droplet_id?: string;
            /**
             * A time value given in ISO8601 combined date and time format that represents when the node was created.
             */
            created_at?: string;
            /**
             * A time value given in ISO8601 combined date and time format that represents when the node was last updated.
             */
            updated_at?: string;
          }>;
        } & {
          /**
           * The slug identifier for the type of Droplet used as workers in the node pool.
           */
          size: string;
          /**
           * A human-readable name for the node pool.
           */
          name: string;
          /**
           * The number of Droplet instances in the node pool.
           */
          count: number;
        }
      >;
      /**
       * An object specifying the maintenance window policy for the Kubernetes cluster.
       */
      maintenance_policy?: {
        /**
         * The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).
         */
        start_time?: string;
        /**
         * The duration of the maintenance window policy in human-readable format.
         */
        readonly duration?: string;
        /**
         * The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.
         */
        day?:
          | "any"
          | "monday"
          | "tuesday"
          | "wednesday"
          | "thursday"
          | "friday"
          | "saturday"
          | "sunday";
      } | null;
      /**
       * A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.
       */
      auto_upgrade?: boolean;
      /**
       * An object containing a `state` attribute whose value is set to a string indicating the current status of the cluster.
       */
      readonly status?: {
        /**
         * A string indicating the current status of the cluster.
         */
        state?:
          | "running"
          | "provisioning"
          | "degraded"
          | "error"
          | "deleted"
          | "upgrading"
          | "deleting";
        /**
         * An optional message providing additional information about the current cluster state.
         */
        message?: string;
      };
      /**
       * A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was created.
       */
      readonly created_at?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the Kubernetes cluster was last updated.
       */
      readonly updated_at?: string;
      /**
       * A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.
       */
      surge_upgrade?: boolean;
      /**
       * A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.
       */
      ha?: boolean;
      /**
       * A read-only boolean value indicating if a container registry is integrated with the cluster.
       */
      readonly registry_enabled?: boolean;
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
      url: "/v2/kubernetes/clusters",
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
   * Retrieve an Existing Kubernetes Cluster
   * To show information about an existing Kubernetes cluster, send a GET request
   * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
   *
   * @returns any The response will be a JSON object with a key called `kubernetes_cluster`. The
   * value of this will be an object containing the standard attributes of a
   * Kubernetes cluster.
   *
   * @throws ApiError
   */
  public kubernetesGetCluster({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}",
      path: {
        cluster_id: clusterId,
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
   * Update a Kubernetes Cluster
   * To update a Kubernetes cluster, send a PUT request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID` and specify one or more of the
   * attributes below.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesUpdateCluster({
    clusterId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    requestBody: {
      /**
       * A human-readable name for a Kubernetes cluster.
       */
      name: string;
      /**
       * An array of tags applied to the Kubernetes cluster. All clusters are automatically tagged `k8s` and `k8s:$K8S_CLUSTER_ID`.
       */
      tags?: Array<string>;
      /**
       * An object specifying the maintenance window policy for the Kubernetes cluster.
       */
      maintenance_policy?: {
        /**
         * The start time in UTC of the maintenance window policy in 24-hour clock format / HH:MM notation (e.g., `15:00`).
         */
        start_time?: string;
        /**
         * The duration of the maintenance window policy in human-readable format.
         */
        readonly duration?: string;
        /**
         * The day of the maintenance window policy. May be one of `monday` through `sunday`, or `any` to indicate an arbitrary week day.
         */
        day?:
          | "any"
          | "monday"
          | "tuesday"
          | "wednesday"
          | "thursday"
          | "friday"
          | "saturday"
          | "sunday";
      } | null;
      /**
       * A boolean value indicating whether the cluster will be automatically upgraded to new patch releases during its maintenance window.
       */
      auto_upgrade?: boolean;
      /**
       * A boolean value indicating whether surge upgrade is enabled/disabled for the cluster. Surge upgrade makes cluster upgrades fast and reliable by bringing up new nodes before destroying the outdated nodes.
       */
      surge_upgrade?: boolean;
      /**
       * A boolean value indicating whether the control plane is run in a highly available configuration in the cluster. Highly available control planes incur less downtime. The property cannot be disabled.
       */
      ha?: boolean;
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
      method: "PUT",
      url: "/v2/kubernetes/clusters/{cluster_id}",
      path: {
        cluster_id: clusterId,
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
   * Delete a Kubernetes Cluster
   * To delete a Kubernetes cluster and all services deployed to it, send a DELETE
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID`.
   *
   * A 204 status code with no body will be returned in response to a successful
   * request.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesDeleteCluster({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
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
      url: "/v2/kubernetes/clusters/{cluster_id}",
      path: {
        cluster_id: clusterId,
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
   * List Associated Resources for Cluster Deletion
   * To list the associated billable resources that can be destroyed along with a cluster, send a GET request to the `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources` endpoint.
   * @returns any The response will be a JSON object containing `load_balancers`, `volumes`, and `volume_snapshots` keys. Each will be set to an array of objects containing the standard attributes for associated resources.
   * @throws ApiError
   */
  public kubernetesListAssociatedResources({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
  }): CancelablePromise<{
    /**
     * A list of names and IDs for associated load balancers that can be destroyed along with the cluster.
     */
    load_balancers?: Array<{
      /**
       * The ID of a resource associated with a Kubernetes cluster.
       */
      id?: string;
      /**
       * The name of a resource associated with a Kubernetes cluster.
       */
      name?: string;
    }>;
    /**
     * A list of names and IDs for associated volumes that can be destroyed along with the cluster.
     */
    volumes?: Array<{
      /**
       * The ID of a resource associated with a Kubernetes cluster.
       */
      id?: string;
      /**
       * The name of a resource associated with a Kubernetes cluster.
       */
      name?: string;
    }>;
    /**
     * A list of names and IDs for associated volume snapshots that can be destroyed along with the cluster.
     */
    volume_snapshots?: Array<{
      /**
       * The ID of a resource associated with a Kubernetes cluster.
       */
      id?: string;
      /**
       * The name of a resource associated with a Kubernetes cluster.
       */
      name?: string;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources",
      path: {
        cluster_id: clusterId,
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
   * Selectively Delete a Cluster and its Associated Resources
   * To delete a Kubernetes cluster along with a subset of its associated resources,
   * send a DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/selective`.
   *
   * The JSON body of the request should include `load_balancers`, `volumes`, or
   * `volume_snapshots` keys each set to an array of IDs for the associated
   * resources to be destroyed.
   *
   * The IDs can be found by querying the cluster's associated resources endpoint.
   * Any associated resource not included in the request will remain and continue
   * to accrue changes on your account.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesDestroyAssociatedResourcesSelective({
    clusterId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    requestBody: {
      /**
       * A list of IDs for associated load balancers to destroy along with the cluster.
       */
      load_balancers?: Array<string>;
      /**
       * A list of IDs for associated volumes to destroy along with the cluster.
       */
      volumes?: Array<string>;
      /**
       * A list of IDs for associated volume snapshots to destroy along with the cluster.
       */
      volume_snapshots?: Array<string>;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/selective",
      path: {
        cluster_id: clusterId,
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
   * Delete a Cluster and All of its Associated Resources (Dangerous)
   * To delete a Kubernetes cluster with all of its associated resources, send a
   * DELETE request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/destroy_with_associated_resources/dangerous`.
   * A 204 status code with no body will be returned in response to a successful request.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesDestroyAssociatedResourcesDangerous({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/destroy_with_associated_resources/dangerous",
      path: {
        cluster_id: clusterId,
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
   * Retrieve the kubeconfig for a Kubernetes Cluster
   * This endpoint returns a kubeconfig file in YAML format. It can be used to
   * connect to and administer the cluster using the Kubernetes command line tool,
   * `kubectl`, or other programs supporting kubeconfig files (e.g., client libraries).
   *
   * The resulting kubeconfig file uses token-based authentication for clusters
   * supporting it, and certificate-based authentication otherwise. For a list of
   * supported versions and more information, see "[How to Connect to a DigitalOcean
   * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
   *
   * To retrieve a kubeconfig file for use with a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig`.
   *
   * Clusters supporting token-based authentication may define an expiration by
   * passing a duration in seconds as a query parameter to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/kubeconfig?expiry_seconds=$DURATION_IN_SECONDS`.
   * If not set or 0, then the token will have a 7 day expiry. The query parameter
   * has no impact in certificate-based authentication.
   *
   * @returns string A kubeconfig file for the cluster in YAML format.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesGetKubeconfig({
    clusterId,
    expirySeconds,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.
     */
    expirySeconds?: number;
  }): CancelablePromise<
    | string
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
  > {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/kubeconfig",
      path: {
        cluster_id: clusterId,
      },
      query: {
        expiry_seconds: expirySeconds,
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
   * Retrieve Credentials for a Kubernetes Cluster
   * This endpoint returns a JSON object . It can be used to programmatically
   * construct Kubernetes clients which cannot parse kubeconfig files.
   *
   * The resulting JSON object contains token-based authentication for clusters
   * supporting it, and certificate-based authentication otherwise. For a list of
   * supported versions and more information, see "[How to Connect to a DigitalOcean
   * Kubernetes Cluster with kubectl](https://www.digitalocean.com/docs/kubernetes/how-to/connect-with-kubectl/)".
   *
   * To retrieve credentials for accessing a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials`.
   *
   * Clusters supporting token-based authentication may define an expiration by
   * passing a duration in seconds as a query parameter to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/credentials?expiry_seconds=$DURATION_IN_SECONDS`.
   * If not set or 0, then the token will have a 7 day expiry. The query parameter
   * has no impact in certificate-based authentication.
   *
   * @returns any A JSON object containing credentials for a cluster.
   * @throws ApiError
   */
  public kubernetesGetCredentials({
    clusterId,
    expirySeconds,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.
     */
    expirySeconds?: number;
  }): CancelablePromise<{
    /**
     * The URL used to access the cluster API server.
     */
    server?: string;
    /**
     * A base64 encoding of bytes representing the certificate authority data for accessing the cluster.
     */
    certificate_authority_data?: string;
    /**
     * A base64 encoding of bytes representing the x509 client
     * certificate data for access the cluster. This is only returned for clusters
     * without support for token-based authentication.
     *
     * Newly created Kubernetes clusters do not return credentials using
     * certificate-based authentication. For additional information,
     * [see here](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/#authenticate).
     *
     * @deprecated
     */
    client_certificate_data?: string | null;
    /**
     * A base64 encoding of bytes representing the x509 client key
     * data for access the cluster. This is only returned for clusters without
     * support for token-based authentication.
     *
     * Newly created Kubernetes clusters do not return credentials using
     * certificate-based authentication. For additional information,
     * [see here](https://www.digitalocean.com/docs/kubernetes/how-to/connect-to-cluster/#authenticate).
     *
     * @deprecated
     */
    client_key_data?: string | null;
    /**
     * An access token used to authenticate with the cluster. This is only returned for clusters with support for token-based authentication.
     */
    token?: string;
    /**
     * A time value given in ISO8601 combined date and time format that represents when the access token expires.
     */
    expires_at?: string;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/credentials",
      path: {
        cluster_id: clusterId,
      },
      query: {
        expiry_seconds: expirySeconds,
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
   * Retrieve Available Upgrades for an Existing Kubernetes Cluster
   * To determine whether a cluster can be upgraded, and the versions to which it
   * can be upgraded, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
   *
   * @returns any The response will be a JSON object with a key called
   * `available_upgrade_versions`. The value of this will be an array of objects,
   * representing the upgrade versions currently available for this cluster.
   *
   * If the cluster is up-to-date (i.e. there are no upgrades currently available)
   * `available_upgrade_versions` will be `null`.
   *
   * @throws ApiError
   */
  public kubernetesGetAvailableUpgrades({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
  }): CancelablePromise<{
    available_upgrade_versions?: Array<{
      /**
       * The slug identifier for an available version of Kubernetes for use when creating or updating a cluster. The string contains both the upstream version of Kubernetes as well as the DigitalOcean revision.
       */
      slug?: string;
      /**
       * The upstream version string for the version of Kubernetes provided by a given slug.
       */
      kubernetes_version?: string;
      /**
       * The features available with the version of Kubernetes provided by a given slug.
       */
      supported_features?: Array<string>;
    }> | null;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/upgrades",
      path: {
        cluster_id: clusterId,
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
   * Upgrade a Kubernetes Cluster
   * To immediately upgrade a Kubernetes cluster to a newer patch release of
   * Kubernetes, send a POST request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrade`.
   * The body of the request must specify a version attribute.
   *
   * Available upgrade versions for a cluster can be fetched from
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/upgrades`.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public kubernetesUpgradeCluster({
    clusterId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    requestBody: any;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/upgrade",
      path: {
        cluster_id: clusterId,
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
   * List All Node Pools in a Kubernetes Clusters
   * To list all of the node pools in a Kubernetes clusters, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools`.
   *
   * @returns any The response will be a JSON object with a key called `node_pools`. This will
   * be set to an array of objects, each of which will contain the standard node
   * pool attributes.
   *
   * @throws ApiError
   */
  public kubernetesListNodePools({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools",
      path: {
        cluster_id: clusterId,
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
   * Add a Node Pool to a Kubernetes Cluster
   * To add an additional node pool to a Kubernetes clusters, send a POST request
   * to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools` with the following
   * attributes.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesAddNodePool({
    clusterId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    requestBody: {
      /**
       * The slug identifier for the type of Droplet used as workers in the node pool.
       */
      size?: string;
    } & {
      /**
       * A unique ID that can be used to identify and reference a specific node pool.
       */
      readonly id?: string;
      /**
       * A human-readable name for the node pool.
       */
      name?: string;
      /**
       * The number of Droplet instances in the node pool.
       */
      count?: number;
      /**
       * An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`.
       */
      tags?: Array<string>;
      /**
       * An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.
       */
      labels?: Record<string, any> | null;
      /**
       * An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.
       */
      taints?: Array<{
        /**
         * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
         */
        key?: string;
        /**
         * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
         */
        value?: string;
        /**
         * How the node reacts to pods that it won't tolerate. Available effect values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
         */
        effect?: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
      }>;
      /**
       * A boolean value indicating whether auto-scaling is enabled for this node pool.
       */
      auto_scale?: boolean;
      /**
       * The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
       */
      min_nodes?: number;
      /**
       * The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
       */
      max_nodes?: number;
      /**
       * An object specifying the details of a specific worker node in a node pool.
       */
      readonly nodes?: Array<{
        /**
         * A unique ID that can be used to identify and reference the node.
         */
        id?: string;
        /**
         * An automatically generated, human-readable name for the node.
         */
        name?: string;
        /**
         * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
         */
        status?: {
          /**
           * A string indicating the current status of the node.
           */
          state?: "provisioning" | "running" | "draining" | "deleting";
        };
        /**
         * The ID of the Droplet used for the worker node.
         */
        droplet_id?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the node was created.
         */
        created_at?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the node was last updated.
         */
        updated_at?: string;
      }>;
    } & {
      /**
       * The slug identifier for the type of Droplet used as workers in the node pool.
       */
      size: string;
      /**
       * A human-readable name for the node pool.
       */
      name: string;
      /**
       * The number of Droplet instances in the node pool.
       */
      count: number;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools",
      path: {
        cluster_id: clusterId,
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
   * Retrieve a Node Pool for a Kubernetes Cluster
   * To show information about a specific node pool in a Kubernetes cluster, send
   * a GET request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
   *
   * @returns any The response will be a JSON object with a key called `node_pool`. The value
   * of this will be an object containing the standard attributes of a node pool.
   *
   * @throws ApiError
   */
  public kubernetesGetNodePool({
    clusterId,
    nodePoolId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * A unique ID that can be used to reference a Kubernetes node pool.
     */
    nodePoolId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
      path: {
        cluster_id: clusterId,
        node_pool_id: nodePoolId,
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
   * Update a Node Pool in a Kubernetes Cluster
   * To update the name of a node pool, edit the tags applied to it, or adjust its
   * number of nodes, send a PUT request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID` with the
   * following attributes.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesUpdateNodePool({
    clusterId,
    nodePoolId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * A unique ID that can be used to reference a Kubernetes node pool.
     */
    nodePoolId: string;
    requestBody: {
      /**
       * A unique ID that can be used to identify and reference a specific node pool.
       */
      readonly id?: string;
      /**
       * A human-readable name for the node pool.
       */
      name?: string;
      /**
       * The number of Droplet instances in the node pool.
       */
      count?: number;
      /**
       * An array containing the tags applied to the node pool. All node pools are automatically tagged `k8s`, `k8s-worker`, and `k8s:$K8S_CLUSTER_ID`.
       */
      tags?: Array<string>;
      /**
       * An object of key/value mappings specifying labels to apply to all nodes in a pool. Labels will automatically be applied to all existing nodes and any subsequent nodes added to the pool. Note that when a label is removed, it is not deleted from the nodes in the pool.
       */
      labels?: Record<string, any> | null;
      /**
       * An array of taints to apply to all nodes in a pool. Taints will automatically be applied to all existing nodes and any subsequent nodes added to the pool. When a taint is removed, it is deleted from all nodes in the pool.
       */
      taints?: Array<{
        /**
         * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
         */
        key?: string;
        /**
         * An arbitrary string. The `key` and `value` fields of the `taint` object form a key-value pair. For example, if the value of the `key` field is "special" and the value of the `value` field is "gpu", the key value pair would be `special=gpu`.
         */
        value?: string;
        /**
         * How the node reacts to pods that it won't tolerate. Available effect values are `NoSchedule`, `PreferNoSchedule`, and `NoExecute`.
         */
        effect?: "NoSchedule" | "PreferNoSchedule" | "NoExecute";
      }>;
      /**
       * A boolean value indicating whether auto-scaling is enabled for this node pool.
       */
      auto_scale?: boolean;
      /**
       * The minimum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
       */
      min_nodes?: number;
      /**
       * The maximum number of nodes that this node pool can be auto-scaled to. The value will be `0` if `auto_scale` is set to `false`.
       */
      max_nodes?: number;
      /**
       * An object specifying the details of a specific worker node in a node pool.
       */
      readonly nodes?: Array<{
        /**
         * A unique ID that can be used to identify and reference the node.
         */
        id?: string;
        /**
         * An automatically generated, human-readable name for the node.
         */
        name?: string;
        /**
         * An object containing a `state` attribute whose value is set to a string indicating the current status of the node.
         */
        status?: {
          /**
           * A string indicating the current status of the node.
           */
          state?: "provisioning" | "running" | "draining" | "deleting";
        };
        /**
         * The ID of the Droplet used for the worker node.
         */
        droplet_id?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the node was created.
         */
        created_at?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the node was last updated.
         */
        updated_at?: string;
      }>;
    } & {
      /**
       * A human-readable name for the node pool.
       */
      name: string;
      /**
       * The number of Droplet instances in the node pool.
       */
      count: number;
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
      method: "PUT",
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
      path: {
        cluster_id: clusterId,
        node_pool_id: nodePoolId,
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
   * Delete a Node Pool in a Kubernetes Cluster
   * To delete a node pool, send a DELETE request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID`.
   *
   * A 204 status code with no body will be returned in response to a successful
   * request. Nodes in the pool will subsequently be drained and deleted.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesDeleteNodePool({
    clusterId,
    nodePoolId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * A unique ID that can be used to reference a Kubernetes node pool.
     */
    nodePoolId: string;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}",
      path: {
        cluster_id: clusterId,
        node_pool_id: nodePoolId,
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
   * Delete a Node in a Kubernetes Cluster
   * To delete a single node in a pool, send a DELETE request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`.
   *
   * Appending the `skip_drain=1` query parameter to the request causes node
   * draining to be skipped. Omitting the query parameter or setting its value to
   * `0` carries out draining prior to deletion.
   *
   * Appending the `replace=1` query parameter to the request causes the node to
   * be replaced by a new one after deletion. Omitting the query parameter or
   * setting its value to `0` deletes without replacement.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public kubernetesDeleteNode({
    clusterId,
    nodePoolId,
    nodeId,
    skipDrain,
    replace,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * A unique ID that can be used to reference a Kubernetes node pool.
     */
    nodePoolId: string;
    /**
     * A unique ID that can be used to reference a node in a Kubernetes node pool.
     */
    nodeId: string;
    /**
     * Specifies whether or not to drain workloads from a node before it is deleted. Setting it to `1` causes node draining to be skipped. Omitting the query parameter or setting its value to `0` carries out draining prior to deletion.
     */
    skipDrain?: number;
    /**
     * Specifies whether or not to replace a node after it has been deleted. Setting it to `1` causes the node to be replaced by a new one after deletion. Omitting the query parameter or setting its value to `0` deletes without replacement.
     */
    replace?: number;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/nodes/{node_id}",
      path: {
        cluster_id: clusterId,
        node_pool_id: nodePoolId,
        node_id: nodeId,
      },
      query: {
        skip_drain: skipDrain,
        replace: replace,
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
   * @deprecated
   * Recycle a Kubernetes Node Pool
   * The endpoint has been deprecated. Please use the DELETE
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/node_pools/$NODE_POOL_ID/nodes/$NODE_ID`
   * method instead.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public kubernetesRecycleNodePool({
    clusterId,
    nodePoolId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * A unique ID that can be used to reference a Kubernetes node pool.
     */
    nodePoolId: string;
    requestBody: any;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/node_pools/{node_pool_id}/recycle",
      path: {
        cluster_id: clusterId,
        node_pool_id: nodePoolId,
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
   * Retrieve User Information for a Kubernetes Cluster
   * To show information the user associated with a Kubernetes cluster, send a GET
   * request to `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/user`.
   *
   * @returns any The response will be a JSON object with a key called `kubernetes_cluster_user`
   * containing the username and in-cluster groups that it belongs to.
   *
   * @throws ApiError
   */
  public kubernetesGetClusterUser({
    clusterId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
  }): CancelablePromise<{
    kubernetes_cluster_user?: {
      /**
       * The username for the cluster admin user.
       */
      username?: string;
      /**
       * A list of in-cluster groups that the user belongs to.
       */
      groups?: Array<string>;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/user",
      path: {
        cluster_id: clusterId,
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
   * List Available Regions, Node Sizes, and Versions of Kubernetes
   * To list the versions of Kubernetes available for use, the regions that support Kubernetes, and the available node sizes, send a GET request to `/v2/kubernetes/options`.
   * @returns any The response will be a JSON object with a key called `options` which contains
   * `regions`, `versions`, and `sizes` objects listing the available options and
   * the matching slugs for use when creating a new cluster.
   *
   * @throws ApiError
   */
  public kubernetesListOptions(): CancelablePromise<{
    options?: any;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/options",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Run Clusterlint Checks on a Kubernetes Cluster
   * Clusterlint helps operators conform to Kubernetes best practices around
   * resources, security and reliability to avoid common problems while operating
   * or upgrading the clusters.
   *
   * To request a clusterlint run on your cluster, send a POST request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. This will run all
   * checks present in the `doks` group by default, if a request body is not
   * specified. Optionally specify the below attributes.
   *
   * For information about the available checks, please refer to
   * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesRunClusterLint({
    clusterId,
    requestBody,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    requestBody?: {
      /**
       * An array of check groups that will be run when clusterlint executes checks.
       */
      include_groups?: Array<string>;
      /**
       * An array of checks that will be run when clusterlint executes checks.
       */
      include_checks?: Array<string>;
      /**
       * An array of check groups that will be omitted when clusterlint executes checks.
       */
      exclude_groups?: Array<string>;
      /**
       * An array of checks that will be run when clusterlint executes checks.
       */
      exclude_checks?: Array<string>;
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
      url: "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
      path: {
        cluster_id: clusterId,
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
   * Fetch Clusterlint Diagnostics for a Kubernetes Cluster
   * To request clusterlint diagnostics for your cluster, send a GET request to
   * `/v2/kubernetes/clusters/$K8S_CLUSTER_ID/clusterlint`. If the `run_id` query
   * parameter is provided, then the diagnostics for the specific run is fetched.
   * By default, the latest results are shown.
   *
   * To find out how to address clusterlint feedback, please refer to
   * [the clusterlint check documentation](https://github.com/digitalocean/clusterlint/blob/master/checks.md).
   *
   * @returns any The response is a JSON object which contains the diagnostics on Kubernetes
   * objects in the cluster. Each diagnostic will contain some metadata information
   * about the object and feedback for users to act upon.
   *
   * @throws ApiError
   */
  public kubernetesGetClusterLintResults({
    clusterId,
    runId,
  }: {
    /**
     * A unique ID that can be used to reference a Kubernetes cluster.
     */
    clusterId: string;
    /**
     * Specifies the clusterlint run whose results will be retrieved.
     */
    runId?: string;
  }): CancelablePromise<{
    /**
     * Id of the clusterlint run that can be used later to fetch the diagnostics.
     */
    run_id?: string;
    /**
     * A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was made.
     */
    requested_at?: string;
    /**
     * A time value given in ISO8601 combined date and time format that represents when the schedule clusterlint run request was completed.
     */
    completed_at?: string;
    /**
     * An array of diagnostics reporting potential problems for the given cluster.
     */
    diagnostics?: Array<{
      /**
       * The clusterlint check that resulted in the diagnostic.
       */
      check_name?: string;
      /**
       * Can be one of error, warning or suggestion.
       */
      severity?: string;
      /**
       * Feedback about the object for users to fix.
       */
      message?: string;
      /**
       * Metadata about the Kubernetes API object the diagnostic is reported on.
       */
      object?: {
        /**
         * Name of the object
         */
        name?: string;
        /**
         * The kind of Kubernetes API object
         */
        kind?: string;
        /**
         * The namespace the object resides in the cluster.
         */
        namespace?: string;
      };
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/kubernetes/clusters/{cluster_id}/clusterlint",
      path: {
        cluster_id: clusterId,
      },
      query: {
        run_id: runId,
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
   * Add Container Registry to Kubernetes Clusters
   * To integrate the container registry with Kubernetes clusters, send a POST request to `/v2/kubernetes/registry`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesAddRegistry({
    requestBody,
  }: {
    requestBody?: {
      /**
       * An array containing the UUIDs of Kubernetes clusters.
       */
      cluster_uuids?: Array<string>;
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
      url: "/v2/kubernetes/registry",
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
   * Remove Container Registry from Kubernetes Clusters
   * To remove the container registry from Kubernetes clusters, send a DELETE request to `/v2/kubernetes/registry`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public kubernetesRemoveRegistry({
    requestBody,
  }: {
    requestBody?: {
      /**
       * An array containing the UUIDs of Kubernetes clusters.
       */
      cluster_uuids?: Array<string>;
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
      url: "/v2/kubernetes/registry",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
