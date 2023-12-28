/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class SizesService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * List All Droplet Sizes
   * To list all of available Droplet sizes, send a GET request to `/v2/sizes`.
   * The response will be a JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.
   * @returns any A JSON object with a key called `sizes`. The value of this will be an array of `size` objects each of which contain the standard size attributes.
   * @throws ApiError
   */
  public sizesList({
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
      sizes: Array<{
        /**
         * A human-readable string that is used to uniquely identify each size.
         */
        slug: string;
        /**
         * The amount of RAM allocated to Droplets created of this size. The value is represented in megabytes.
         */
        memory: number;
        /**
         * The integer of number CPUs allocated to Droplets of this size.
         */
        vcpus: number;
        /**
         * The amount of disk space set aside for Droplets of this size. The value is represented in gigabytes.
         */
        disk: number;
        /**
         * The amount of transfer bandwidth that is available for Droplets created in this size. This only counts traffic on the public interface. The value is given in terabytes.
         */
        transfer: number;
        /**
         * This attribute describes the monthly cost of this Droplet size if the Droplet is kept for an entire month. The value is measured in US dollars.
         */
        price_monthly: number;
        /**
         * This describes the price of the Droplet size as measured hourly. The value is measured in US dollars.
         */
        price_hourly: number;
        /**
         * An array containing the region slugs where this size is available for Droplet creates.
         */
        regions: Array<string>;
        /**
         * This is a boolean value that represents whether new Droplets can be created with this size.
         */
        available: boolean;
        /**
         * A string describing the class of Droplets created from this size. For example: Basic, General Purpose, CPU-Optimized, Memory-Optimized, or Storage-Optimized.
         */
        description: string;
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
      url: "/v2/sizes",
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
}
