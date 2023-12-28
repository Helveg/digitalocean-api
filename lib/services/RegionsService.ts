/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class RegionsService extends ApiService {
  /**
   * List All Data Center Regions
   * To list all of the regions that are available, send a GET request to `/v2/regions`.
   * The response will be a JSON object with a key called `regions`. The value of this will be an array of `region` objects, each of which will contain the standard region attributes.
   * @returns any A JSON object with a key set to `regions`. The value is an array of `region` objects, each of which contain the standard `region` attributes.
   * @throws ApiError
   */
  public regionsList({
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
      regions: Array<{
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
      url: "/v2/regions",
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
