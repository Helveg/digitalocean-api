/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPIConfig } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class AccountService {
  constructor(public client: OpenAPIConfig) {}
  /**
   * Get User Information
   * To show information about the current user account, send a GET request to `/v2/account`.
   * @returns any A JSON object keyed on account with an excerpt of the current user account data.
   * @throws ApiError
   */
  public accountGet(): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/account",
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }
}
