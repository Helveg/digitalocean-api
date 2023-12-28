/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class DatabasesService extends ApiService {
  /**
   * List Database Options
   * To list all of the options available for the offered database engines, send a GET request to `/v2/databases/options`.
   * The result will be a JSON object with an `options` key.
   * @returns any A JSON string with a key of `options`.
   * @throws ApiError
   */
  public databasesListOptions(): CancelablePromise<{
    options?: {
      kafka?: {
        /**
         * An array of strings containing the names of available regions
         */
        readonly regions?: Array<string>;
      } & {
        /**
         * An array of strings containing the names of available regions
         */
        readonly versions?: Array<string>;
      } & {
        /**
         * An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order).
         */
        readonly layouts?: Array<{
          num_nodes?: number;
          /**
           * An array of objects containing the slugs available with various node counts
           */
          readonly sizes?: Array<string>;
        }>;
      };
      mongodb?: {
        /**
         * An array of strings containing the names of available regions
         */
        readonly regions?: Array<string>;
      } & {
        /**
         * An array of strings containing the names of available regions
         */
        readonly versions?: Array<string>;
      } & {
        /**
         * An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order).
         */
        readonly layouts?: Array<{
          num_nodes?: number;
          /**
           * An array of objects containing the slugs available with various node counts
           */
          readonly sizes?: Array<string>;
        }>;
      };
      pg?: {
        /**
         * An array of strings containing the names of available regions
         */
        readonly regions?: Array<string>;
      } & {
        /**
         * An array of strings containing the names of available regions
         */
        readonly versions?: Array<string>;
      } & {
        /**
         * An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order).
         */
        readonly layouts?: Array<{
          num_nodes?: number;
          /**
           * An array of objects containing the slugs available with various node counts
           */
          readonly sizes?: Array<string>;
        }>;
      };
      mysql?: {
        /**
         * An array of strings containing the names of available regions
         */
        readonly regions?: Array<string>;
      } & {
        /**
         * An array of strings containing the names of available regions
         */
        readonly versions?: Array<string>;
      } & {
        /**
         * An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order).
         */
        readonly layouts?: Array<{
          num_nodes?: number;
          /**
           * An array of objects containing the slugs available with various node counts
           */
          readonly sizes?: Array<string>;
        }>;
      };
      redis?: {
        /**
         * An array of strings containing the names of available regions
         */
        readonly regions?: Array<string>;
      } & {
        /**
         * An array of strings containing the names of available regions
         */
        readonly versions?: Array<string>;
      } & {
        /**
         * An array of objects, each indicating the node sizes (otherwise referred to as slugs) that are available with various numbers of nodes in the database cluster. Each slugs denotes the node's identifier, CPU, and RAM (in that order).
         */
        readonly layouts?: Array<{
          num_nodes?: number;
          /**
           * An array of objects containing the slugs available with various node counts
           */
          readonly sizes?: Array<string>;
        }>;
      };
    };
    version_availability?: {
      /**
       * An array of objects, each indicating the version end-of-life, end-of-availability for various database engines
       */
      kafka?: Array<{
        /**
         * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
         */
        end_of_life?: string | null;
        /**
         * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
         */
        end_of_availability?: string | null;
        /**
         * The engine version.
         */
        version?: string;
      }>;
      /**
       * An array of objects, each indicating the version end-of-life, end-of-availability for various database engines
       */
      pg?: Array<{
        /**
         * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
         */
        end_of_life?: string | null;
        /**
         * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
         */
        end_of_availability?: string | null;
        /**
         * The engine version.
         */
        version?: string;
      }>;
      /**
       * An array of objects, each indicating the version end-of-life, end-of-availability for various database engines
       */
      mysql?: Array<{
        /**
         * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
         */
        end_of_life?: string | null;
        /**
         * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
         */
        end_of_availability?: string | null;
        /**
         * The engine version.
         */
        version?: string;
      }>;
      /**
       * An array of objects, each indicating the version end-of-life, end-of-availability for various database engines
       */
      redis?: Array<{
        /**
         * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
         */
        end_of_life?: string | null;
        /**
         * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
         */
        end_of_availability?: string | null;
        /**
         * The engine version.
         */
        version?: string;
      }>;
      /**
       * An array of objects, each indicating the version end-of-life, end-of-availability for various database engines
       */
      mongodb?: Array<{
        /**
         * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
         */
        end_of_life?: string | null;
        /**
         * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
         */
        end_of_availability?: string | null;
        /**
         * The engine version.
         */
        version?: string;
      }>;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/options",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List All Database Clusters
   * To list all of the database clusters available on your account, send a GET request to `/v2/databases`. To limit the results to database clusters with a specific tag, include the `tag_name` query parameter set to the name of the tag. For example, `/v2/databases?tag_name=$TAG_NAME`.
   * The result will be a JSON object with a `databases` key. This will be set to an array of database objects, each of which will contain the standard database attributes.
   * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster:
   * The embedded `maintenance_window` object will contain information about any scheduled maintenance for the database cluster.
   * @returns any A JSON object with a key of `databases`.
   * @throws ApiError
   */
  public databasesListClusters({
    tagName,
  }: {
    /**
     * Limits the results to database clusters with a specific tag.
     */
    tagName?: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases",
      query: {
        tag_name: tagName,
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
   * Create a New Database Cluster
   * To create a database cluster, send a POST request to `/v2/databases`.
   * The response will be a JSON object with a key called `database`. The value of this will be an object that contains the standard attributes associated with a database cluster. The initial value of the database cluster's `status` attribute will be `creating`. When the cluster is ready to receive traffic, this will transition to `online`.
   * The embedded `connection` and `private_connection` objects will contain the information needed to access the database cluster.
   * DigitalOcean managed PostgreSQL and MySQL database clusters take automated daily backups. To create a new database cluster based on a backup of an existing cluster, send a POST request to `/v2/databases`. In addition to the standard database cluster attributes, the JSON body must include a key named `backup_restore` with the name of the original database cluster and the timestamp of the backup to be restored. Creating a database from a backup is the same as forking a database in the control panel.
   * Note: Backups are not supported for Redis clusters.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesCreateCluster({
    requestBody,
  }: {
    requestBody: {
      /**
       * A unique ID that can be used to identify and reference a database cluster.
       */
      readonly id?: string;
      /**
       * A unique, human-readable name referring to a database cluster.
       */
      name: string;
      /**
       * A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Redis, "mongodb" for MongoDB, and "kafka" for Kafka.
       */
      engine: "pg" | "mysql" | "redis" | "mongodb" | "kafka";
      /**
       * A string representing the version of the database engine in use for the cluster.
       */
      version?: string;
      /**
       * A string representing the semantic version of the database engine in use for the cluster.
       */
      readonly semantic_version?: string;
      /**
       * The number of nodes in the database cluster.
       */
      num_nodes: number;
      /**
       * The slug identifier representing the size of the nodes in the database cluster.
       */
      size: string;
      /**
       * The slug identifier for the region where the database cluster is located.
       */
      region: string;
      /**
       * A string representing the current status of the database cluster.
       */
      readonly status?:
        | "creating"
        | "online"
        | "resizing"
        | "migrating"
        | "forking";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the database cluster was created.
       */
      readonly created_at?: string;
      /**
       * A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region.
       */
      private_network_uuid?: string;
      /**
       * An array of tags that have been applied to the database cluster.
       */
      tags?: Array<string> | null;
      /**
       * An array of strings containing the names of databases created in the database cluster.
       */
      readonly db_names?: Array<string> | null;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      readonly users?: Array<{
        /**
         * The name of a database user.
         */
        name: string;
        /**
         * A string representing the database user's role. The value will be either
         * "primary" or "normal".
         *
         */
        readonly role?: "primary" | "normal";
        /**
         * A randomly generated password for the database user.
         */
        readonly password?: string;
        /**
         * Access certificate for TLS client authentication. (Kafka only)
         */
        readonly access_cert?: string;
        /**
         * Access key for TLS client authentication. (Kafka only)
         */
        readonly access_key?: string;
        mysql_settings?: {
          /**
           * A string specifying the authentication method to be used for connections
           * to the MySQL user account. The valid values are `mysql_native_password`
           * or `caching_sha2_password`. If excluded when creating a new user, the
           * default for the version of MySQL in use will be used. As of MySQL 8.0, the
           * default is `caching_sha2_password`.
           *
           */
          auth_plugin: "mysql_native_password" | "caching_sha2_password";
        };
        settings?: {
          /**
           * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
           */
          acl?: Array<{
            /**
             * An identifier for the ACL. Will be computed after the ACL is created/updated.
             */
            id?: string;
            /**
             * A regex for matching the topic(s) that this ACL should apply to.
             */
            topic: string;
            /**
             * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
             */
            permission: "admin" | "consume" | "produce" | "produceconsume";
          }>;
        };
      }> | null;
      maintenance_window?: {
        /**
         * The day of the week on which to apply maintenance updates.
         */
        day: string;
        /**
         * The hour in UTC at which maintenance updates will be applied in 24 hour format.
         */
        hour: string;
        /**
         * A boolean value indicating whether any maintenance is scheduled to be performed in the next window.
         */
        readonly pending?: boolean;
        /**
         * A list of strings, each containing information about a pending maintenance update.
         */
        readonly description?: Array<string>;
      } | null;
      /**
       * The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.
       */
      project_id?: string;
      rules?: Array<{
        /**
         * A unique ID for the firewall rule itself.
         */
        uuid?: string;
        /**
         * A unique ID for the database cluster to which the rule is applied.
         */
        cluster_uuid?: string;
        /**
         * The type of resource that the firewall rule allows to access the database cluster.
         */
        type: "droplet" | "k8s" | "ip_addr" | "tag" | "app";
        /**
         * The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster.
         */
        value: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the firewall rule was created.
         */
        readonly created_at?: string;
      }>;
      /**
       * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
       */
      readonly version_end_of_life?: string;
      /**
       * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
       */
      readonly version_end_of_availability?: string;
      /**
       * Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
       */
      storage_size_mib?: number;
    } & {
      backup_restore?: {
        /**
         * The name of an existing database cluster from which the backup will be restored.
         */
        database_name: string;
        /**
         * The timestamp of an existing database cluster backup in ISO8601 combined date and time format. The most recent backup will be used if excluded.
         */
        backup_created_at?: string;
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
      url: "/v2/databases",
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
   * Retrieve an Existing Database Cluster
   * To show information about an existing database cluster, send a GET request to `/v2/databases/$DATABASE_ID`.
   * The response will be a JSON object with a database key. This will be set to an object containing the standard database cluster attributes.
   * The embedded connection and private_connection objects will contain the information needed to access the database cluster.
   * The embedded maintenance_window object will contain information about any scheduled maintenance for the database cluster.
   * @returns any A JSON object with a key of `database`.
   * @throws ApiError
   */
  public databasesGetCluster({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    database: {
      /**
       * A unique ID that can be used to identify and reference a database cluster.
       */
      readonly id?: string;
      /**
       * A unique, human-readable name referring to a database cluster.
       */
      name: string;
      /**
       * A slug representing the database engine used for the cluster. The possible values are: "pg" for PostgreSQL, "mysql" for MySQL, "redis" for Redis, "mongodb" for MongoDB, and "kafka" for Kafka.
       */
      engine: "pg" | "mysql" | "redis" | "mongodb" | "kafka";
      /**
       * A string representing the version of the database engine in use for the cluster.
       */
      version?: string;
      /**
       * A string representing the semantic version of the database engine in use for the cluster.
       */
      readonly semantic_version?: string;
      /**
       * The number of nodes in the database cluster.
       */
      num_nodes: number;
      /**
       * The slug identifier representing the size of the nodes in the database cluster.
       */
      size: string;
      /**
       * The slug identifier for the region where the database cluster is located.
       */
      region: string;
      /**
       * A string representing the current status of the database cluster.
       */
      readonly status?:
        | "creating"
        | "online"
        | "resizing"
        | "migrating"
        | "forking";
      /**
       * A time value given in ISO8601 combined date and time format that represents when the database cluster was created.
       */
      readonly created_at?: string;
      /**
       * A string specifying the UUID of the VPC to which the database cluster will be assigned. If excluded, the cluster when creating a new database cluster, it will be assigned to your account's default VPC for the region.
       */
      private_network_uuid?: string;
      /**
       * An array of tags that have been applied to the database cluster.
       */
      tags?: Array<string> | null;
      /**
       * An array of strings containing the names of databases created in the database cluster.
       */
      readonly db_names?: Array<string> | null;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      readonly users?: Array<{
        /**
         * The name of a database user.
         */
        name: string;
        /**
         * A string representing the database user's role. The value will be either
         * "primary" or "normal".
         *
         */
        readonly role?: "primary" | "normal";
        /**
         * A randomly generated password for the database user.
         */
        readonly password?: string;
        /**
         * Access certificate for TLS client authentication. (Kafka only)
         */
        readonly access_cert?: string;
        /**
         * Access key for TLS client authentication. (Kafka only)
         */
        readonly access_key?: string;
        mysql_settings?: {
          /**
           * A string specifying the authentication method to be used for connections
           * to the MySQL user account. The valid values are `mysql_native_password`
           * or `caching_sha2_password`. If excluded when creating a new user, the
           * default for the version of MySQL in use will be used. As of MySQL 8.0, the
           * default is `caching_sha2_password`.
           *
           */
          auth_plugin: "mysql_native_password" | "caching_sha2_password";
        };
        settings?: {
          /**
           * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
           */
          acl?: Array<{
            /**
             * An identifier for the ACL. Will be computed after the ACL is created/updated.
             */
            id?: string;
            /**
             * A regex for matching the topic(s) that this ACL should apply to.
             */
            topic: string;
            /**
             * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
             */
            permission: "admin" | "consume" | "produce" | "produceconsume";
          }>;
        };
      }> | null;
      maintenance_window?: {
        /**
         * The day of the week on which to apply maintenance updates.
         */
        day: string;
        /**
         * The hour in UTC at which maintenance updates will be applied in 24 hour format.
         */
        hour: string;
        /**
         * A boolean value indicating whether any maintenance is scheduled to be performed in the next window.
         */
        readonly pending?: boolean;
        /**
         * A list of strings, each containing information about a pending maintenance update.
         */
        readonly description?: Array<string>;
      } | null;
      /**
       * The ID of the project that the database cluster is assigned to. If excluded when creating a new database cluster, it will be assigned to your default project.
       */
      project_id?: string;
      rules?: Array<{
        /**
         * A unique ID for the firewall rule itself.
         */
        uuid?: string;
        /**
         * A unique ID for the database cluster to which the rule is applied.
         */
        cluster_uuid?: string;
        /**
         * The type of resource that the firewall rule allows to access the database cluster.
         */
        type: "droplet" | "k8s" | "ip_addr" | "tag" | "app";
        /**
         * The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster.
         */
        value: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the firewall rule was created.
         */
        readonly created_at?: string;
      }>;
      /**
       * A timestamp referring to the date when the particular version will no longer be supported. If null, the version does not have an end of life timeline.
       */
      readonly version_end_of_life?: string;
      /**
       * A timestamp referring to the date when the particular version will no longer be available for creating new clusters. If null, the version does not have an end of availability timeline.
       */
      readonly version_end_of_availability?: string;
      /**
       * Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
       */
      storage_size_mib?: number;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Destroy a Database Cluster
   * To destroy a specific database, send a DELETE request to `/v2/databases/$DATABASE_ID`.
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDestroyCluster({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
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
      url: "/v2/databases/{database_cluster_uuid}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve an Existing Database Cluster Configuration
   * Shows configuration parameters for an existing database cluster by sending a GET request to
   * `/v2/databases/$DATABASE_ID/config`.
   * The response is a JSON object with a `config` key, which is set to an object
   * containing any database configuration parameters.
   *
   * @returns any A JSON object with a key of `config`.
   * @throws ApiError
   */
  public databasesGetConfig({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    config:
      | {
          /**
           * The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.
           */
          backup_hour?: number;
          /**
           * The minute of the backup hour when backup for the service starts. New backup  only starts if previous backup has already completed.
           */
          backup_minute?: number;
          /**
           * Global SQL mode. If empty, uses MySQL server defaults. Must only include uppercase alphabetic characters, underscores, and commas.
           */
          sql_mode?: string;
          /**
           * The number of seconds that the mysqld server waits for a connect packet before responding with bad handshake.
           */
          connect_timeout?: number;
          /**
           * Default server time zone, in the form of an offset from UTC (from -12:00 to +12:00), a time zone name (EST), or 'SYSTEM' to use the MySQL server default.
           */
          default_time_zone?: string;
          /**
           * The maximum permitted result length, in bytes, for the GROUP_CONCAT() function.
           */
          group_concat_max_len?: number;
          /**
           * The time, in seconds, before cached statistics expire.
           */
          information_schema_stats_expiry?: number;
          /**
           * The minimum length of words that an InnoDB FULLTEXT index stores.
           */
          innodb_ft_min_token_size?: number;
          /**
           * The InnoDB FULLTEXT index stopword list for all InnoDB tables.
           */
          innodb_ft_server_stopword_table?: string;
          /**
           * The time, in seconds, that an InnoDB transaction waits for a row lock. before giving up.
           */
          innodb_lock_wait_timeout?: number;
          /**
           * The size of the buffer, in bytes, that InnoDB uses to write to the log files. on disk.
           */
          innodb_log_buffer_size?: number;
          /**
           * The upper limit, in bytes, of the size of the temporary log files used during online DDL operations for InnoDB tables.
           */
          innodb_online_alter_log_max_size?: number;
          /**
           * When enabled, records information about all deadlocks in InnoDB user transactions  in the error log. Disabled by default.
           */
          innodb_print_all_deadlocks?: boolean;
          /**
           * When enabled, transaction timeouts cause InnoDB to abort and roll back the entire transaction.
           */
          innodb_rollback_on_timeout?: boolean;
          /**
           * The time, in seconds, the server waits for activity on an interactive. connection before closing it.
           */
          interactive_timeout?: number;
          /**
           * The storage engine for in-memory internal temporary tables.
           */
          internal_tmp_mem_storage_engine?: "TempTable" | "MEMORY";
          /**
           * The time, in seconds, to wait for more data from an existing connection. aborting the read.
           */
          net_read_timeout?: number;
          /**
           * The number of seconds to wait for a block to be written to a connection before aborting the write.
           */
          net_write_timeout?: number;
          /**
           * Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.
           */
          sql_require_primary_key?: boolean;
          /**
           * The number of seconds the server waits for activity on a noninteractive connection before closing it.
           */
          wait_timeout?: number;
          /**
           * The size of the largest message, in bytes, that can be received by the server. Default is 67108864 (64M).
           */
          max_allowed_packet?: number;
          /**
           * The maximum size, in bytes, of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)
           */
          max_heap_table_size?: number;
          /**
           * The sort buffer size, in bytes, for ORDER BY optimization. Default is 262144. (256K).
           */
          sort_buffer_size?: number;
          /**
           * The maximum size, in bytes, of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).
           */
          tmp_table_size?: number;
          /**
           * When enabled, captures slow queries. When disabled, also truncates the mysql.slow_log table. Default is false.
           */
          slow_query_log?: boolean;
          /**
           * The time, in seconds, for a query to take to execute before  being captured by slow_query_logs. Default is 10 seconds.
           */
          long_query_time?: number;
          /**
           * The minimum amount of time, in seconds, to keep binlog entries before deletion.  This may be extended for services that require binlog entries for longer than the default, for example if using the MySQL Debezium Kafka connector.
           */
          binlog_retention_period?: number;
          /**
           * Specifies the maximum size of the InnoDB change buffer as a percentage of the buffer pool.
           */
          innodb_change_buffer_max_size?: number;
          /**
           * Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent.
           * - 0 &mdash; disables this functionality, dirty pages in the same extent are not flushed.
           * - 1 &mdash; flushes contiguous dirty pages in the same extent.
           * - 2 &mdash; flushes dirty pages in the same extent.
           */
          innodb_flush_neighbors?: 0 | 1 | 2;
          /**
           * The number of I/O threads for read operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.
           */
          innodb_read_io_threads?: number;
          /**
           * The number of I/O threads for write operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.
           */
          innodb_write_io_threads?: number;
          /**
           * Defines the maximum number of threads permitted inside of InnoDB. A value of 0 (the default) is interpreted as infinite concurrency (no limit). This variable is intended for performance  tuning on high concurrency systems.
           */
          innodb_thread_concurrency?: number;
          /**
           * Start sizes of connection buffer and result buffer, must be multiple of 1024. Changing this parameter will lead to a restart of the MySQL service.
           */
          net_buffer_length?: number;
        }
      | {
          /**
           * Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.
           */
          autovacuum_freeze_max_age?: number;
          /**
           * Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.
           */
          autovacuum_max_workers?: number;
          /**
           * Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute.
           */
          autovacuum_naptime?: number;
          /**
           * Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.
           */
          autovacuum_vacuum_threshold?: number;
          /**
           * Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.
           */
          autovacuum_analyze_threshold?: number;
          /**
           * Specifies a fraction, in a decimal value, of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).
           */
          autovacuum_vacuum_scale_factor?: number;
          /**
           * Specifies a fraction, in a decimal value, of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).
           */
          autovacuum_analyze_scale_factor?: number;
          /**
           * Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum_cost_delay value, which is 20 milliseconds.
           */
          autovacuum_vacuum_cost_delay?: number;
          /**
           * Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.
           */
          autovacuum_vacuum_cost_limit?: number;
          /**
           * The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.
           */
          backup_hour?: number;
          /**
           * The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed.
           */
          backup_minute?: number;
          /**
           * Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms.
           */
          bgwriter_delay?: number;
          /**
           * The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512.  Setting of 0 disables forced writeback.
           */
          bgwriter_flush_after?: number;
          /**
           * The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100.
           */
          bgwriter_lru_maxpages?: number;
          /**
           * The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.
           */
          bgwriter_lru_multiplier?: number;
          /**
           * The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.
           */
          deadlock_timeout?: number;
          /**
           * Specifies the default TOAST compression method for values of compressible columns (the default is lz4).
           */
          default_toast_compression?: "lz4" | "pglz";
          /**
           * Time out sessions with open transactions after this number of milliseconds
           */
          idle_in_transaction_session_timeout?: number;
          /**
           * Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT).
           */
          jit?: boolean;
          /**
           * Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.
           */
          log_autovacuum_min_duration?: number;
          /**
           * Controls the amount of detail written in the server log for each message that is logged.
           */
          log_error_verbosity?: "TERSE" | "DEFAULT" | "VERBOSE";
          /**
           * Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc.
           */
          log_line_prefix?:
            | "pid=%p,user=%u,db=%d,app=%a,client=%h"
            | "%m [%p] %q[user=%u,db=%d,app=%a]"
            | "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h";
          /**
           * Log statements that take more than this number of milliseconds to run. If -1, disables.
           */
          log_min_duration_statement?: number;
          /**
           * PostgreSQL maximum number of files that can be open per process.
           */
          max_files_per_process?: number;
          /**
           * PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value.
           */
          max_prepared_transactions?: number;
          /**
           * PostgreSQL maximum predicate locks per transaction.
           */
          max_pred_locks_per_transaction?: number;
          /**
           * PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value.
           */
          max_locks_per_transaction?: number;
          /**
           * Maximum depth of the stack in bytes.
           */
          max_stack_depth?: number;
          /**
           * Max standby archive delay in milliseconds.
           */
          max_standby_archive_delay?: number;
          /**
           * Max standby streaming delay in milliseconds.
           */
          max_standby_streaming_delay?: number;
          /**
           * PostgreSQL maximum replication slots.
           */
          max_replication_slots?: number;
          /**
           * PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).
           */
          max_logical_replication_workers?: number;
          /**
           * Sets the maximum number of workers that the system can support for parallel queries.
           */
          max_parallel_workers?: number;
          /**
           * Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
           */
          max_parallel_workers_per_gather?: number;
          /**
           * Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value.
           */
          max_worker_processes?: number;
          /**
           * Controls which role to use for pg_partman's scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters.
           */
          "pg_partman_bgw.role"?: string;
          /**
           * Sets the time interval to run pg_partman's scheduled tasks.
           */
          "pg_partman_bgw.interval"?: number;
          /**
           * Controls which statements are counted. Specify 'top' to track top-level statements (those issued directly by clients), 'all' to also track nested statements (such as statements invoked within functions), or 'none' to disable statement statistics collection. The default value is top.
           */
          "pg_stat_statements.track"?: "all" | "top" | "none";
          /**
           * PostgreSQL temporary file limit in KiB. If -1, sets to unlimited.
           */
          temp_file_limit?: number;
          /**
           * PostgreSQL service timezone
           */
          timezone?: string;
          /**
           * Specifies the number of bytes reserved to track the currently executing command for each active session.
           */
          track_activity_query_size?: number;
          /**
           * Record commit time of transactions.
           */
          track_commit_timestamp?: "off" | "on";
          /**
           * Enables tracking of function call counts and time used.
           */
          track_functions?: "all" | "pl" | "none";
          /**
           * Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.
           */
          track_io_timing?: "off" | "on";
          /**
           * PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value.
           */
          max_wal_senders?: number;
          /**
           * Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000.
           */
          wal_sender_timeout?: number;
          /**
           * WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance
           */
          wal_writer_delay?: number;
          /**
           * Percentage of total RAM that the database server uses for shared memory buffers.  Valid range is 20-60 (float), which corresponds to 20% - 60%.  This setting adjusts the shared_buffers configuration value.
           */
          shared_buffers_percentage?: number;
          /**
           * PGBouncer connection pooling settings
           */
          pgbouncer?: {
            /**
             * Run server_reset_query (DISCARD ALL) in all pooling modes.
             */
            server_reset_query_always?: boolean;
            /**
             * List of parameters to ignore when given in startup packet.
             */
            ignore_startup_parameters?: Array<
              "extra_float_digits" | "search_path"
            >;
            /**
             * If current server connections are below this number, adds more. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.
             */
            min_pool_size?: number;
            /**
             * The pooler closes any unused server connection that has been connected longer than this amount of seconds.
             */
            server_lifetime?: number;
            /**
             * Drops server connections if they have been idle more than this many seconds.  If 0, timeout is disabled.
             */
            server_idle_timeout?: number;
            /**
             * If non-zero, automatically creates a pool of that size per user when a pool doesn't exist.
             */
            autodb_pool_size?: number;
            /**
             * PGBouncer pool mode
             */
            autodb_pool_mode?: "session" | "transaction" | "statement";
            /**
             * Only allows a maximum this many server connections per database (regardless of user). If 0, allows unlimited connections.
             */
            autodb_max_db_connections?: number;
            /**
             * If the automatically-created database pools have been unused this many seconds, they are freed. If 0, timeout is disabled.
             */
            autodb_idle_timeout?: number;
          };
          /**
           * The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB).
           */
          work_mem?: number;
          /**
           * TimescaleDB extension configuration values
           */
          timescaledb?: {
            /**
             * The number of background workers for timescaledb operations.  Set to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.
             */
            max_background_workers?: number;
          };
          /**
           * Synchronous replication type. Note that the service plan also needs to support synchronous replication.
           */
          synchronous_replication?: "off" | "quorum";
          /**
           * Enable the pg_stat_monitor extension. <b>Enabling this extension will cause the cluster to be restarted.</b> When this extension is enabled, pg_stat_statements results for utility commands are unreliable.
           */
          stat_monitor_enable?: boolean;
        }
      | {
          /**
           * A string specifying the desired eviction policy for the Redis cluster.
           *
           * - `noeviction`: Don't evict any data, returns error when memory limit is reached.
           * - `allkeys_lru:` Evict any key, least recently used (LRU) first.
           * - `allkeys_random`: Evict keys in a random order.
           * - `volatile_lru`: Evict keys with expiration only, least recently used (LRU) first.
           * - `volatile_random`: Evict keys with expiration only in a random order.
           * - `volatile_ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first.
           */
          redis_maxmemory_policy?:
            | "noeviction"
            | "allkeys_lru"
            | "allkeys_random"
            | "volatile_lru"
            | "volatile_random"
            | "volatile_ttl";
          /**
           * Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.
           */
          redis_pubsub_client_output_buffer_limit?: number;
          /**
           * Set number of redis databases. Changing this will cause a restart of redis service.
           */
          redis_number_of_databases?: number;
          /**
           * Redis IO thread count
           */
          redis_io_threads?: number;
          /**
           * Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies
           */
          redis_lfu_log_factor?: number;
          /**
           * LFU maxmemory-policy counter decay time in minutes
           */
          redis_lfu_decay_time?: number;
          /**
           * Require SSL to access Redis
           */
          redis_ssl?: boolean;
          /**
           * Redis idle connection timeout in seconds
           */
          redis_timeout?: number;
          /**
           * Set notify-keyspace-events option. Requires at least `K` or `E` and accepts any combination of the following options. Setting the parameter to `""` disables notifications.
           * - `K` &mdash; Keyspace events
           * - `E` &mdash; Keyevent events
           * - `g` &mdash; Generic commands (e.g. `DEL`, `EXPIRE`, `RENAME`, ...)
           * - `$` &mdash; String commands
           * - `l` &mdash; List commands
           * - `s` &mdash; Set commands
           * - `h` &mdash; Hash commands
           * - `z` &mdash; Sorted set commands
           * - `t` &mdash; Stream commands
           * - `d` &mdash; Module key type events
           * - `x` &mdash; Expired events
           * - `e` &mdash; Evicted events
           * - `m` &mdash; Key miss events
           * - `n` &mdash; New key events
           * - `A` &mdash; Alias for `"g$lshztxed"`
           */
          redis_notify_keyspace_events?: string;
          /**
           * When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.
           */
          redis_persistence?: "off" | "rdb";
          /**
           * Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.
           */
          redis_acl_channels_default?: "allchannels" | "resetchannels";
        };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/config",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Update the Database Configuration for an Existing Database
   * To update the configuration for an existing database cluster, send a PATCH request to
   * `/v2/databases/$DATABASE_ID/config`.
   *
   * @returns string The action was successful and the response body is empty.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesPatchConfig({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      config?:
        | {
            /**
             * The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.
             */
            backup_hour?: number;
            /**
             * The minute of the backup hour when backup for the service starts. New backup  only starts if previous backup has already completed.
             */
            backup_minute?: number;
            /**
             * Global SQL mode. If empty, uses MySQL server defaults. Must only include uppercase alphabetic characters, underscores, and commas.
             */
            sql_mode?: string;
            /**
             * The number of seconds that the mysqld server waits for a connect packet before responding with bad handshake.
             */
            connect_timeout?: number;
            /**
             * Default server time zone, in the form of an offset from UTC (from -12:00 to +12:00), a time zone name (EST), or 'SYSTEM' to use the MySQL server default.
             */
            default_time_zone?: string;
            /**
             * The maximum permitted result length, in bytes, for the GROUP_CONCAT() function.
             */
            group_concat_max_len?: number;
            /**
             * The time, in seconds, before cached statistics expire.
             */
            information_schema_stats_expiry?: number;
            /**
             * The minimum length of words that an InnoDB FULLTEXT index stores.
             */
            innodb_ft_min_token_size?: number;
            /**
             * The InnoDB FULLTEXT index stopword list for all InnoDB tables.
             */
            innodb_ft_server_stopword_table?: string;
            /**
             * The time, in seconds, that an InnoDB transaction waits for a row lock. before giving up.
             */
            innodb_lock_wait_timeout?: number;
            /**
             * The size of the buffer, in bytes, that InnoDB uses to write to the log files. on disk.
             */
            innodb_log_buffer_size?: number;
            /**
             * The upper limit, in bytes, of the size of the temporary log files used during online DDL operations for InnoDB tables.
             */
            innodb_online_alter_log_max_size?: number;
            /**
             * When enabled, records information about all deadlocks in InnoDB user transactions  in the error log. Disabled by default.
             */
            innodb_print_all_deadlocks?: boolean;
            /**
             * When enabled, transaction timeouts cause InnoDB to abort and roll back the entire transaction.
             */
            innodb_rollback_on_timeout?: boolean;
            /**
             * The time, in seconds, the server waits for activity on an interactive. connection before closing it.
             */
            interactive_timeout?: number;
            /**
             * The storage engine for in-memory internal temporary tables.
             */
            internal_tmp_mem_storage_engine?: "TempTable" | "MEMORY";
            /**
             * The time, in seconds, to wait for more data from an existing connection. aborting the read.
             */
            net_read_timeout?: number;
            /**
             * The number of seconds to wait for a block to be written to a connection before aborting the write.
             */
            net_write_timeout?: number;
            /**
             * Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.
             */
            sql_require_primary_key?: boolean;
            /**
             * The number of seconds the server waits for activity on a noninteractive connection before closing it.
             */
            wait_timeout?: number;
            /**
             * The size of the largest message, in bytes, that can be received by the server. Default is 67108864 (64M).
             */
            max_allowed_packet?: number;
            /**
             * The maximum size, in bytes, of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M)
             */
            max_heap_table_size?: number;
            /**
             * The sort buffer size, in bytes, for ORDER BY optimization. Default is 262144. (256K).
             */
            sort_buffer_size?: number;
            /**
             * The maximum size, in bytes, of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).
             */
            tmp_table_size?: number;
            /**
             * When enabled, captures slow queries. When disabled, also truncates the mysql.slow_log table. Default is false.
             */
            slow_query_log?: boolean;
            /**
             * The time, in seconds, for a query to take to execute before  being captured by slow_query_logs. Default is 10 seconds.
             */
            long_query_time?: number;
            /**
             * The minimum amount of time, in seconds, to keep binlog entries before deletion.  This may be extended for services that require binlog entries for longer than the default, for example if using the MySQL Debezium Kafka connector.
             */
            binlog_retention_period?: number;
            /**
             * Specifies the maximum size of the InnoDB change buffer as a percentage of the buffer pool.
             */
            innodb_change_buffer_max_size?: number;
            /**
             * Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent.
             * - 0 &mdash; disables this functionality, dirty pages in the same extent are not flushed.
             * - 1 &mdash; flushes contiguous dirty pages in the same extent.
             * - 2 &mdash; flushes dirty pages in the same extent.
             */
            innodb_flush_neighbors?: 0 | 1 | 2;
            /**
             * The number of I/O threads for read operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.
             */
            innodb_read_io_threads?: number;
            /**
             * The number of I/O threads for write operations in InnoDB. Changing this parameter will lead to a restart of the MySQL service.
             */
            innodb_write_io_threads?: number;
            /**
             * Defines the maximum number of threads permitted inside of InnoDB. A value of 0 (the default) is interpreted as infinite concurrency (no limit). This variable is intended for performance  tuning on high concurrency systems.
             */
            innodb_thread_concurrency?: number;
            /**
             * Start sizes of connection buffer and result buffer, must be multiple of 1024. Changing this parameter will lead to a restart of the MySQL service.
             */
            net_buffer_length?: number;
          }
        | {
            /**
             * Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. Note that the system will launch autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. This parameter will cause the server to be restarted.
             */
            autovacuum_freeze_max_age?: number;
            /**
             * Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is three. This parameter can only be set at server start.
             */
            autovacuum_max_workers?: number;
            /**
             * Specifies the minimum delay, in seconds, between autovacuum runs on any given database. The default is one minute.
             */
            autovacuum_naptime?: number;
            /**
             * Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is 50 tuples.
             */
            autovacuum_vacuum_threshold?: number;
            /**
             * Specifies the minimum number of inserted, updated, or deleted tuples needed to trigger an ANALYZE in any one table. The default is 50 tuples.
             */
            autovacuum_analyze_threshold?: number;
            /**
             * Specifies a fraction, in a decimal value, of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM. The default is 0.2 (20% of table size).
             */
            autovacuum_vacuum_scale_factor?: number;
            /**
             * Specifies a fraction, in a decimal value, of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE. The default is 0.2 (20% of table size).
             */
            autovacuum_analyze_scale_factor?: number;
            /**
             * Specifies the cost delay value, in milliseconds, that will be used in automatic VACUUM operations. If -1, uses the regular vacuum_cost_delay value, which is 20 milliseconds.
             */
            autovacuum_vacuum_cost_delay?: number;
            /**
             * Specifies the cost limit value that will be used in automatic VACUUM operations. If -1 is specified (which is the default), the regular vacuum_cost_limit value will be used.
             */
            autovacuum_vacuum_cost_limit?: number;
            /**
             * The hour of day (in UTC) when backup for the service starts. New backup only starts if previous backup has already completed.
             */
            backup_hour?: number;
            /**
             * The minute of the backup hour when backup for the service starts. New backup is only started if previous backup has already completed.
             */
            backup_minute?: number;
            /**
             * Specifies the delay, in milliseconds, between activity rounds for the background writer. Default is 200 ms.
             */
            bgwriter_delay?: number;
            /**
             * The amount of kilobytes that need to be written by the background writer before attempting to force the OS to issue these writes to underlying storage. Specified in kilobytes, default is 512.  Setting of 0 disables forced writeback.
             */
            bgwriter_flush_after?: number;
            /**
             * The maximum number of buffers that the background writer can write. Setting this to zero disables background writing. Default is 100.
             */
            bgwriter_lru_maxpages?: number;
            /**
             * The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is 2.0.
             */
            bgwriter_lru_multiplier?: number;
            /**
             * The amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition.
             */
            deadlock_timeout?: number;
            /**
             * Specifies the default TOAST compression method for values of compressible columns (the default is lz4).
             */
            default_toast_compression?: "lz4" | "pglz";
            /**
             * Time out sessions with open transactions after this number of milliseconds
             */
            idle_in_transaction_session_timeout?: number;
            /**
             * Activates, in a boolean, the system-wide use of Just-in-Time Compilation (JIT).
             */
            jit?: boolean;
            /**
             * Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one (the default) disables logging autovacuum actions.
             */
            log_autovacuum_min_duration?: number;
            /**
             * Controls the amount of detail written in the server log for each message that is logged.
             */
            log_error_verbosity?: "TERSE" | "DEFAULT" | "VERBOSE";
            /**
             * Selects one of the available log-formats. These can support popular log analyzers like pgbadger, pganalyze, etc.
             */
            log_line_prefix?:
              | "pid=%p,user=%u,db=%d,app=%a,client=%h"
              | "%m [%p] %q[user=%u,db=%d,app=%a]"
              | "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h";
            /**
             * Log statements that take more than this number of milliseconds to run. If -1, disables.
             */
            log_min_duration_statement?: number;
            /**
             * PostgreSQL maximum number of files that can be open per process.
             */
            max_files_per_process?: number;
            /**
             * PostgreSQL maximum prepared transactions. Once increased, this parameter cannot be lowered from its set value.
             */
            max_prepared_transactions?: number;
            /**
             * PostgreSQL maximum predicate locks per transaction.
             */
            max_pred_locks_per_transaction?: number;
            /**
             * PostgreSQL maximum locks per transaction. Once increased, this parameter cannot be lowered from its set value.
             */
            max_locks_per_transaction?: number;
            /**
             * Maximum depth of the stack in bytes.
             */
            max_stack_depth?: number;
            /**
             * Max standby archive delay in milliseconds.
             */
            max_standby_archive_delay?: number;
            /**
             * Max standby streaming delay in milliseconds.
             */
            max_standby_streaming_delay?: number;
            /**
             * PostgreSQL maximum replication slots.
             */
            max_replication_slots?: number;
            /**
             * PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers).
             */
            max_logical_replication_workers?: number;
            /**
             * Sets the maximum number of workers that the system can support for parallel queries.
             */
            max_parallel_workers?: number;
            /**
             * Sets the maximum number of workers that can be started by a single Gather or Gather Merge node.
             */
            max_parallel_workers_per_gather?: number;
            /**
             * Sets the maximum number of background processes that the system can support. Once increased, this parameter cannot be lowered from its set value.
             */
            max_worker_processes?: number;
            /**
             * Controls which role to use for pg_partman's scheduled background tasks. Must consist of alpha-numeric characters, dots, underscores, or dashes. May not start with dash or dot. Maximum of 64 characters.
             */
            "pg_partman_bgw.role"?: string;
            /**
             * Sets the time interval to run pg_partman's scheduled tasks.
             */
            "pg_partman_bgw.interval"?: number;
            /**
             * Controls which statements are counted. Specify 'top' to track top-level statements (those issued directly by clients), 'all' to also track nested statements (such as statements invoked within functions), or 'none' to disable statement statistics collection. The default value is top.
             */
            "pg_stat_statements.track"?: "all" | "top" | "none";
            /**
             * PostgreSQL temporary file limit in KiB. If -1, sets to unlimited.
             */
            temp_file_limit?: number;
            /**
             * PostgreSQL service timezone
             */
            timezone?: string;
            /**
             * Specifies the number of bytes reserved to track the currently executing command for each active session.
             */
            track_activity_query_size?: number;
            /**
             * Record commit time of transactions.
             */
            track_commit_timestamp?: "off" | "on";
            /**
             * Enables tracking of function call counts and time used.
             */
            track_functions?: "all" | "pl" | "none";
            /**
             * Enables timing of database I/O calls. This parameter is off by default, because it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.
             */
            track_io_timing?: "off" | "on";
            /**
             * PostgreSQL maximum WAL senders. Once increased, this parameter cannot be lowered from its set value.
             */
            max_wal_senders?: number;
            /**
             * Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Must be either 0 or between 5000 and 10800000.
             */
            wal_sender_timeout?: number;
            /**
             * WAL flush interval in milliseconds. Note that setting this value to lower than the default 200ms may negatively impact performance
             */
            wal_writer_delay?: number;
            /**
             * Percentage of total RAM that the database server uses for shared memory buffers.  Valid range is 20-60 (float), which corresponds to 20% - 60%.  This setting adjusts the shared_buffers configuration value.
             */
            shared_buffers_percentage?: number;
            /**
             * PGBouncer connection pooling settings
             */
            pgbouncer?: {
              /**
               * Run server_reset_query (DISCARD ALL) in all pooling modes.
               */
              server_reset_query_always?: boolean;
              /**
               * List of parameters to ignore when given in startup packet.
               */
              ignore_startup_parameters?: Array<
                "extra_float_digits" | "search_path"
              >;
              /**
               * If current server connections are below this number, adds more. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size.
               */
              min_pool_size?: number;
              /**
               * The pooler closes any unused server connection that has been connected longer than this amount of seconds.
               */
              server_lifetime?: number;
              /**
               * Drops server connections if they have been idle more than this many seconds.  If 0, timeout is disabled.
               */
              server_idle_timeout?: number;
              /**
               * If non-zero, automatically creates a pool of that size per user when a pool doesn't exist.
               */
              autodb_pool_size?: number;
              /**
               * PGBouncer pool mode
               */
              autodb_pool_mode?: "session" | "transaction" | "statement";
              /**
               * Only allows a maximum this many server connections per database (regardless of user). If 0, allows unlimited connections.
               */
              autodb_max_db_connections?: number;
              /**
               * If the automatically-created database pools have been unused this many seconds, they are freed. If 0, timeout is disabled.
               */
              autodb_idle_timeout?: number;
            };
            /**
             * The maximum amount of memory, in MB, used by a query operation (such as a sort or hash table) before writing to temporary disk files. Default is 1MB + 0.075% of total RAM (up to 32MB).
             */
            work_mem?: number;
            /**
             * TimescaleDB extension configuration values
             */
            timescaledb?: {
              /**
               * The number of background workers for timescaledb operations.  Set to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time.
               */
              max_background_workers?: number;
            };
            /**
             * Synchronous replication type. Note that the service plan also needs to support synchronous replication.
             */
            synchronous_replication?: "off" | "quorum";
            /**
             * Enable the pg_stat_monitor extension. <b>Enabling this extension will cause the cluster to be restarted.</b> When this extension is enabled, pg_stat_statements results for utility commands are unreliable.
             */
            stat_monitor_enable?: boolean;
          }
        | {
            /**
             * A string specifying the desired eviction policy for the Redis cluster.
             *
             * - `noeviction`: Don't evict any data, returns error when memory limit is reached.
             * - `allkeys_lru:` Evict any key, least recently used (LRU) first.
             * - `allkeys_random`: Evict keys in a random order.
             * - `volatile_lru`: Evict keys with expiration only, least recently used (LRU) first.
             * - `volatile_random`: Evict keys with expiration only in a random order.
             * - `volatile_ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first.
             */
            redis_maxmemory_policy?:
              | "noeviction"
              | "allkeys_lru"
              | "allkeys_random"
              | "volatile_lru"
              | "volatile_random"
              | "volatile_ttl";
            /**
             * Set output buffer limit for pub / sub clients in MB. The value is the hard limit, the soft limit is 1/4 of the hard limit. When setting the limit, be mindful of the available memory in the selected service plan.
             */
            redis_pubsub_client_output_buffer_limit?: number;
            /**
             * Set number of redis databases. Changing this will cause a restart of redis service.
             */
            redis_number_of_databases?: number;
            /**
             * Redis IO thread count
             */
            redis_io_threads?: number;
            /**
             * Counter logarithm factor for volatile-lfu and allkeys-lfu maxmemory-policies
             */
            redis_lfu_log_factor?: number;
            /**
             * LFU maxmemory-policy counter decay time in minutes
             */
            redis_lfu_decay_time?: number;
            /**
             * Require SSL to access Redis
             */
            redis_ssl?: boolean;
            /**
             * Redis idle connection timeout in seconds
             */
            redis_timeout?: number;
            /**
             * Set notify-keyspace-events option. Requires at least `K` or `E` and accepts any combination of the following options. Setting the parameter to `""` disables notifications.
             * - `K` &mdash; Keyspace events
             * - `E` &mdash; Keyevent events
             * - `g` &mdash; Generic commands (e.g. `DEL`, `EXPIRE`, `RENAME`, ...)
             * - `$` &mdash; String commands
             * - `l` &mdash; List commands
             * - `s` &mdash; Set commands
             * - `h` &mdash; Hash commands
             * - `z` &mdash; Sorted set commands
             * - `t` &mdash; Stream commands
             * - `d` &mdash; Module key type events
             * - `x` &mdash; Expired events
             * - `e` &mdash; Evicted events
             * - `m` &mdash; Key miss events
             * - `n` &mdash; New key events
             * - `A` &mdash; Alias for `"g$lshztxed"`
             */
            redis_notify_keyspace_events?: string;
            /**
             * When persistence is 'rdb', Redis does RDB dumps each 10 minutes if any key is changed. Also RDB dumps are done according to backup schedule for backup purposes. When persistence is 'off', no RDB dumps and backups are done, so data can be lost at any moment if service is restarted for any reason, or if service is powered off. Also service can't be forked.
             */
            redis_persistence?: "off" | "rdb";
            /**
             * Determines default pub/sub channels' ACL for new users if ACL is not supplied. When this option is not defined, all_channels is assumed to keep backward compatibility. This option doesn't affect Redis configuration acl-pubsub-default.
             */
            redis_acl_channels_default?: "allchannels" | "resetchannels";
          };
    };
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
      method: "PATCH",
      url: "/v2/databases/{database_cluster_uuid}/config",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve the Public Certificate
   * To retrieve the public certificate used to secure the connection to the database cluster send a GET request to
   * `/v2/databases/$DATABASE_ID/ca`.
   *
   * The response will be a JSON object with a `ca` key. This will be set to an object
   * containing the base64 encoding of the public key certificate.
   *
   * @returns any A JSON object with a key of `ca`.
   * @throws ApiError
   */
  public databasesGetCa({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    ca: {
      /**
       * base64 encoding of the certificate used to secure database connections
       */
      readonly certificate: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/ca",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve the Status of an Online Migration
   * To retrieve the status of the most recent online migration, send a GET request to `/v2/databases/$DATABASE_ID/online-migration`.
   * @returns any A JSON object.
   * @throws ApiError
   */
  public databasesGetMigrationStatus({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    /**
     * The ID of the most recent migration.
     */
    id?: string;
    /**
     * The current status of the migration.
     */
    status?: "running" | "canceled" | "error" | "done";
    /**
     * The time the migration was initiated, in ISO 8601 format.
     */
    created_at?: string;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/online-migration",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Start an Online Migration
   * To start an online migration, send a PUT request to `/v2/databases/$DATABASE_ID/online-migration` endpoint. Migrating a cluster establishes a connection with an existing cluster and replicates its contents to the target cluster. Online migration is only available for MySQL, PostgreSQL, and Redis clusters.
   * @returns any A JSON object.
   * @throws ApiError
   */
  public databasesUpdateOnlineMigration({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      source?: {
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        port?: number;
        /**
         * The name of the default database.
         */
        dbname?: string;
        /**
         * The default user for the database.
         */
        username?: string;
        /**
         * The randomly generated password for the default user.
         */
        password?: string;
      };
      /**
       * Enables SSL encryption when connecting to the source database.
       */
      disable_ssl?: boolean;
      /**
       * List of databases that should be ignored during migration.
       */
      ignore_dbs?: Array<string>;
    };
  }): CancelablePromise<{
    /**
     * The ID of the most recent migration.
     */
    id?: string;
    /**
     * The current status of the migration.
     */
    status?: "running" | "canceled" | "error" | "done";
    /**
     * The time the migration was initiated, in ISO 8601 format.
     */
    created_at?: string;
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/databases/{database_cluster_uuid}/online-migration",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Stop an Online Migration
   * To stop an online migration, send a DELETE request to `/v2/databases/$DATABASE_ID/online-migration/$MIGRATION_ID`.
   *
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDeleteOnlineMigration({
    databaseClusterUuid,
    migrationId,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * A unique identifier assigned to the online migration.
     */
    migrationId: string;
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
      url: "/v2/databases/{database_cluster_uuid}/online-migration/{migration_id}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        migration_id: migrationId,
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
   * Migrate a Database Cluster to a New Region
   * To migrate a database cluster to a new region, send a `PUT` request to
   * `/v2/databases/$DATABASE_ID/migrate`. The body of the request must specify a
   * `region` attribute.
   *
   * A successful request will receive a 202 Accepted status code with no body in
   * response. Querying the database cluster will show that its `status` attribute
   * will now be set to `migrating`. This will transition back to `online` when the
   * migration has completed.
   *
   * @returns any Unexpected error
   * @returns string The does not indicate the success or failure of any operation, just that the request has been accepted for processing.
   * @throws ApiError
   */
  public databasesUpdateRegion({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A slug identifier for the region to which the database cluster will be migrated.
       */
      region: string;
    };
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
      method: "PUT",
      url: "/v2/databases/{database_cluster_uuid}/migrate",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Resize a Database Cluster
   * To resize a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/resize`. The body of the request must specify both the size and num_nodes attributes.
   * A successful request will receive a 202 Accepted status code with no body in response. Querying the database cluster will show that its status attribute will now be set to resizing. This will transition back to online when the resize operation has completed.
   * @returns any Unexpected error
   * @returns string The action was successful and the response body is empty.
   * @throws ApiError
   */
  public databasesUpdateClusterSize({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A slug identifier representing desired the size of the nodes in the database cluster.
       */
      size: string;
      /**
       * The number of nodes in the database cluster. Valid values are are 1-3. In addition to the primary node, up to two standby nodes may be added for highly available configurations.
       */
      num_nodes: number;
      /**
       * Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
       */
      storage_size_mib?: number;
    };
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
      method: "PUT",
      url: "/v2/databases/{database_cluster_uuid}/resize",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * List Firewall Rules (Trusted Sources) for a Database Cluster
   * To list all of a database cluster's firewall rules (known as "trusted sources" in the control panel), send a GET request to `/v2/databases/$DATABASE_ID/firewall`.
   * The result will be a JSON object with a `rules` key.
   * @returns any A JSON object with a key of `rules`.
   * @throws ApiError
   */
  public databasesListFirewallRules({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/firewall",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Update Firewall Rules (Trusted Sources) for a Database
   * To update a database cluster's firewall rules (known as "trusted sources" in the control panel), send a PUT request to `/v2/databases/$DATABASE_ID/firewall` specifying which resources should be able to open connections to the database. You may limit connections to specific Droplets, Kubernetes clusters, or IP addresses. When a tag is provided, any Droplet or Kubernetes node with that tag applied to it will have access. The firewall is limited to 100 rules (or trusted sources). When possible, we recommend [placing your databases into a VPC network](https://www.digitalocean.com/docs/networking/vpc/) to limit access to them instead of using a firewall.
   * A successful
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateFirewallRules({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      rules?: Array<{
        /**
         * A unique ID for the firewall rule itself.
         */
        uuid?: string;
        /**
         * A unique ID for the database cluster to which the rule is applied.
         */
        cluster_uuid?: string;
        /**
         * The type of resource that the firewall rule allows to access the database cluster.
         */
        type: "droplet" | "k8s" | "ip_addr" | "tag" | "app";
        /**
         * The ID of the specific resource, the name of a tag applied to a group of resources, or the IP address that the firewall rule allows to access the database cluster.
         */
        value: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the firewall rule was created.
         */
        readonly created_at?: string;
      }>;
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
      url: "/v2/databases/{database_cluster_uuid}/firewall",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Configure a Database Cluster's Maintenance Window
   * To configure the window when automatic maintenance should be performed for a database cluster, send a PUT request to `/v2/databases/$DATABASE_ID/maintenance`.
   * A successful request will receive a 204 No Content status code with no body in response.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateMaintenanceWindow({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * The day of the week on which to apply maintenance updates.
       */
      day: string;
      /**
       * The hour in UTC at which maintenance updates will be applied in 24 hour format.
       */
      hour: string;
      /**
       * A boolean value indicating whether any maintenance is scheduled to be performed in the next window.
       */
      readonly pending?: boolean;
      /**
       * A list of strings, each containing information about a pending maintenance update.
       */
      readonly description?: Array<string>;
    } | null;
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
      url: "/v2/databases/{database_cluster_uuid}/maintenance",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * List Backups for a Database Cluster
   * To list all of the available backups of a PostgreSQL or MySQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/backups`.
   * **Note**: Backups are not supported for Redis clusters.
   * The result will be a JSON object with a `backups key`. This will be set to an array of backup objects, each of which will contain the size of the backup and the timestamp at which it was created.
   * @returns any A JSON object with a key of `database_backups`.
   * @throws ApiError
   */
  public databasesListBackups({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    backups: Array<{
      /**
       * A time value given in ISO8601 combined date and time format at which the backup was created.
       */
      created_at: string;
      /**
       * The size of the database backup in GBs.
       */
      size_gigabytes: number;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/backups",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * List All Read-only Replicas
   * To list all of the read-only replicas associated with a database cluster, send a GET request to `/v2/databases/$DATABASE_ID/replicas`.
   *
   * **Note**: Read-only replicas are not supported for Redis clusters.
   *
   * The result will be a JSON object with a `replicas` key. This will be set to an array of database replica objects, each of which will contain the standard database replica attributes.
   * @returns any A JSON object with a key of `replicas`.
   * @throws ApiError
   */
  public databasesListReplicas({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/replicas",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Create a Read-only Replica
   * To create a read-only replica for a PostgreSQL or MySQL database cluster, send a POST request to `/v2/databases/$DATABASE_ID/replicas` specifying the name it should be given, the size of the node to be used, and the region where it will be located.
   *
   * **Note**: Read-only replicas are not supported for Redis clusters.
   *
   * The response will be a JSON object with a key called `replica`. The value of this will be an object that contains the standard attributes associated with a database replica. The initial value of the read-only replica's `status` attribute will be `forking`. When the replica is ready to receive traffic, this will transition to `active`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesCreateReplica({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody?: {
      /**
       * A unique ID that can be used to identify and reference a database replica.
       */
      readonly id?: string;
      /**
       * The name to give the read-only replicating
       */
      name: string;
      /**
       * A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster.
       */
      region?: string;
      /**
       * A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating.
       */
      size?: string;
      /**
       * A string representing the current status of the database cluster.
       */
      readonly status?:
        | "creating"
        | "online"
        | "resizing"
        | "migrating"
        | "forking";
      /**
       * A flat array of tag names as strings to apply to the read-only replica after it is created. Tag names can either be existing or new tags.
       */
      tags?: Array<string>;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the database cluster was created.
       */
      readonly created_at?: string;
      /**
       * A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region.
       */
      private_network_uuid?: string;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      /**
       * Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
       */
      storage_size_mib?: number;
    } & {
      /**
       * A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating.
       */
      size: string;
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
      url: "/v2/databases/{database_cluster_uuid}/replicas",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * List all Events Logs
   * To list all of the cluster events, send a GET request to
   * `/v2/databases/$DATABASE_ID/events`.
   *
   * The result will be a JSON object with a `events` key.
   *
   * @returns any A JSON object with a key of `events`.
   * @throws ApiError
   */
  public databasesListEventsLogs({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/events",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve an Existing Read-only Replica
   * To show information about an existing database replica, send a GET request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
   *
   * **Note**: Read-only replicas are not supported for Redis clusters.
   *
   * The response will be a JSON object with a `replica key`. This will be set to an object containing the standard database replica attributes.
   * @returns any A JSON object with a key of `replica`.
   * @throws ApiError
   */
  public databasesGetReplica({
    databaseClusterUuid,
    replicaName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database replica.
     */
    replicaName: string;
  }): CancelablePromise<{
    replica?: {
      /**
       * A unique ID that can be used to identify and reference a database replica.
       */
      readonly id?: string;
      /**
       * The name to give the read-only replicating
       */
      name: string;
      /**
       * A slug identifier for the region where the read-only replica will be located. If excluded, the replica will be placed in the same region as the cluster.
       */
      region?: string;
      /**
       * A slug identifier representing the size of the node for the read-only replica. The size of the replica must be at least as large as the node size for the database cluster from which it is replicating.
       */
      size?: string;
      /**
       * A string representing the current status of the database cluster.
       */
      readonly status?:
        | "creating"
        | "online"
        | "resizing"
        | "migrating"
        | "forking";
      /**
       * A flat array of tag names as strings to apply to the read-only replica after it is created. Tag names can either be existing or new tags.
       */
      tags?: Array<string>;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the database cluster was created.
       */
      readonly created_at?: string;
      /**
       * A string specifying the UUID of the VPC to which the read-only replica will be assigned. If excluded, the replica will be assigned to your account's default VPC for the region.
       */
      private_network_uuid?: string;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      /**
       * Additional storage added to the cluster, in MiB. If null, no additional storage is added to the cluster, beyond what is provided as a base amount from the 'size' and any previously added additional storage.
       */
      storage_size_mib?: number;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        replica_name: replicaName,
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
   * Destroy a Read-only Replica
   * To destroy a specific read-only replica, send a DELETE request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME`.
   *
   * **Note**: Read-only replicas are not supported for Redis clusters.
   *
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDestroyReplica({
    databaseClusterUuid,
    replicaName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database replica.
     */
    replicaName: string;
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
      url: "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        replica_name: replicaName,
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
   * Promote a Read-only Replica to become a Primary Cluster
   * To promote a specific read-only replica, send a PUT request to `/v2/databases/$DATABASE_ID/replicas/$REPLICA_NAME/promote`.
   *
   * **Note**: Read-only replicas are not supported for Redis clusters.
   *
   * A status of 204 will be given. This indicates that the request was processed successfully, but that no response body is needed.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesPromoteReplica({
    databaseClusterUuid,
    replicaName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database replica.
     */
    replicaName: string;
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
      url: "/v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        replica_name: replicaName,
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
   * List all Database Users
   * To list all of the users for your database cluster, send a GET request to
   * `/v2/databases/$DATABASE_ID/users`.
   *
   * Note: User management is not supported for Redis clusters.
   *
   * The result will be a JSON object with a `users` key. This will be set to an array
   * of database user objects, each of which will contain the standard database user attributes.
   *
   * For MySQL clusters, additional options will be contained in the mysql_settings object.
   *
   * @returns any A JSON object with a key of `users`.
   * @throws ApiError
   */
  public databasesListUsers({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/users",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Add a Database User
   * To add a new database user, send a POST request to `/v2/databases/$DATABASE_ID/users`
   * with the desired username.
   *
   * Note: User management is not supported for Redis clusters.
   *
   * When adding a user to a MySQL cluster, additional options can be configured in the
   * `mysql_settings` object.
   *
   * When adding a user to a Kafka cluster, additional options can be configured in
   * the `settings` object.
   *
   * The response will be a JSON object with a key called `user`. The value of this will be an
   * object that contains the standard attributes associated with a database user including
   * its randomly generated password.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesAddUser({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * The name of a database user.
       */
      name: string;
      /**
       * A string representing the database user's role. The value will be either
       * "primary" or "normal".
       *
       */
      readonly role?: "primary" | "normal";
      /**
       * A randomly generated password for the database user.
       */
      readonly password?: string;
      /**
       * Access certificate for TLS client authentication. (Kafka only)
       */
      readonly access_cert?: string;
      /**
       * Access key for TLS client authentication. (Kafka only)
       */
      readonly access_key?: string;
      mysql_settings?: {
        /**
         * A string specifying the authentication method to be used for connections
         * to the MySQL user account. The valid values are `mysql_native_password`
         * or `caching_sha2_password`. If excluded when creating a new user, the
         * default for the version of MySQL in use will be used. As of MySQL 8.0, the
         * default is `caching_sha2_password`.
         *
         */
        auth_plugin: "mysql_native_password" | "caching_sha2_password";
      };
      settings?: {
        /**
         * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
         */
        acl?: Array<{
          /**
           * An identifier for the ACL. Will be computed after the ACL is created/updated.
           */
          id?: string;
          /**
           * A regex for matching the topic(s) that this ACL should apply to.
           */
          topic: string;
          /**
           * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
           */
          permission: "admin" | "consume" | "produce" | "produceconsume";
        }>;
      };
    } & {
      /**
       * For MongoDB clusters, set to `true` to create a read-only user.
       * This option is not currently supported for other database engines.
       *
       */
      readonly?: boolean;
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
      url: "/v2/databases/{database_cluster_uuid}/users",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve an Existing Database User
   * To show information about an existing database user, send a GET request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
   *
   * Note: User management is not supported for Redis clusters.
   *
   * The response will be a JSON object with a `user` key. This will be set to an object
   * containing the standard database user attributes.
   *
   * For MySQL clusters, additional options will be contained in the `mysql_settings`
   * object.
   *
   * For Kafka clusters, additional options will be contained in the `settings` object.
   *
   * @returns any A JSON object with a key of `user`.
   * @throws ApiError
   */
  public databasesGetUser({
    databaseClusterUuid,
    username,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database user.
     */
    username: string;
  }): CancelablePromise<{
    user: {
      /**
       * The name of a database user.
       */
      name: string;
      /**
       * A string representing the database user's role. The value will be either
       * "primary" or "normal".
       *
       */
      readonly role?: "primary" | "normal";
      /**
       * A randomly generated password for the database user.
       */
      readonly password?: string;
      /**
       * Access certificate for TLS client authentication. (Kafka only)
       */
      readonly access_cert?: string;
      /**
       * Access key for TLS client authentication. (Kafka only)
       */
      readonly access_key?: string;
      mysql_settings?: {
        /**
         * A string specifying the authentication method to be used for connections
         * to the MySQL user account. The valid values are `mysql_native_password`
         * or `caching_sha2_password`. If excluded when creating a new user, the
         * default for the version of MySQL in use will be used. As of MySQL 8.0, the
         * default is `caching_sha2_password`.
         *
         */
        auth_plugin: "mysql_native_password" | "caching_sha2_password";
      };
      settings?: {
        /**
         * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
         */
        acl?: Array<{
          /**
           * An identifier for the ACL. Will be computed after the ACL is created/updated.
           */
          id?: string;
          /**
           * A regex for matching the topic(s) that this ACL should apply to.
           */
          topic: string;
          /**
           * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
           */
          permission: "admin" | "consume" | "produce" | "produceconsume";
        }>;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/users/{username}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        username: username,
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
   * Remove a Database User
   * To remove a specific database user, send a DELETE request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * Note: User management is not supported for Redis clusters.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDeleteUser({
    databaseClusterUuid,
    username,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database user.
     */
    username: string;
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
      url: "/v2/databases/{database_cluster_uuid}/users/{username}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        username: username,
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
   * Update a Database User
   * To update an existing database user, send a PUT request to `/v2/databases/$DATABASE_ID/users/$USERNAME`
   * with the desired settings.
   *
   * **Note**: only `settings` can be updated via this type of request. If you wish to change the name of a user,
   * you must recreate a new user.
   *
   * The response will be a JSON object with a key called `user`. The value of this will be an
   * object that contains the name of the update database user, along with the `settings` object that
   * has been updated.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateUser({
    databaseClusterUuid,
    username,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database user.
     */
    username: string;
    requestBody: {
      settings?: {
        /**
         * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
         */
        acl?: Array<{
          /**
           * An identifier for the ACL. Will be computed after the ACL is created/updated.
           */
          id?: string;
          /**
           * A regex for matching the topic(s) that this ACL should apply to.
           */
          topic: string;
          /**
           * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
           */
          permission: "admin" | "consume" | "produce" | "produceconsume";
        }>;
      };
    } & {
      settings: {
        /**
         * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
         */
        acl?: Array<{
          /**
           * An identifier for the ACL. Will be computed after the ACL is created/updated.
           */
          id?: string;
          /**
           * A regex for matching the topic(s) that this ACL should apply to.
           */
          topic: string;
          /**
           * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
           */
          permission: "admin" | "consume" | "produce" | "produceconsume";
        }>;
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
      method: "PUT",
      url: "/v2/databases/{database_cluster_uuid}/users/{username}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        username: username,
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
   * Reset a Database User's Password or Authentication Method
   * To reset the password for a database user, send a POST request to
   * `/v2/databases/$DATABASE_ID/users/$USERNAME/reset_auth`.
   *
   * For `mysql` databases, the authentication method can be specifying by
   * including a key in the JSON body called `mysql_settings` with the `auth_plugin`
   * value specified.
   *
   * The response will be a JSON object with a `user` key. This will be set to an
   * object containing the standard database user attributes.
   *
   * @returns any A JSON object with a key of `user`.
   * @throws ApiError
   */
  public databasesResetAuth({
    databaseClusterUuid,
    username,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database user.
     */
    username: string;
    requestBody: {
      mysql_settings?: {
        /**
         * A string specifying the authentication method to be used for connections
         * to the MySQL user account. The valid values are `mysql_native_password`
         * or `caching_sha2_password`. If excluded when creating a new user, the
         * default for the version of MySQL in use will be used. As of MySQL 8.0, the
         * default is `caching_sha2_password`.
         *
         */
        auth_plugin: "mysql_native_password" | "caching_sha2_password";
      };
    };
  }): CancelablePromise<{
    user: {
      /**
       * The name of a database user.
       */
      name: string;
      /**
       * A string representing the database user's role. The value will be either
       * "primary" or "normal".
       *
       */
      readonly role?: "primary" | "normal";
      /**
       * A randomly generated password for the database user.
       */
      readonly password?: string;
      /**
       * Access certificate for TLS client authentication. (Kafka only)
       */
      readonly access_cert?: string;
      /**
       * Access key for TLS client authentication. (Kafka only)
       */
      readonly access_key?: string;
      mysql_settings?: {
        /**
         * A string specifying the authentication method to be used for connections
         * to the MySQL user account. The valid values are `mysql_native_password`
         * or `caching_sha2_password`. If excluded when creating a new user, the
         * default for the version of MySQL in use will be used. As of MySQL 8.0, the
         * default is `caching_sha2_password`.
         *
         */
        auth_plugin: "mysql_native_password" | "caching_sha2_password";
      };
      settings?: {
        /**
         * ACLs (Access Control Lists) specifying permissions on topics within a Kafka cluster.
         */
        acl?: Array<{
          /**
           * An identifier for the ACL. Will be computed after the ACL is created/updated.
           */
          id?: string;
          /**
           * A regex for matching the topic(s) that this ACL should apply to.
           */
          topic: string;
          /**
           * Permission set applied to the ACL. 'consume' allows for messages to be consumed from the topic. 'produce' allows for messages to be published to the topic. 'produceconsume' allows for both 'consume' and 'produce' permission. 'admin' allows for 'produceconsume' as well as any operations to administer the topic (delete, update).
           */
          permission: "admin" | "consume" | "produce" | "produceconsume";
        }>;
      };
    };
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        username: username,
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
   * List All Databases
   * To list all of the databases in a clusters, send a GET request to
   * `/v2/databases/$DATABASE_ID/dbs`.
   *
   * The result will be a JSON object with a `dbs` key. This will be set to an array
   * of database objects, each of which will contain the standard database attributes.
   *
   * Note: Database management is not supported for Redis clusters.
   *
   * @returns any A JSON object with a key of `databases`.
   * @throws ApiError
   */
  public databasesList({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/dbs",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Add a New Database
   * To add a new database to an existing cluster, send a POST request to
   * `/v2/databases/$DATABASE_ID/dbs`.
   *
   * Note: Database management is not supported for Redis clusters.
   *
   * The response will be a JSON object with a key called `db`. The value of this will be
   * an object that contains the standard attributes associated with a database.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesAdd({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * The name of the database.
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
      url: "/v2/databases/{database_cluster_uuid}/dbs",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve an Existing Database
   * To show information about an existing database cluster, send a GET request to
   * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
   *
   * Note: Database management is not supported for Redis clusters.
   *
   * The response will be a JSON object with a `db` key. This will be set to an object
   * containing the standard database attributes.
   *
   * @returns any A JSON object with a key of `db`.
   * @throws ApiError
   */
  public databasesGet({
    databaseClusterUuid,
    databaseName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database.
     */
    databaseName: string;
  }): CancelablePromise<{
    db: {
      /**
       * The name of the database.
       */
      name: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        database_name: databaseName,
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
   * Delete a Database
   * To delete a specific database, send a DELETE request to
   * `/v2/databases/$DATABASE_ID/dbs/$DB_NAME`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * Note: Database management is not supported for Redis clusters.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDelete({
    databaseClusterUuid,
    databaseName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name of the database.
     */
    databaseName: string;
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
      url: "/v2/databases/{database_cluster_uuid}/dbs/{database_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        database_name: databaseName,
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
   * List Connection Pools (PostgreSQL)
   * To list all of the connection pools available to a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools`.
   * The result will be a JSON object with a `pools` key. This will be set to an array of connection pool objects.
   * @returns any A JSON object with a key of `pools`.
   * @throws ApiError
   */
  public databasesListConnectionPools({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    /**
     * An array of connection pool objects.
     */
    readonly pools?: Array<{
      /**
       * A unique name for the connection pool. Must be between 3 and 60 characters.
       */
      name: string;
      /**
       * The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement.
       */
      mode: string;
      /**
       * The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.
       */
      size: number;
      /**
       * The database for use with the connection pool.
       */
      db: string;
      /**
       * The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.
       */
      user?: string;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/pools",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Add a New Connection Pool (PostgreSQL)
   * For PostgreSQL database clusters, connection pools can be used to allow a
   * database to share its idle connections. The popular PostgreSQL connection
   * pooling utility PgBouncer is used to provide this service. [See here for more information](https://www.digitalocean.com/docs/databases/postgresql/how-to/manage-connection-pools/)
   * about how and why to use PgBouncer connection pooling including
   * details about the available transaction modes.
   *
   * To add a new connection pool to a PostgreSQL database cluster, send a POST
   * request to `/v2/databases/$DATABASE_ID/pools` specifying a name for the pool,
   * the user to connect with, the database to connect to, as well as its desired
   * size and transaction mode.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesAddConnectionPool({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A unique name for the connection pool. Must be between 3 and 60 characters.
       */
      name: string;
      /**
       * The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement.
       */
      mode: string;
      /**
       * The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.
       */
      size: number;
      /**
       * The database for use with the connection pool.
       */
      db: string;
      /**
       * The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.
       */
      user?: string;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
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
      url: "/v2/databases/{database_cluster_uuid}/pools",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve Existing Connection Pool (PostgreSQL)
   * To show information about an existing connection pool for a PostgreSQL database cluster, send a GET request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
   * The response will be a JSON object with a `pool` key.
   * @returns any A JSON object with a key of `pool`.
   * @throws ApiError
   */
  public databasesGetConnectionPool({
    databaseClusterUuid,
    poolName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the connection pool.
     */
    poolName: string;
  }): CancelablePromise<{
    pool: {
      /**
       * A unique name for the connection pool. Must be between 3 and 60 characters.
       */
      name: string;
      /**
       * The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement.
       */
      mode: string;
      /**
       * The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.
       */
      size: number;
      /**
       * The database for use with the connection pool.
       */
      db: string;
      /**
       * The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.
       */
      user?: string;
      connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
      private_connection?: {
        /**
         * A connection string in the format accepted by the `psql` command. This is provided as a convenience and should be able to be constructed by the other attributes.
         */
        readonly uri?: string;
        /**
         * The name of the default database.
         */
        readonly database?: string;
        /**
         * The FQDN pointing to the database cluster's current primary node.
         */
        readonly host?: string;
        /**
         * The port on which the database cluster is listening.
         */
        readonly port?: number;
        /**
         * The default user for the database.
         */
        readonly user?: string;
        /**
         * The randomly generated password for the default user.
         */
        readonly password?: string;
        /**
         * A boolean value indicating if the connection should be made over SSL.
         */
        readonly ssl?: boolean;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        pool_name: poolName,
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
   * Update Connection Pools (PostgreSQL)
   * To update a connection pool for a PostgreSQL database cluster, send a PUT request to  `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateConnectionPool({
    databaseClusterUuid,
    poolName,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the connection pool.
     */
    poolName: string;
    requestBody: {
      /**
       * The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement.
       */
      mode: string;
      /**
       * The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster.
       */
      size: number;
      /**
       * The database for use with the connection pool.
       */
      db: string;
      /**
       * The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.
       */
      user?: string;
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
      url: "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        pool_name: poolName,
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
   * Delete a Connection Pool (PostgreSQL)
   * To delete a specific connection pool for a PostgreSQL database cluster, send
   * a DELETE request to `/v2/databases/$DATABASE_ID/pools/$POOL_NAME`.
   *
   * A status of 204 will be given. This indicates that the request was processed
   * successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDeleteConnectionPool({
    databaseClusterUuid,
    poolName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the connection pool.
     */
    poolName: string;
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
      url: "/v2/databases/{database_cluster_uuid}/pools/{pool_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        pool_name: poolName,
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
   * Retrieve the Eviction Policy for a Redis Cluster
   * To retrieve the configured eviction policy for an existing Redis cluster, send a GET request to `/v2/databases/$DATABASE_ID/eviction_policy`.
   * The response will be a JSON object with an `eviction_policy` key. This will be set to a string representing the eviction policy.
   * @returns any A JSON string with a key of `eviction_policy`.
   * @throws ApiError
   */
  public databasesGetEvictionPolicy({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/eviction_policy",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Configure the Eviction Policy for a Redis Cluster
   * To configure an eviction policy for an existing Redis cluster, send a PUT request to `/v2/databases/$DATABASE_ID/eviction_policy` specifying the desired policy.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateEvictionPolicy({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A string specifying the desired eviction policy for the Redis cluster.
       *
       * - `noeviction`: Don't evict any data, returns error when memory limit is reached.
       * - `allkeys_lru:` Evict any key, least recently used (LRU) first.
       * - `allkeys_random`: Evict keys in a random order.
       * - `volatile_lru`: Evict keys with expiration only, least recently used (LRU) first.
       * - `volatile_random`: Evict keys with expiration only in a random order.
       * - `volatile_ttl`: Evict keys with expiration only, shortest time-to-live (TTL) first.
       */
      eviction_policy:
        | "noeviction"
        | "allkeys_lru"
        | "allkeys_random"
        | "volatile_lru"
        | "volatile_random"
        | "volatile_ttl";
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
      url: "/v2/databases/{database_cluster_uuid}/eviction_policy",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Retrieve the SQL Modes for a MySQL Cluster
   * To retrieve the configured SQL modes for an existing MySQL cluster, send a GET request to `/v2/databases/$DATABASE_ID/sql_mode`.
   * The response will be a JSON object with a `sql_mode` key. This will be set to a string representing the configured SQL modes.
   * @returns any A JSON string with a key of `sql_mode`.
   * @throws ApiError
   */
  public databasesGetSqlMode({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<{
    /**
     * A string specifying the configured SQL modes for the MySQL cluster.
     */
    sql_mode: string;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/sql_mode",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Update SQL Mode for a Cluster
   * To configure the SQL modes for an existing MySQL cluster, send a PUT request to `/v2/databases/$DATABASE_ID/sql_mode` specifying the desired modes. See the official MySQL 8 documentation for a [full list of supported SQL modes](https://dev.mysql.com/doc/refman/8.0/en/sql-mode.html#sql-mode-full).
   * A successful request will receive a 204 No Content status code with no body in response.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateSqlMode({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A string specifying the configured SQL modes for the MySQL cluster.
       */
      sql_mode: string;
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
      url: "/v2/databases/{database_cluster_uuid}/sql_mode",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Upgrade Major Version for a Database
   * To upgrade the major version of a database, send a PUT request to `/v2/databases/$DATABASE_ID/upgrade`, specifying the target version.
   * A successful request will receive a 204 No Content status code with no body in response.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesUpdateMajorVersion({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody: {
      /**
       * A string representing the version of the database engine in use for the cluster.
       */
      version?: string;
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
      url: "/v2/databases/{database_cluster_uuid}/upgrade",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * List Topics for a Kafka Cluster
   * To list all of a Kafka cluster's topics, send a GET request to
   * `/v2/databases/$DATABASE_ID/topics`.
   *
   * The result will be a JSON object with a `topics` key.
   *
   * @returns any A JSON object with a key of `topics`.
   * @throws ApiError
   */
  public databasesListKafkaTopics({
    databaseClusterUuid,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/topics",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Create Topic for a Kafka Cluster
   * To create a topic attached to a Kafka cluster, send a POST request to
   * `/v2/databases/$DATABASE_ID/topics`.
   *
   * The result will be a JSON object with a `topic` key.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesCreateKafkaTopic({
    databaseClusterUuid,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    requestBody?: {
      /**
       * The name of the Kafka topic.
       */
      name?: string;
      /**
       * The number of nodes to replicate data across the cluster.
       */
      replication_factor?: number;
      /**
       * The number of partitions available for the topic. On update, this value can only be increased.
       */
      partition_count?: number;
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
      url: "/v2/databases/{database_cluster_uuid}/topics",
      path: {
        database_cluster_uuid: databaseClusterUuid,
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
   * Get Topic for a Kafka Cluster
   * To retrieve a given topic by name from the set of a Kafka cluster's topics,
   * send a GET request to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.
   *
   * The result will be a JSON object with a `topic` key.
   *
   * @returns any A JSON object with a key of `topic`.
   * @throws ApiError
   */
  public databasesGetKafkaTopic({
    databaseClusterUuid,
    topicName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the Kafka topic.
     */
    topicName: string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        topic_name: topicName,
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
   * Update Topic for a Kafka Cluster
   * To update a topic attached to a Kafka cluster, send a PUT request to
   * `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.
   *
   * The result will be a JSON object with a `topic` key.
   *
   * @returns any A JSON object with a key of `topic`.
   * @throws ApiError
   */
  public databasesUpdateKafkaTopic({
    databaseClusterUuid,
    topicName,
    requestBody,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the Kafka topic.
     */
    topicName: string;
    requestBody?: {
      /**
       * The number of nodes to replicate data across the cluster.
       */
      replication_factor?: number;
      /**
       * The number of partitions available for the topic. On update, this value can only be increased.
       */
      partition_count?: number;
      config?: {
        /**
         * The cleanup_policy sets the retention policy to use on log segments. 'delete' will discard old segments when retention time/size limits are reached. 'compact' will enable log compaction, resulting in retention of the latest value for each key.
         */
        cleanup_policy?: "delete" | "compact" | "compact_delete";
        /**
         * The compression_type specifies the compression type of the topic.
         */
        compression_type?:
          | "producer"
          | "gzip"
          | "snappy"
          | "Iz4"
          | "zstd"
          | "uncompressed";
        /**
         * The delete_retention_ms specifies how long (in ms) to retain delete tombstone markers for topics.
         */
        delete_retention_ms?: number;
        /**
         * The file_delete_delay_ms specifies the time (in ms) to wait before deleting a file from the filesystem.
         */
        file_delete_delay_ms?: number;
        /**
         * The flush_messages specifies the number of messages to accumulate on a log partition before messages are flushed to disk.
         */
        flush_messages?: number;
        /**
         * The flush_ms specifies the maximum time (in ms) that a message is kept in memory before being flushed to disk.
         */
        flush_ms?: number;
        /**
         * The index_interval_bytes specifies the number of bytes between entries being added into te offset index.
         */
        index_interval_bytes?: number;
        /**
         * The max_compaction_lag_ms specifies the maximum amount of time (in ms) that a message will remain uncompacted. This is only applicable if the logs are have compaction enabled.
         */
        max_compaction_lag_ms?: number;
        /**
         * The max_messages_bytes specifies the largest record batch size (in bytes) that can be sent to the server.  This is calculated after compression if compression is enabled.
         */
        max_message_bytes?: number;
        /**
         * The message_down_conversion_enable specifies whether down-conversion of message formats is enabled to satisfy consumer requests. When 'false', the broker will not perform conversion for consumers expecting older message formats. The broker will respond with an `UNSUPPORTED_VERSION` error for consume requests from these older clients.
         */
        message_down_conversion_enable?: boolean;
        /**
         * The message_format_version specifies the message format version used by the broker to append messages to the logs. The value of this setting is assumed to be 3.0-IV1 if the broker protocol version is 3.0 or higher. By setting a  particular message format version, all existing messages on disk must be smaller or equal to the specified version.
         */
        message_format_version?:
          | "0.8.0"
          | "0.8.1"
          | "0.8.2"
          | "0.9.0"
          | "0.10.0-IV0"
          | "0.10.0-IV1"
          | "0.10.1-IV0"
          | "0.10.1-IV1"
          | "0.10.1-IV2"
          | "0.10.2-IV0"
          | "0.11.0-IV0"
          | "0.11.0-IV1"
          | "0.11.0-IV2"
          | "1.0-IV0"
          | "1.1-IV0"
          | "2.0-IV0"
          | "2.0-IV1"
          | "2.1-IV0"
          | "2.1-IV1"
          | "2.1-IV2"
          | "2.2-IV0"
          | "2.2-IV1"
          | "2.3-IV0"
          | "2.3-IV1"
          | "2.4-IV0"
          | "2.4-IV1"
          | "2.5-IV0"
          | "2.6-IV0"
          | "2.7-IV0"
          | "2.7-IV1"
          | "2.7-IV2"
          | "2.8-IV0"
          | "2.8-IV1"
          | "3.0-IV0"
          | "3.0-IV1"
          | "3.1-IV0"
          | "3.2-IV0"
          | "3.3-IV0"
          | "3.3-IV1"
          | "3.3-IV2"
          | "3.3-IV3";
        /**
         * The message_timestamp_type specifies whether to use the message create time or log append time as the timestamp on a message.
         */
        message_timestamp_type?: "create_time" | "log_append_time";
        /**
         * The min_cleanable_dirty_ratio specifies the frequency of log compaction (if enabled) in relation to duplicates present in the logs. For example, at 0.5, at most 50% of the log could be duplicates before compaction would begin.
         */
        min_cleanable_dirty_ratio?: number;
        /**
         * The min_compaction_lag_ms specifies the minimum time (in ms) that a message will remain uncompacted in the log. Only relevant if log compaction is enabled.
         */
        min_compaction_lag_ms?: number;
        /**
         * The min_insync_replicas specifies the number of replicas that must ACK a write for the write to be considered successful.
         */
        min_insync_replicas?: number;
        /**
         * The preallocate specifies whether a file should be preallocated on disk when creating a new log segment.
         */
        preallocate?: boolean;
        /**
         * The retention_bytes specifies the maximum size of the log (in bytes) before deleting messages. -1 indicates that there is no limit.
         */
        retention_bytes?: number;
        /**
         * The retention_ms specifies the maximum amount of time (in ms) to keep a message before deleting it.
         */
        retention_ms?: number;
        /**
         * The segment_bytes specifies the maximum size of a single log file (in bytes).
         */
        segment_bytes?: number;
        /**
         * The segment_jitter_ms specifies the maximum random jitter subtracted from the scheduled segment roll time to avoid thundering herds of segment rolling.
         */
        segment_jitter_ms?: number;
        /**
         * The segment_ms specifies the period of time after which the log will be forced to roll if the segment file isn't full. This ensures that retention can delete or compact old data.
         */
        segment_ms?: number;
      };
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        topic_name: topicName,
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
   * Delete Topic for a Kafka Cluster
   * To delete a single topic within a Kafka cluster, send a DELETE request
   * to `/v2/databases/$DATABASE_ID/topics/$TOPIC_NAME`.
   *
   * A status of 204 will be given. This indicates that the request was
   * processed successfully, but that no response body is needed.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public databasesDeleteKafkaTopic({
    databaseClusterUuid,
    topicName,
  }: {
    /**
     * A unique identifier for a database cluster.
     */
    databaseClusterUuid: string;
    /**
     * The name used to identify the Kafka topic.
     */
    topicName: string;
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
      url: "/v2/databases/{database_cluster_uuid}/topics/{topic_name}",
      path: {
        database_cluster_uuid: databaseClusterUuid,
        topic_name: topicName,
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
