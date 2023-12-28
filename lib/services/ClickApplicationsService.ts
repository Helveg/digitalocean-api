/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class ClickApplicationsService extends ApiService {
  /**
   * List 1-Click Applications
   * To list all available 1-Click applications, send a GET request to `/v2/1-clicks`. The `type` may
   * be provided as query paramater in order to restrict results to a certain type of 1-Click, for
   * example: `/v2/1-clicks?type=droplet`. Current supported types are `kubernetes` and `droplet`.
   *
   * The response will be a JSON object with a key called `1_clicks`. This will be set to an array of
   * 1-Click application data, each of which will contain the the slug and type for the 1-Click.
   *
   * @returns any A JSON object with a key of `1_clicks`.
   * @throws ApiError
   */
  public oneClicksList({
    type,
  }: {
    /**
     * Restrict results to a certain type of 1-Click.
     */
    type?: "droplet" | "kubernetes";
  }): CancelablePromise<any> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/1-clicks",
      query: {
        type: type,
      },
      errors: {
        401: `Unauthorized`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * Install Kubernetes 1-Click Applications
   * To install a Kubernetes 1-Click application on a cluster, send a POST request to
   * `/v2/1-clicks/kubernetes`. The `addon_slugs` and `cluster_uuid` must be provided as body
   * parameter in order to specify which 1-Click application(s) to install. To list all available
   * 1-Click Kubernetes applications, send a request to `/v2/1-clicks?type=kubernetes`.
   *
   * @returns any The response will verify that a job has been successfully created to install a 1-Click. The
   * post-installation lifecycle of a 1-Click application can not be managed via the DigitalOcean
   * API. For additional details specific to the 1-Click, find and view its
   * [DigitalOcean Marketplace](https://marketplace.digitalocean.com) page.
   *
   * @throws ApiError
   */
  public oneClicksInstallKubernetes({
    requestBody,
  }: {
    requestBody: {
      /**
       * An array of 1-Click Application slugs to be installed to the Kubernetes cluster.
       */
      addon_slugs: Array<string>;
      /**
       * A unique ID for the Kubernetes cluster to which the 1-Click Applications will be installed.
       */
      cluster_uuid: string;
    };
  }): CancelablePromise<{
    /**
     * A message about the result of the request.
     */
    message?: string;
  }> {
    return __request(this.client, {
      method: "POST",
      url: "/v2/1-clicks/kubernetes",
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
