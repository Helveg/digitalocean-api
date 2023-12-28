/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class SshKeysService extends ApiService {
  /**
   * List All SSH Keys
   * To list all of the keys in your account, send a GET request to `/v2/account/keys`. The response will be a JSON object with a key set to `ssh_keys`. The value of this will be an array of ssh_key objects, each of which contains the standard ssh_key attributes.
   * @returns any A JSON object with the key set to `ssh_keys`. The value is an array of `ssh_key` objects, each of which contains the standard `ssh_key` attributes.
   * @throws ApiError
   */
  public sshKeysList({
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
      url: "/v2/account/keys",
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
   * Create a New SSH Key
   * To add a new SSH public key to your DigitalOcean account, send a POST request to `/v2/account/keys`. Set the `name` attribute to the name you wish to use and the `public_key` attribute to the full public key you are adding.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public sshKeysCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.
       */
      readonly id?: number;
      /**
       * A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.
       */
      readonly fingerprint?: string;
      /**
       * The entire public key string that was uploaded. Embedded into the root user's `authorized_keys` file if you include this key during Droplet creation.
       */
      public_key: string;
      /**
       * A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.
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
      url: "/v2/account/keys",
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
   * Retrieve an Existing SSH Key
   * To get information about a key, send a GET request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
   * The response will be a JSON object with the key `ssh_key` and value an ssh_key object which contains the standard ssh_key attributes.
   * @returns any A JSON object with the key set to `ssh_key`. The value is an `ssh_key` object containing the standard `ssh_key` attributes.
   * @throws ApiError
   */
  public sshKeysGet({
    sshKeyIdentifier,
  }: {
    /**
     * Either the ID or the fingerprint of an existing SSH key.
     */
    sshKeyIdentifier: number | string;
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/account/keys/{ssh_key_identifier}",
      path: {
        ssh_key_identifier: sshKeyIdentifier,
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
   * Update an SSH Key's Name
   * To update the name of an SSH key, send a PUT request to either `/v2/account/keys/$SSH_KEY_ID` or `/v2/account/keys/$SSH_KEY_FINGERPRINT`. Set the `name` attribute to the new name you want to use.
   * @returns any A JSON object with the key set to `ssh_key`. The value is an `ssh_key` object containing the standard `ssh_key` attributes.
   * @throws ApiError
   */
  public sshKeysUpdate({
    sshKeyIdentifier,
    requestBody,
  }: {
    /**
     * Either the ID or the fingerprint of an existing SSH key.
     */
    sshKeyIdentifier: number | string;
    /**
     * Set the `name` attribute to the new name you want to use.
     */
    requestBody: {
      /**
       * A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.
       */
      name?: string;
    };
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "PUT",
      url: "/v2/account/keys/{ssh_key_identifier}",
      path: {
        ssh_key_identifier: sshKeyIdentifier,
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
   * Delete an SSH Key
   * To destroy a public SSH key that you have in your account, send a DELETE request to `/v2/account/keys/$KEY_ID` or `/v2/account/keys/$KEY_FINGERPRINT`.
   * A 204 status will be returned, indicating that the action was successful and that the response body is empty.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public sshKeysDelete({
    sshKeyIdentifier,
  }: {
    /**
     * Either the ID or the fingerprint of an existing SSH key.
     */
    sshKeyIdentifier: number | string;
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
      url: "/v2/account/keys/{ssh_key_identifier}",
      path: {
        ssh_key_identifier: sshKeyIdentifier,
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
