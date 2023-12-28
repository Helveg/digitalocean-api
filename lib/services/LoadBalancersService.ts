/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class LoadBalancersService extends ApiService {
  /**
   * Create a New Load Balancer
   * To create a new load balancer instance, send a POST request to
   * `/v2/load_balancers`.
   *
   * You can specify the Droplets that will sit behind the load balancer using one
   * of two methods:
   *
   * * Set `droplet_ids` to a list of specific Droplet IDs.
   * * Set `tag` to the name of a tag. All Droplets with this tag applied will be
   * assigned to the load balancer. Additional Droplets will be automatically
   * assigned as they are tagged.
   *
   * These methods are mutually exclusive.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersCreate({
    requestBody,
  }: {
    requestBody:
      | ({
          /**
           * An array containing the IDs of the Droplets assigned to the load balancer.
           */
          droplet_ids?: Array<number>;
        } & {
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region?:
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
            | "tor1";
        } & {
          /**
           * A unique ID that can be used to identify and reference a load balancer.
           */
          readonly id?: string;
          /**
           * A human-readable name for a load balancer instance.
           */
          name?: string;
          /**
           * The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.
           */
          project_id?: string;
          /**
           * An attribute containing the public-facing IP address of the load balancer.
           */
          readonly ip?: string;
          /**
           * How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.
           */
          size_unit?: number;
          /**
           * This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.
           * * `lb-small` = 1 node
           * * `lb-medium` = 3 nodes
           * * `lb-large` = 6 nodes
           *
           * You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.
           * @deprecated
           */
          size?: "lb-small" | "lb-medium" | "lb-large";
          /**
           * This field has been deprecated. You can no longer specify an algorithm for load balancers.
           * @deprecated
           */
          algorithm?: "round_robin" | "least_connections";
          /**
           * A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`.
           */
          readonly status?: "new" | "active" | "errored";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the load balancer was created.
           */
          readonly created_at?: string;
          /**
           * An array of objects specifying the forwarding rules for a load balancer.
           */
          forwarding_rules: Array<{
            /**
             * The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            entry_protocol:
              | "http"
              | "https"
              | "http2"
              | "http3"
              | "tcp"
              | "udp";
            /**
             * An integer representing the port on which the load balancer instance will listen.
             */
            entry_port: number;
            /**
             * The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
            /**
             * An integer representing the port on the backend Droplets to which the load balancer will send traffic.
             */
            target_port: number;
            /**
             * The ID of the TLS certificate used for SSL termination if enabled.
             */
            certificate_id?: string;
            /**
             * A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.
             */
            tls_passthrough?: boolean;
          }>;
          /**
           * An object specifying health check settings for the load balancer.
           */
          health_check?: {
            /**
             * The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.
             */
            protocol?: "http" | "https" | "tcp";
            /**
             * An integer representing the port on the backend Droplets on which the health check will attempt a connection.
             */
            port?: number;
            /**
             * The path on the backend Droplets to which the load balancer instance will send a request.
             */
            path?: string;
            /**
             * The number of seconds between between two consecutive health checks.
             */
            check_interval_seconds?: number;
            /**
             * The number of seconds the load balancer instance will wait for a response until marking a health check as failed.
             */
            response_timeout_seconds?: number;
            /**
             * The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.
             */
            unhealthy_threshold?: number;
            /**
             * The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.
             */
            healthy_threshold?: number;
          };
          /**
           * An object specifying sticky sessions settings for the load balancer.
           */
          sticky_sessions?: {
            /**
             * An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.
             */
            type?: "cookies" | "none";
            /**
             * The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_name?: string;
            /**
             * The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_ttl_seconds?: number;
          };
          /**
           * A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.
           */
          redirect_http_to_https?: boolean;
          /**
           * A boolean value indicating whether PROXY Protocol is in use.
           */
          enable_proxy_protocol?: boolean;
          /**
           * A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.
           */
          enable_backend_keepalive?: boolean;
          /**
           * An integer value which configures the idle timeout for HTTP requests to the target droplets.
           */
          http_idle_timeout_seconds?: number;
          /**
           * A string specifying the UUID of the VPC to which the load balancer is assigned.
           */
          vpc_uuid?: string;
          /**
           * A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.
           */
          disable_lets_encrypt_dns_records?: boolean;
          /**
           * An object specifying allow and deny rules to control traffic to the load balancer.
           */
          firewall?: {
            /**
             * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            deny?: Array<string>;
            /**
             * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            allow?: Array<string>;
          };
        } & {
          /**
           * An array containing the IDs of the Droplets assigned to the load balancer.
           */
          droplet_ids: Array<number>;
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region:
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
            | "tor1";
        })
      | ({
          /**
           * The name of a Droplet tag corresponding to Droplets assigned to the load balancer.
           */
          tag?: string;
        } & {
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region?:
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
            | "tor1";
        } & {
          /**
           * A unique ID that can be used to identify and reference a load balancer.
           */
          readonly id?: string;
          /**
           * A human-readable name for a load balancer instance.
           */
          name?: string;
          /**
           * The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.
           */
          project_id?: string;
          /**
           * An attribute containing the public-facing IP address of the load balancer.
           */
          readonly ip?: string;
          /**
           * How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.
           */
          size_unit?: number;
          /**
           * This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.
           * * `lb-small` = 1 node
           * * `lb-medium` = 3 nodes
           * * `lb-large` = 6 nodes
           *
           * You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.
           * @deprecated
           */
          size?: "lb-small" | "lb-medium" | "lb-large";
          /**
           * This field has been deprecated. You can no longer specify an algorithm for load balancers.
           * @deprecated
           */
          algorithm?: "round_robin" | "least_connections";
          /**
           * A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`.
           */
          readonly status?: "new" | "active" | "errored";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the load balancer was created.
           */
          readonly created_at?: string;
          /**
           * An array of objects specifying the forwarding rules for a load balancer.
           */
          forwarding_rules: Array<{
            /**
             * The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            entry_protocol:
              | "http"
              | "https"
              | "http2"
              | "http3"
              | "tcp"
              | "udp";
            /**
             * An integer representing the port on which the load balancer instance will listen.
             */
            entry_port: number;
            /**
             * The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
            /**
             * An integer representing the port on the backend Droplets to which the load balancer will send traffic.
             */
            target_port: number;
            /**
             * The ID of the TLS certificate used for SSL termination if enabled.
             */
            certificate_id?: string;
            /**
             * A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.
             */
            tls_passthrough?: boolean;
          }>;
          /**
           * An object specifying health check settings for the load balancer.
           */
          health_check?: {
            /**
             * The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.
             */
            protocol?: "http" | "https" | "tcp";
            /**
             * An integer representing the port on the backend Droplets on which the health check will attempt a connection.
             */
            port?: number;
            /**
             * The path on the backend Droplets to which the load balancer instance will send a request.
             */
            path?: string;
            /**
             * The number of seconds between between two consecutive health checks.
             */
            check_interval_seconds?: number;
            /**
             * The number of seconds the load balancer instance will wait for a response until marking a health check as failed.
             */
            response_timeout_seconds?: number;
            /**
             * The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.
             */
            unhealthy_threshold?: number;
            /**
             * The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.
             */
            healthy_threshold?: number;
          };
          /**
           * An object specifying sticky sessions settings for the load balancer.
           */
          sticky_sessions?: {
            /**
             * An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.
             */
            type?: "cookies" | "none";
            /**
             * The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_name?: string;
            /**
             * The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_ttl_seconds?: number;
          };
          /**
           * A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.
           */
          redirect_http_to_https?: boolean;
          /**
           * A boolean value indicating whether PROXY Protocol is in use.
           */
          enable_proxy_protocol?: boolean;
          /**
           * A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.
           */
          enable_backend_keepalive?: boolean;
          /**
           * An integer value which configures the idle timeout for HTTP requests to the target droplets.
           */
          http_idle_timeout_seconds?: number;
          /**
           * A string specifying the UUID of the VPC to which the load balancer is assigned.
           */
          vpc_uuid?: string;
          /**
           * A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.
           */
          disable_lets_encrypt_dns_records?: boolean;
          /**
           * An object specifying allow and deny rules to control traffic to the load balancer.
           */
          firewall?: {
            /**
             * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            deny?: Array<string>;
            /**
             * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            allow?: Array<string>;
          };
        } & {
          /**
           * The name of a Droplet tag corresponding to Droplets assigned to the load balancer.
           */
          tag: string;
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region:
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
            | "tor1";
        });
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
      url: "/v2/load_balancers",
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
   * List All Load Balancers
   * To list all of the load balancer instances on your account, send a GET request
   * to `/v2/load_balancers`.
   *
   * @returns any A JSON object with a key of `load_balancers`. This will be set to an array of objects, each of which will contain the standard load balancer attributes.
   * @throws ApiError
   */
  public loadBalancersList({
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
      load_balancers?: Array<
        {
          /**
           * A unique ID that can be used to identify and reference a load balancer.
           */
          readonly id?: string;
          /**
           * A human-readable name for a load balancer instance.
           */
          name?: string;
          /**
           * The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.
           */
          project_id?: string;
          /**
           * An attribute containing the public-facing IP address of the load balancer.
           */
          readonly ip?: string;
          /**
           * How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.
           */
          size_unit?: number;
          /**
           * This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.
           * * `lb-small` = 1 node
           * * `lb-medium` = 3 nodes
           * * `lb-large` = 6 nodes
           *
           * You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.
           * @deprecated
           */
          size?: "lb-small" | "lb-medium" | "lb-large";
          /**
           * This field has been deprecated. You can no longer specify an algorithm for load balancers.
           * @deprecated
           */
          algorithm?: "round_robin" | "least_connections";
          /**
           * A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`.
           */
          readonly status?: "new" | "active" | "errored";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the load balancer was created.
           */
          readonly created_at?: string;
          /**
           * An array of objects specifying the forwarding rules for a load balancer.
           */
          forwarding_rules: Array<{
            /**
             * The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            entry_protocol:
              | "http"
              | "https"
              | "http2"
              | "http3"
              | "tcp"
              | "udp";
            /**
             * An integer representing the port on which the load balancer instance will listen.
             */
            entry_port: number;
            /**
             * The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
            /**
             * An integer representing the port on the backend Droplets to which the load balancer will send traffic.
             */
            target_port: number;
            /**
             * The ID of the TLS certificate used for SSL termination if enabled.
             */
            certificate_id?: string;
            /**
             * A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.
             */
            tls_passthrough?: boolean;
          }>;
          /**
           * An object specifying health check settings for the load balancer.
           */
          health_check?: {
            /**
             * The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.
             */
            protocol?: "http" | "https" | "tcp";
            /**
             * An integer representing the port on the backend Droplets on which the health check will attempt a connection.
             */
            port?: number;
            /**
             * The path on the backend Droplets to which the load balancer instance will send a request.
             */
            path?: string;
            /**
             * The number of seconds between between two consecutive health checks.
             */
            check_interval_seconds?: number;
            /**
             * The number of seconds the load balancer instance will wait for a response until marking a health check as failed.
             */
            response_timeout_seconds?: number;
            /**
             * The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.
             */
            unhealthy_threshold?: number;
            /**
             * The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.
             */
            healthy_threshold?: number;
          };
          /**
           * An object specifying sticky sessions settings for the load balancer.
           */
          sticky_sessions?: {
            /**
             * An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.
             */
            type?: "cookies" | "none";
            /**
             * The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_name?: string;
            /**
             * The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_ttl_seconds?: number;
          };
          /**
           * A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.
           */
          redirect_http_to_https?: boolean;
          /**
           * A boolean value indicating whether PROXY Protocol is in use.
           */
          enable_proxy_protocol?: boolean;
          /**
           * A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.
           */
          enable_backend_keepalive?: boolean;
          /**
           * An integer value which configures the idle timeout for HTTP requests to the target droplets.
           */
          http_idle_timeout_seconds?: number;
          /**
           * A string specifying the UUID of the VPC to which the load balancer is assigned.
           */
          vpc_uuid?: string;
          /**
           * A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.
           */
          disable_lets_encrypt_dns_records?: boolean;
          /**
           * An object specifying allow and deny rules to control traffic to the load balancer.
           */
          firewall?: {
            /**
             * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            deny?: Array<string>;
            /**
             * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            allow?: Array<string>;
          };
        } & {
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
          };
        } & {
          /**
           * An array containing the IDs of the Droplets assigned to the load balancer.
           */
          droplet_ids?: Array<number>;
        } & {
          /**
           * The name of a Droplet tag corresponding to Droplets assigned to the load balancer.
           */
          tag?: string;
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
      url: "/v2/load_balancers",
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
   * Retrieve an Existing Load Balancer
   * To show information about a load balancer instance, send a GET request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   *
   * @returns any The response will be a JSON object with a key called `load_balancer`. The
   * value of this will be an object that contains the standard attributes
   * associated with a load balancer
   *
   * @throws ApiError
   */
  public loadBalancersGet({
    lbId,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/load_balancers/{lb_id}",
      path: {
        lb_id: lbId,
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
   * Update a Load Balancer
   * To update a load balancer's settings, send a PUT request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`. The request should contain a full
   * representation of the load balancer including existing attributes. It may
   * contain _one of_ the `droplets_ids` or `tag` attributes as they are mutually
   * exclusive. **Note that any attribute that is not provided will be reset to its
   * default value.**
   *
   * @returns any The response will be a JSON object with a key called `load_balancer`. The
   * value of this will be an object containing the standard attributes of a
   * load balancer.
   *
   * @throws ApiError
   */
  public loadBalancersUpdate({
    lbId,
    requestBody,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
    requestBody:
      | ({
          /**
           * An array containing the IDs of the Droplets assigned to the load balancer.
           */
          droplet_ids?: Array<number>;
        } & {
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region?:
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
            | "tor1";
        } & {
          /**
           * A unique ID that can be used to identify and reference a load balancer.
           */
          readonly id?: string;
          /**
           * A human-readable name for a load balancer instance.
           */
          name?: string;
          /**
           * The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.
           */
          project_id?: string;
          /**
           * An attribute containing the public-facing IP address of the load balancer.
           */
          readonly ip?: string;
          /**
           * How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.
           */
          size_unit?: number;
          /**
           * This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.
           * * `lb-small` = 1 node
           * * `lb-medium` = 3 nodes
           * * `lb-large` = 6 nodes
           *
           * You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.
           * @deprecated
           */
          size?: "lb-small" | "lb-medium" | "lb-large";
          /**
           * This field has been deprecated. You can no longer specify an algorithm for load balancers.
           * @deprecated
           */
          algorithm?: "round_robin" | "least_connections";
          /**
           * A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`.
           */
          readonly status?: "new" | "active" | "errored";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the load balancer was created.
           */
          readonly created_at?: string;
          /**
           * An array of objects specifying the forwarding rules for a load balancer.
           */
          forwarding_rules: Array<{
            /**
             * The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            entry_protocol:
              | "http"
              | "https"
              | "http2"
              | "http3"
              | "tcp"
              | "udp";
            /**
             * An integer representing the port on which the load balancer instance will listen.
             */
            entry_port: number;
            /**
             * The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
            /**
             * An integer representing the port on the backend Droplets to which the load balancer will send traffic.
             */
            target_port: number;
            /**
             * The ID of the TLS certificate used for SSL termination if enabled.
             */
            certificate_id?: string;
            /**
             * A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.
             */
            tls_passthrough?: boolean;
          }>;
          /**
           * An object specifying health check settings for the load balancer.
           */
          health_check?: {
            /**
             * The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.
             */
            protocol?: "http" | "https" | "tcp";
            /**
             * An integer representing the port on the backend Droplets on which the health check will attempt a connection.
             */
            port?: number;
            /**
             * The path on the backend Droplets to which the load balancer instance will send a request.
             */
            path?: string;
            /**
             * The number of seconds between between two consecutive health checks.
             */
            check_interval_seconds?: number;
            /**
             * The number of seconds the load balancer instance will wait for a response until marking a health check as failed.
             */
            response_timeout_seconds?: number;
            /**
             * The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.
             */
            unhealthy_threshold?: number;
            /**
             * The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.
             */
            healthy_threshold?: number;
          };
          /**
           * An object specifying sticky sessions settings for the load balancer.
           */
          sticky_sessions?: {
            /**
             * An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.
             */
            type?: "cookies" | "none";
            /**
             * The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_name?: string;
            /**
             * The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_ttl_seconds?: number;
          };
          /**
           * A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.
           */
          redirect_http_to_https?: boolean;
          /**
           * A boolean value indicating whether PROXY Protocol is in use.
           */
          enable_proxy_protocol?: boolean;
          /**
           * A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.
           */
          enable_backend_keepalive?: boolean;
          /**
           * An integer value which configures the idle timeout for HTTP requests to the target droplets.
           */
          http_idle_timeout_seconds?: number;
          /**
           * A string specifying the UUID of the VPC to which the load balancer is assigned.
           */
          vpc_uuid?: string;
          /**
           * A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.
           */
          disable_lets_encrypt_dns_records?: boolean;
          /**
           * An object specifying allow and deny rules to control traffic to the load balancer.
           */
          firewall?: {
            /**
             * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            deny?: Array<string>;
            /**
             * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            allow?: Array<string>;
          };
        } & {
          /**
           * An array containing the IDs of the Droplets assigned to the load balancer.
           */
          droplet_ids: Array<number>;
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region:
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
            | "tor1";
        })
      | ({
          /**
           * The name of a Droplet tag corresponding to Droplets assigned to the load balancer.
           */
          tag?: string;
        } & {
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region?:
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
            | "tor1";
        } & {
          /**
           * A unique ID that can be used to identify and reference a load balancer.
           */
          readonly id?: string;
          /**
           * A human-readable name for a load balancer instance.
           */
          name?: string;
          /**
           * The ID of the project that the load balancer is associated with. If no ID is provided at creation, the load balancer associates with the user's default project. If an invalid project ID is provided, the load balancer will not be created.
           */
          project_id?: string;
          /**
           * An attribute containing the public-facing IP address of the load balancer.
           */
          readonly ip?: string;
          /**
           * How many nodes the load balancer contains. Each additional node increases the load balancer's ability to manage more connections. Load balancers can be scaled up or down, and you can change the number of nodes after creation up to once per hour. This field is currently not available in the AMS2, NYC2, or SFO1 regions. Use the `size` field to scale load balancers that reside in these regions.
           */
          size_unit?: number;
          /**
           * This field has been replaced by the `size_unit` field for all regions except in AMS2, NYC2, and SFO1. Each available load balancer size now equates to the load balancer having a set number of nodes.
           * * `lb-small` = 1 node
           * * `lb-medium` = 3 nodes
           * * `lb-large` = 6 nodes
           *
           * You can resize load balancers after creation up to once per hour. You cannot resize a load balancer within the first hour of its creation.
           * @deprecated
           */
          size?: "lb-small" | "lb-medium" | "lb-large";
          /**
           * This field has been deprecated. You can no longer specify an algorithm for load balancers.
           * @deprecated
           */
          algorithm?: "round_robin" | "least_connections";
          /**
           * A status string indicating the current state of the load balancer. This can be `new`, `active`, or `errored`.
           */
          readonly status?: "new" | "active" | "errored";
          /**
           * A time value given in ISO8601 combined date and time format that represents when the load balancer was created.
           */
          readonly created_at?: string;
          /**
           * An array of objects specifying the forwarding rules for a load balancer.
           */
          forwarding_rules: Array<{
            /**
             * The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            entry_protocol:
              | "http"
              | "https"
              | "http2"
              | "http3"
              | "tcp"
              | "udp";
            /**
             * An integer representing the port on which the load balancer instance will listen.
             */
            entry_port: number;
            /**
             * The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.
             *
             */
            target_protocol: "http" | "https" | "http2" | "tcp" | "udp";
            /**
             * An integer representing the port on the backend Droplets to which the load balancer will send traffic.
             */
            target_port: number;
            /**
             * The ID of the TLS certificate used for SSL termination if enabled.
             */
            certificate_id?: string;
            /**
             * A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.
             */
            tls_passthrough?: boolean;
          }>;
          /**
           * An object specifying health check settings for the load balancer.
           */
          health_check?: {
            /**
             * The protocol used for health checks sent to the backend Droplets. The possible values are `http`, `https`, or `tcp`.
             */
            protocol?: "http" | "https" | "tcp";
            /**
             * An integer representing the port on the backend Droplets on which the health check will attempt a connection.
             */
            port?: number;
            /**
             * The path on the backend Droplets to which the load balancer instance will send a request.
             */
            path?: string;
            /**
             * The number of seconds between between two consecutive health checks.
             */
            check_interval_seconds?: number;
            /**
             * The number of seconds the load balancer instance will wait for a response until marking a health check as failed.
             */
            response_timeout_seconds?: number;
            /**
             * The number of times a health check must fail for a backend Droplet to be marked "unhealthy" and be removed from the pool.
             */
            unhealthy_threshold?: number;
            /**
             * The number of times a health check must pass for a backend Droplet to be marked "healthy" and be re-added to the pool.
             */
            healthy_threshold?: number;
          };
          /**
           * An object specifying sticky sessions settings for the load balancer.
           */
          sticky_sessions?: {
            /**
             * An attribute indicating how and if requests from a client will be persistently served by the same backend Droplet. The possible values are `cookies` or `none`.
             */
            type?: "cookies" | "none";
            /**
             * The name of the cookie sent to the client. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_name?: string;
            /**
             * The number of seconds until the cookie set by the load balancer expires. This attribute is only returned when using `cookies` for the sticky sessions type.
             */
            cookie_ttl_seconds?: number;
          };
          /**
           * A boolean value indicating whether HTTP requests to the load balancer on port 80 will be redirected to HTTPS on port 443.
           */
          redirect_http_to_https?: boolean;
          /**
           * A boolean value indicating whether PROXY Protocol is in use.
           */
          enable_proxy_protocol?: boolean;
          /**
           * A boolean value indicating whether HTTP keepalive connections are maintained to target Droplets.
           */
          enable_backend_keepalive?: boolean;
          /**
           * An integer value which configures the idle timeout for HTTP requests to the target droplets.
           */
          http_idle_timeout_seconds?: number;
          /**
           * A string specifying the UUID of the VPC to which the load balancer is assigned.
           */
          vpc_uuid?: string;
          /**
           * A boolean value indicating whether to disable automatic DNS record creation for Let's Encrypt certificates that are added to the load balancer.
           */
          disable_lets_encrypt_dns_records?: boolean;
          /**
           * An object specifying allow and deny rules to control traffic to the load balancer.
           */
          firewall?: {
            /**
             * the rules for denying traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            deny?: Array<string>;
            /**
             * the rules for allowing traffic to the load balancer (in the form 'ip:1.2.3.4' or 'cidr:1.2.0.0/16')
             */
            allow?: Array<string>;
          };
        } & {
          /**
           * The name of a Droplet tag corresponding to Droplets assigned to the load balancer.
           */
          tag: string;
          /**
           * The slug identifier for the region where the resource will initially be  available.
           */
          region:
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
            | "tor1";
        });
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/load_balancers/{lb_id}",
      path: {
        lb_id: lbId,
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
   * Delete a Load Balancer
   * To delete a load balancer instance, disassociating any Droplets assigned to it
   * and removing it from your account, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersDelete({
    lbId,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
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
      url: "/v2/load_balancers/{lb_id}",
      path: {
        lb_id: lbId,
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
   * Add Droplets to a Load Balancer
   * To assign a Droplet to a load balancer instance, send a POST request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   * Individual Droplets can not be added to a load balancer configured with a
   * Droplet tag. Attempting to do so will result in a "422 Unprocessable Entity"
   * response from the API.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersAddDroplets({
    lbId,
    requestBody,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
    requestBody: any;
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
      url: "/v2/load_balancers/{lb_id}/droplets",
      path: {
        lb_id: lbId,
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
   * Remove Droplets from a Load Balancer
   * To remove a Droplet from a load balancer instance, send a DELETE request to
   * `/v2/load_balancers/$LOAD_BALANCER_ID/droplets`. In the body of the request,
   * there should be a `droplet_ids` attribute containing a list of Droplet IDs.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersRemoveDroplets({
    lbId,
    requestBody,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
    requestBody: any;
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
      url: "/v2/load_balancers/{lb_id}/droplets",
      path: {
        lb_id: lbId,
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
   * Add Forwarding Rules to a Load Balancer
   * To add an additional forwarding rule to a load balancer instance, send a POST
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the body
   * of the request, there should be a `forwarding_rules` attribute containing an
   * array of rules to be added.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersAddForwardingRules({
    lbId,
    requestBody,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
    requestBody: any;
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
      url: "/v2/load_balancers/{lb_id}/forwarding_rules",
      path: {
        lb_id: lbId,
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
   * Remove Forwarding Rules from a Load Balancer
   * To remove forwarding rules from a load balancer instance, send a DELETE
   * request to `/v2/load_balancers/$LOAD_BALANCER_ID/forwarding_rules`. In the
   * body of the request, there should be a `forwarding_rules` attribute containing
   * an array of rules to be removed.
   *
   * No response body will be sent back, but the response code will indicate
   * success. Specifically, the response code will be a 204, which means that the
   * action was successful with no returned body data.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public loadBalancersRemoveForwardingRules({
    lbId,
    requestBody,
  }: {
    /**
     * A unique identifier for a load balancer.
     */
    lbId: string;
    requestBody: any;
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
      url: "/v2/load_balancers/{lb_id}/forwarding_rules",
      path: {
        lb_id: lbId,
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
