/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class CertificatesService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Certificates
   * To list all of the certificates available on your account, send a GET request to `/v2/certificates`.
   * @returns any The result will be a JSON object with a `certificates` key. This will be set to an array of certificate objects, each of which will contain the standard certificate attributes.
   * @throws ApiError
   */
  public certificatesList({
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
      certificates?: Array<{
        /**
         * A unique ID that can be used to identify and reference a certificate.
         */
        readonly id?: string;
        /**
         * A unique human-readable name referring to a certificate.
         */
        name?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents the certificate's expiration date.
         */
        readonly not_after?: string;
        /**
         * A unique identifier generated from the SHA-1 fingerprint of the certificate.
         */
        readonly sha1_fingerprint?: string;
        /**
         * A time value given in ISO8601 combined date and time format that represents when the certificate was created.
         */
        readonly created_at?: string;
        /**
         * An array of fully qualified domain names (FQDNs) for which the certificate was issued.
         */
        dns_names?: Array<string>;
        /**
         * A string representing the current state of the certificate. It may be `pending`, `verified`, or `error`.
         */
        readonly state?: "pending" | "verified" | "error";
        /**
         * A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt.
         */
        type?: "custom" | "lets_encrypt";
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
      url: "/v2/certificates",
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
   * Create a New Certificate
   * To upload new SSL certificate which you have previously generated, send a POST
   * request to `/v2/certificates`.
   *
   * When uploading a user-generated certificate, the `private_key`,
   * `leaf_certificate`, and optionally the `certificate_chain` attributes should
   * be provided. The type must be set to `custom`.
   *
   * When using Let's Encrypt to create a certificate, the `dns_names` attribute
   * must be provided, and the type must be set to `lets_encrypt`.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public certificatesCreate({
    requestBody,
  }: {
    requestBody:
      | ({
          /**
           * A unique human-readable name referring to a certificate.
           */
          name: string;
          /**
           * A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt.
           */
          type?: "custom" | "lets_encrypt";
        } & {
          /**
           * An array of fully qualified domain names (FQDNs) for which the certificate was issued. A certificate covering all subdomains can be issued using a wildcard (e.g. `*.example.com`).
           */
          dns_names: Array<string>;
        })
      | ({
          /**
           * A unique human-readable name referring to a certificate.
           */
          name: string;
          /**
           * A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt.
           */
          type?: "custom" | "lets_encrypt";
        } & {
          /**
           * The contents of a PEM-formatted private-key corresponding to the SSL certificate.
           */
          private_key: string;
          /**
           * The contents of a PEM-formatted public SSL certificate.
           */
          leaf_certificate: string;
          /**
           * The full PEM-formatted trust chain between the certificate authority's certificate and your domain's SSL certificate.
           */
          certificate_chain?: string;
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
      url: "/v2/certificates",
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
   * Retrieve an Existing Certificate
   * To show information about an existing certificate, send a GET request to `/v2/certificates/$CERTIFICATE_ID`.
   * @returns any The response will be a JSON object with a `certificate` key. This will be set to an object containing the standard certificate attributes.
   * @throws ApiError
   */
  public certificatesGet({
    certificateId,
  }: {
    /**
     * A unique identifier for a certificate.
     */
    certificateId: string;
  }): CancelablePromise<{
    certificate?: {
      /**
       * A unique ID that can be used to identify and reference a certificate.
       */
      readonly id?: string;
      /**
       * A unique human-readable name referring to a certificate.
       */
      name?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents the certificate's expiration date.
       */
      readonly not_after?: string;
      /**
       * A unique identifier generated from the SHA-1 fingerprint of the certificate.
       */
      readonly sha1_fingerprint?: string;
      /**
       * A time value given in ISO8601 combined date and time format that represents when the certificate was created.
       */
      readonly created_at?: string;
      /**
       * An array of fully qualified domain names (FQDNs) for which the certificate was issued.
       */
      dns_names?: Array<string>;
      /**
       * A string representing the current state of the certificate. It may be `pending`, `verified`, or `error`.
       */
      readonly state?: "pending" | "verified" | "error";
      /**
       * A string representing the type of the certificate. The value will be `custom` for a user-uploaded certificate or `lets_encrypt` for one automatically generated with Let's Encrypt.
       */
      type?: "custom" | "lets_encrypt";
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/certificates/{certificate_id}",
      path: {
        certificate_id: certificateId,
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
   * Delete a Certificate
   * To delete a specific certificate, send a DELETE request to
   * `/v2/certificates/$CERTIFICATE_ID`.
   *
   * @returns any Unexpected error
   * @throws ApiError
   */
  public certificatesDelete({
    certificateId,
  }: {
    /**
     * A unique identifier for a certificate.
     */
    certificateId: string;
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
      url: "/v2/certificates/{certificate_id}",
      path: {
        certificate_id: certificateId,
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
