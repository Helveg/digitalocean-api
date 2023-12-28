/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class ContainerRegistryService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * Get Container Registry Information
   * To get information about your container registry, send a GET request to `/v2/registry`.
   * @returns any The response will be a JSON object with the key `registry` containing information about your registry.
   * @throws ApiError
   */
  public registryGet(): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Create Container Registry
   * To create your container registry, send a POST request to `/v2/registry`.
   *
   * The `name` becomes part of the URL for images stored in the registry. For
   * example, if your registry is called `example`, an image in it will have the
   * URL `registry.digitalocean.com/example/image:tag`.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters.
       */
      name: string;
      /**
       * The slug of the subscription tier to sign up for. Valid values can be retrieved using the options endpoint.
       */
      subscription_tier_slug: "starter" | "basic" | "professional";
      /**
       * Slug of the region where registry data is stored. When not provided, a region will be selected.
       */
      region?: "nyc3" | "sfo3" | "ams3" | "sgp1" | "fra1";
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
      url: "/v2/registry",
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
   * Delete Container Registry
   * To delete your container registry, destroying all container image data stored in it, send a DELETE request to `/v2/registry`.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryDelete(): CancelablePromise<{
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
      url: "/v2/registry",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Get Subscription Information
   * A subscription is automatically created when you configure your container registry. To get information about your subscription, send a GET request to `/v2/registry/subscription`.
   * @returns any The response will be a JSON object with a key called `subscription` containing information about your subscription.
   * @throws ApiError
   */
  public registryGetSubscription(): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry/subscription",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Update Subscription Tier
   * After creating your registry, you can switch to a different subscription tier to better suit your needs. To do this, send a POST request to `/v2/registry/subscription`.
   * @returns any The response will be a JSON object with a key called `subscription` containing information about your subscription.
   * @throws ApiError
   */
  public registryUpdateSubscription({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The slug of the subscription tier to sign up for.
       */
      tier_slug?: "starter" | "basic" | "professional";
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/registry/subscription",
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
   * Get Docker Credentials for Container Registry
   * In order to access your container registry with the Docker client or from a
   * Kubernetes cluster, you will need to configure authentication. The necessary
   * JSON configuration can be retrieved by sending a GET request to
   * `/v2/registry/docker-credentials`.
   *
   * The response will be in the format of a Docker `config.json` file. To use the
   * config in your Kubernetes cluster, create a Secret with:
   *
   * kubectl create secret generic docr \
   * --from-file=.dockerconfigjson=config.json \
   * --type=kubernetes.io/dockerconfigjson
   *
   * By default, the returned credentials have read-only access to your registry
   * and cannot be used to push images. This is appropriate for most Kubernetes
   * clusters. To retrieve read/write credentials, suitable for use with the Docker
   * client or in a CI system, read_write may be provided as query parameter. For
   * example: `/v2/registry/docker-credentials?read_write=true`
   *
   * By default, the returned credentials will not expire. To retrieve credentials
   * with an expiry set, expiry_seconds may be provided as a query parameter. For
   * example: `/v2/registry/docker-credentials?expiry_seconds=3600` will return
   * credentials that expire after one hour.
   *
   * @returns any A Docker `config.json` file for the container registry.
   * @throws ApiError
   */
  public registryGetDockerCredentials({
    expirySeconds,
    readWrite = false,
  }: {
    /**
     * The duration in seconds that the returned registry credentials will be valid. If not set or 0, the credentials will not expire.
     */
    expirySeconds?: number;
    /**
     * By default, the registry credentials allow for read-only access. Set this query parameter to `true` to obtain read-write credentials.
     */
    readWrite?: boolean;
  }): CancelablePromise<{
    auths?: {
      "registry.digitalocean.com"?: {
        /**
         * A base64 encoded string containing credentials for the container registry.
         */
        auth?: string;
      };
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry/docker-credentials",
      query: {
        expiry_seconds: expirySeconds,
        read_write: readWrite,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Validate a Container Registry Name
   * To validate that a container registry name is available for use, send a POST
   * request to `/v2/registry/validate-name`.
   *
   * If the name is both formatted correctly and available, the response code will
   * be 204 and contain no body. If the name is already in use, the response will
   * be a 409 Conflict.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryValidateName({
    requestBody,
  }: {
    requestBody: {
      /**
       * A globally unique name for the container registry. Must be lowercase and be composed only of numbers, letters and `-`, up to a limit of 63 characters.
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
      url: "/v2/registry/validate-name",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        401: `Unauthorized`,
        409: `Conflict`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * @deprecated
   * List All Container Registry Repositories
   * This endpoint has been deprecated in favor of the _List All Container Registry Repositories [V2]_ endpoint.
   *
   * To list all repositories in your container registry, send a GET
   * request to `/v2/registry/$REGISTRY_NAME/repositories`.
   *
   * @returns any The response body will be a JSON object with a key of `repositories`. This will be set to an array containing objects each representing a repository.
   * @throws ApiError
   */
  public registryListRepositories({
    registryName,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
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
      repositories?: Array<{
        /**
         * The name of the container registry.
         */
        registry_name?: string;
        /**
         * The name of the repository.
         */
        name?: string;
        latest_tag?: {
          /**
           * The name of the container registry.
           */
          registry_name?: string;
          /**
           * The name of the repository.
           */
          repository?: string;
          /**
           * The name of the tag.
           */
          tag?: string;
          /**
           * The digest of the manifest associated with the tag.
           */
          manifest_digest?: string;
          /**
           * The compressed size of the tag in bytes.
           */
          compressed_size_bytes?: number;
          /**
           * The uncompressed size of the tag in bytes (this size is calculated asynchronously so it may not be immediately available).
           */
          size_bytes?: number;
          /**
           * The time the tag was last updated.
           */
          updated_at?: string;
        };
        /**
         * The number of tags in the repository.
         */
        tag_count?: number;
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
      url: "/v2/registry/{registry_name}/repositories",
      path: {
        registry_name: registryName,
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
   * List All Container Registry Repositories (V2)
   * To list all repositories in your container registry, send a GET request to `/v2/registry/$REGISTRY_NAME/repositoriesV2`.
   * @returns any The response body will be a JSON object with a key of `repositories`. This will be set to an array containing objects each representing a repository.
   * @throws ApiError
   */
  public registryListRepositoriesV2({
    registryName,
    perPage = 20,
    page = 1,
    pageToken,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return. Ignored when 'page_token' is provided.
     */
    page?: number;
    /**
     * Token to retrieve of the next or previous set of results more quickly than using 'page'.
     */
    pageToken?: string;
  }): CancelablePromise<
    {
      repositories?: Array<{
        /**
         * The name of the container registry.
         */
        registry_name?: string;
        /**
         * The name of the repository.
         */
        name?: string;
        latest_manifest?: {
          /**
           * The name of the container registry.
           */
          registry_name?: string;
          /**
           * The name of the repository.
           */
          repository?: string;
          /**
           * The manifest digest
           */
          digest?: string;
          /**
           * The compressed size of the manifest in bytes.
           */
          compressed_size_bytes?: number;
          /**
           * The uncompressed size of the manifest in bytes (this size is calculated asynchronously so it may not be immediately available).
           */
          size_bytes?: number;
          /**
           * The time the manifest was last updated.
           */
          updated_at?: string;
          /**
           * All tags associated with this manifest
           */
          tags?: Array<string>;
          /**
           * All blobs associated with this manifest
           */
          blobs?: Array<{
            /**
             * The digest of the blob
             */
            digest?: string;
            /**
             * The compressed size of the blob in bytes.
             */
            compressed_size_bytes?: number;
          }>;
        };
        /**
         * The number of tags in the repository.
         */
        tag_count?: number;
        /**
         * The number of manifests in the repository.
         */
        manifest_count?: number;
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
      url: "/v2/registry/{registry_name}/repositoriesV2",
      path: {
        registry_name: registryName,
      },
      query: {
        per_page: perPage,
        page: page,
        page_token: pageToken,
      },
      errors: {
        400: `Bad Request`,
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List All Container Registry Repository Tags
   * To list all tags in your container registry repository, send a GET
   * request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags`.
   *
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to list tags for
   * `registry.digitalocean.com/example/my/repo`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/tags`.
   *
   * @returns any The response body will be a JSON object with a key of `tags`. This will be set to an array containing objects each representing a tag.
   * @throws ApiError
   */
  public registryListRepositoryTags({
    registryName,
    repositoryName,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.
     */
    repositoryName: string;
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
         * The name of the container registry.
         */
        registry_name?: string;
        /**
         * The name of the repository.
         */
        repository?: string;
        /**
         * The name of the tag.
         */
        tag?: string;
        /**
         * The digest of the manifest associated with the tag.
         */
        manifest_digest?: string;
        /**
         * The compressed size of the tag in bytes.
         */
        compressed_size_bytes?: number;
        /**
         * The uncompressed size of the tag in bytes (this size is calculated asynchronously so it may not be immediately available).
         */
        size_bytes?: number;
        /**
         * The time the tag was last updated.
         */
        updated_at?: string;
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
      url: "/v2/registry/{registry_name}/repositories/{repository_name}/tags",
      path: {
        registry_name: registryName,
        repository_name: repositoryName,
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
   * Delete Container Registry Repository Tag
   * To delete a container repository tag, send a DELETE request to
   * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/tags/$TAG`.
   *
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to delete
   * `registry.digitalocean.com/example/my/repo:mytag`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/tags/mytag`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryDeleteRepositoryTag({
    registryName,
    repositoryName,
    repositoryTag,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.
     */
    repositoryName: string;
    /**
     * The name of a container registry repository tag.
     */
    repositoryTag: string;
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
      url: "/v2/registry/{registry_name}/repositories/{repository_name}/tags/{repository_tag}",
      path: {
        registry_name: registryName,
        repository_name: repositoryName,
        repository_tag: repositoryTag,
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
   * List All Container Registry Repository Manifests
   * To list all manifests in your container registry repository, send a GET
   * request to `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/digests`.
   *
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to list manifests for
   * `registry.digitalocean.com/example/my/repo`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/digests`.
   *
   * @returns any The response body will be a JSON object with a key of `manifests`. This will be set to an array containing objects each representing a manifest.
   * @throws ApiError
   */
  public registryListRepositoryManifests({
    registryName,
    repositoryName,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.
     */
    repositoryName: string;
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
      manifests?: Array<{
        /**
         * The name of the container registry.
         */
        registry_name?: string;
        /**
         * The name of the repository.
         */
        repository?: string;
        /**
         * The manifest digest
         */
        digest?: string;
        /**
         * The compressed size of the manifest in bytes.
         */
        compressed_size_bytes?: number;
        /**
         * The uncompressed size of the manifest in bytes (this size is calculated asynchronously so it may not be immediately available).
         */
        size_bytes?: number;
        /**
         * The time the manifest was last updated.
         */
        updated_at?: string;
        /**
         * All tags associated with this manifest
         */
        tags?: Array<string>;
        /**
         * All blobs associated with this manifest
         */
        blobs?: Array<{
          /**
           * The digest of the blob
           */
          digest?: string;
          /**
           * The compressed size of the blob in bytes.
           */
          compressed_size_bytes?: number;
        }>;
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
      url: "/v2/registry/{registry_name}/repositories/{repository_name}/digests",
      path: {
        registry_name: registryName,
        repository_name: repositoryName,
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
   * Delete Container Registry Repository Manifest
   * To delete a container repository manifest by digest, send a DELETE request to
   * `/v2/registry/$REGISTRY_NAME/repositories/$REPOSITORY_NAME/digests/$MANIFEST_DIGEST`.
   *
   * Note that if your repository name contains `/` characters, it must be
   * URL-encoded in the request URL. For example, to delete
   * `registry.digitalocean.com/example/my/repo@sha256:abcd`, the path would be
   * `/v2/registry/example/repositories/my%2Frepo/digests/sha256:abcd`.
   *
   * A successful request will receive a 204 status code with no body in response.
   * This indicates that the request was processed successfully.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryDeleteRepositoryManifest({
    registryName,
    repositoryName,
    manifestDigest,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`.
     */
    repositoryName: string;
    /**
     * The manifest digest of a container registry repository tag.
     */
    manifestDigest: string;
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
      url: "/v2/registry/{registry_name}/repositories/{repository_name}/digests/{manifest_digest}",
      path: {
        registry_name: registryName,
        repository_name: repositoryName,
        manifest_digest: manifestDigest,
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
   * Start Garbage Collection
   * Garbage collection enables users to clear out unreferenced blobs (layer &
   * manifest data) after deleting one or more manifests from a repository. If
   * there are no unreferenced blobs resulting from the deletion of one or more
   * manifests, garbage collection is effectively a noop.
   * [See here for more information](https://www.digitalocean.com/docs/container-registry/how-to/clean-up-container-registry/)
   * about how and why you should clean up your container registry periodically.
   *
   * To request a garbage collection run on your registry, send a POST request to
   * `/v2/registry/$REGISTRY_NAME/garbage-collection`. This will initiate the
   * following sequence of events on your registry.
   *
   * * Set the registry to read-only mode, meaning no further write-scoped
   * JWTs will be issued to registry clients. Existing write-scoped JWTs will
   * continue to work until they expire which can take up to 15 minutes.
   * * Wait until all existing write-scoped JWTs have expired.
   * * Scan all registry manifests to determine which blobs are unreferenced.
   * * Delete all unreferenced blobs from the registry.
   * * Record the number of blobs deleted and bytes freed, mark the garbage
   * collection status as `success`.
   * * Remove the read-only mode restriction from the registry, meaning write-scoped
   * JWTs will once again be issued to registry clients.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public registryRunGarbageCollection({
    registryName,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
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
      url: "/v2/registry/{registry_name}/garbage-collection",
      path: {
        registry_name: registryName,
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
   * Get Active Garbage Collection
   * To get information about the currently-active garbage collection for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collection`.
   * @returns any The response will be a JSON object with a key of `garbage_collection`. This will be a json object with attributes representing the currently-active garbage collection.
   * @throws ApiError
   */
  public registryGetGarbageCollection({
    registryName,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
  }): CancelablePromise<{
    garbage_collection?: {
      /**
       * A string specifying the UUID of the garbage collection.
       */
      uuid?: string;
      /**
       * The name of the container registry.
       */
      registry_name?: string;
      /**
       * The current status of this garbage collection.
       */
      status?:
        | "requested"
        | "waiting for write JWTs to expire"
        | "scanning manifests"
        | "deleting unreferenced blobs"
        | "cancelling"
        | "failed"
        | "succeeded"
        | "cancelled";
      /**
       * The time the garbage collection was created.
       */
      created_at?: string;
      /**
       * The time the garbage collection was last updated.
       */
      updated_at?: string;
      /**
       * The number of blobs deleted as a result of this garbage collection.
       */
      blobs_deleted?: number;
      /**
       * The number of bytes freed as a result of this garbage collection.
       */
      freed_bytes?: number;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry/{registry_name}/garbage-collection",
      path: {
        registry_name: registryName,
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
   * List Garbage Collections
   * To get information about past garbage collections for a registry, send a GET request to `/v2/registry/$REGISTRY_NAME/garbage-collections`.
   * @returns any The response will be a JSON object with a key of `garbage_collections`. This will be set to an array containing objects representing each past garbage collection. Each will contain the standard Garbage Collection attributes.
   * @throws ApiError
   */
  public registryListGarbageCollections({
    registryName,
    perPage = 20,
    page = 1,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * Number of items returned per page
     */
    perPage?: number;
    /**
     * Which 'page' of paginated results to return.
     */
    page?: number;
  }): CancelablePromise<{
    garbage_collections?: Array<{
      /**
       * A string specifying the UUID of the garbage collection.
       */
      uuid?: string;
      /**
       * The name of the container registry.
       */
      registry_name?: string;
      /**
       * The current status of this garbage collection.
       */
      status?:
        | "requested"
        | "waiting for write JWTs to expire"
        | "scanning manifests"
        | "deleting unreferenced blobs"
        | "cancelling"
        | "failed"
        | "succeeded"
        | "cancelled";
      /**
       * The time the garbage collection was created.
       */
      created_at?: string;
      /**
       * The time the garbage collection was last updated.
       */
      updated_at?: string;
      /**
       * The number of blobs deleted as a result of this garbage collection.
       */
      blobs_deleted?: number;
      /**
       * The number of bytes freed as a result of this garbage collection.
       */
      freed_bytes?: number;
    }>;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry/{registry_name}/garbage-collections",
      path: {
        registry_name: registryName,
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
   * Update Garbage Collection
   * To cancel the currently-active garbage collection for a registry, send a PUT request to `/v2/registry/$REGISTRY_NAME/garbage-collection/$GC_UUID` and specify one or more of the attributes below.
   * @returns any The response will be a JSON object with a key of `garbage_collection`. This will be a json object with attributes representing the currently-active garbage collection.
   * @throws ApiError
   */
  public registryUpdateGarbageCollection({
    registryName,
    garbageCollectionUuid,
    requestBody,
  }: {
    /**
     * The name of a container registry.
     */
    registryName: string;
    /**
     * The UUID of a garbage collection run.
     */
    garbageCollectionUuid: string;
    requestBody: {
      /**
       * A boolean value indicating that the garbage collection should be cancelled.
       */
      cancel?: boolean;
    };
  }): CancelablePromise<{
    garbage_collection?: {
      /**
       * A string specifying the UUID of the garbage collection.
       */
      uuid?: string;
      /**
       * The name of the container registry.
       */
      registry_name?: string;
      /**
       * The current status of this garbage collection.
       */
      status?:
        | "requested"
        | "waiting for write JWTs to expire"
        | "scanning manifests"
        | "deleting unreferenced blobs"
        | "cancelling"
        | "failed"
        | "succeeded"
        | "cancelled";
      /**
       * The time the garbage collection was created.
       */
      created_at?: string;
      /**
       * The time the garbage collection was last updated.
       */
      updated_at?: string;
      /**
       * The number of blobs deleted as a result of this garbage collection.
       */
      blobs_deleted?: number;
      /**
       * The number of bytes freed as a result of this garbage collection.
       */
      freed_bytes?: number;
    };
  }> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}",
      path: {
        registry_name: registryName,
        garbage_collection_uuid: garbageCollectionUuid,
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
   * List Registry Options (Subscription Tiers and Available Regions)
   * This endpoint serves to provide additional information as to which option values are available when creating a container registry.
   * There are multiple subscription tiers available for container registry. Each tier allows a different number of image repositories to be created in your registry, and has a different amount of storage and transfer included.
   * There are multiple regions available for container registry and controls where your data is stored.
   * To list the available options, send a GET request to `/v2/registry/options`.
   * @returns any The response will be a JSON object with a key called `options` which contains a key called `subscription_tiers` listing the available tiers.
   * @throws ApiError
   */
  public registryGetOptions(): CancelablePromise<{
    options?: {
      available_regions?: Array<string>;
      subscription_tiers?: Array<
        {
          /**
           * The name of the subscription tier.
           */
          name?: string;
          /**
           * The slug identifier of the subscription tier.
           */
          slug?: string;
          /**
           * The number of repositories included in the subscription tier. `0` indicates that the subscription tier includes unlimited repositories.
           */
          included_repositories?: number;
          /**
           * The amount of storage included in the subscription tier in bytes.
           */
          included_storage_bytes?: number;
          /**
           * A boolean indicating whether the subscription tier supports additional storage above what is included in the base plan at an additional cost per GiB used.
           */
          allow_storage_overage?: boolean;
          /**
           * The amount of outbound data transfer included in the subscription tier in bytes.
           */
          included_bandwidth_bytes?: number;
          /**
           * The monthly cost of the subscription tier in cents.
           */
          monthly_price_in_cents?: number;
          /**
           * The price paid in cents per GiB for additional storage beyond what is included in the subscription plan.
           */
          storage_overage_price_in_cents?: number;
        } & {
          /**
           * A boolean indicating whether your account it eligible to use a certain subscription tier.
           */
          eligible?: boolean;
          /**
           * If your account is not eligible to use a certain subscription tier, this will include a list of reasons that prevent you from using the tier.
           */
          eligibility_reasons?: Array<
            "OverRepositoryLimit" | "OverStorageLimit"
          >;
        }
      >;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/registry/options",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
