/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { ApiService } from "../core/ApiService";
import { request as __request } from "../core/request";

export class BillingService extends ApiService {
  /**
   * Get Customer Balance
   * To retrieve the balances on a customer's account, send a GET request to `/v2/customers/my/balance`.
   * @returns any The response will be a JSON object that contains the following attributes
   * @throws ApiError
   */
  public balanceGet(): CancelablePromise<{
    /**
     * Balance as of the `generated_at` time.  This value includes the `account_balance` and `month_to_date_usage`.
     */
    month_to_date_balance?: string;
    /**
     * Current balance of the customer's most recent billing activity.  Does not reflect `month_to_date_usage`.
     */
    account_balance?: string;
    /**
     * Amount used in the current billing period as of the `generated_at` time.
     */
    month_to_date_usage?: string;
    /**
     * The time at which balances were most recently generated.
     */
    generated_at?: string;
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/customers/my/balance",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List Billing History
   * To retrieve a list of all billing history entries, send a GET request to `/v2/customers/my/billing_history`.
   * @returns any The response will be a JSON object that contains the following attributes
   * @throws ApiError
   */
  public billingHistoryList(): CancelablePromise<
    {
      billing_history?: Array<{
        /**
         * Description of the billing history entry.
         */
        description?: string;
        /**
         * Amount of the billing history entry.
         */
        amount?: string;
        /**
         * ID of the invoice associated with the billing history entry, if  applicable.
         */
        invoice_id?: string;
        /**
         * UUID of the invoice associated with the billing history entry, if  applicable.
         */
        invoice_uuid?: string;
        /**
         * Time the billing history entry occurred.
         */
        date?: string;
        /**
         * Type of billing history entry.
         */
        type?:
          | "ACHFailure"
          | "Adjustment"
          | "AttemptFailed"
          | "Chargeback"
          | "Credit"
          | "CreditExpiration"
          | "Invoice"
          | "Payment"
          | "Refund"
          | "Reversal";
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
      /**
       * Information about the response itself.
       */
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
      url: "/v2/customers/my/billing_history",
      errors: {
        401: `Unauthorized`,
        404: `The resource was not found.`,
        429: `API Rate limit exceeded`,
        500: `Server error.`,
      },
    });
  }

  /**
   * List All Invoices
   * To retrieve a list of all invoices, send a GET request to `/v2/customers/my/invoices`.
   * @returns any The response will be a JSON object contains that contains a list of invoices under the `invoices` key, and the invoice preview under the `invoice_preview` key.
   * Each element contains the invoice summary attributes.
   * @throws ApiError
   */
  public invoicesList({
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
      invoices?: Array<{
        /**
         * The UUID of the invoice. The canonical reference for the invoice.
         */
        invoice_uuid?: string;
        /**
         * Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview.
         */
        amount?: string;
        /**
         * Billing period of usage for which the invoice is issued, in `YYYY-MM`  format.
         */
        invoice_period?: string;
        /**
         * Time the invoice was last updated.  This is only included with the invoice preview.
         */
        updated_at?: string;
      }>;
      /**
       * The invoice preview.
       */
      invoice_preview?: {
        /**
         * The UUID of the invoice. The canonical reference for the invoice.
         */
        invoice_uuid?: string;
        /**
         * Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview.
         */
        amount?: string;
        /**
         * Billing period of usage for which the invoice is issued, in `YYYY-MM`  format.
         */
        invoice_period?: string;
        /**
         * Time the invoice was last updated.  This is only included with the invoice preview.
         */
        updated_at?: string;
      };
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
      url: "/v2/customers/my/invoices",
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
   * Retrieve an Invoice by UUID
   * To retrieve the invoice items for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID`.
   * @returns any The response will be a JSON object with a key called `invoice_items`. This will be set to an array of invoice item objects.
   * @throws ApiError
   */
  public invoicesGetByUuid({
    invoiceUuid,
  }: {
    /**
     * UUID of the invoice
     */
    invoiceUuid: string;
  }): CancelablePromise<
    {
      invoice_items?: Array<{
        /**
         * Name of the product being billed in the invoice item.
         */
        product?: string;
        /**
         * UUID of the resource billing in the invoice item if available.
         */
        resource_uuid?: string;
        /**
         * ID of the resource billing in the invoice item if available.
         */
        resource_id?: string;
        /**
         * Description of the invoice item when it is a grouped set of usage, such  as DOKS or databases.
         */
        group_description?: string;
        /**
         * Description of the invoice item.
         */
        description?: string;
        /**
         * Billed amount of this invoice item. Billed in USD.
         */
        amount?: string;
        /**
         * Duration of time this invoice item was used and subsequently billed.
         */
        duration?: string;
        /**
         * Unit of time for duration.
         */
        duration_unit?: string;
        /**
         * Time the invoice item began to be billed for usage.
         */
        start_time?: string;
        /**
         * Time the invoice item stopped being billed for usage.
         */
        end_time?: string;
        /**
         * Name of the DigitalOcean Project this resource belongs to.
         */
        project_name?: string;
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
      url: "/v2/customers/my/invoices/{invoice_uuid}",
      path: {
        invoice_uuid: invoiceUuid,
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
   * Retrieve an Invoice CSV by UUID
   * To retrieve a CSV for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/csv`.
   * @returns string The response will be a CSV file.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public invoicesGetCsvByUuid({
    invoiceUuid,
  }: {
    /**
     * UUID of the invoice
     */
    invoiceUuid: string;
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
      url: "/v2/customers/my/invoices/{invoice_uuid}/csv",
      path: {
        invoice_uuid: invoiceUuid,
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
   * Retrieve an Invoice PDF by UUID
   * To retrieve a PDF for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/pdf`.
   * @returns binary The response will be a PDF file.
   * @returns any Unexpected error
   * @throws ApiError
   */
  public invoicesGetPdfByUuid({
    invoiceUuid,
  }: {
    /**
     * UUID of the invoice
     */
    invoiceUuid: string;
  }): CancelablePromise<
    | Blob
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
      url: "/v2/customers/my/invoices/{invoice_uuid}/pdf",
      path: {
        invoice_uuid: invoiceUuid,
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
   * Retrieve an Invoice Summary by UUID
   * To retrieve a summary for an invoice, send a GET request to `/v2/customers/my/invoices/$INVOICE_UUID/summary`.
   * @returns any To retrieve a summary for an invoice, send a GET request to  `/v2/customers/my/invoices/$INVOICE_UUID/summary`.
   * @throws ApiError
   */
  public invoicesGetSummaryByUuid({
    invoiceUuid,
  }: {
    /**
     * UUID of the invoice
     */
    invoiceUuid: string;
  }): CancelablePromise<{
    /**
     * UUID of the invoice
     */
    invoice_uuid?: string;
    /**
     * Billing period of usage for which the invoice is issued, in `YYYY-MM`  format.
     */
    billing_period?: string;
    /**
     * Total amount of the invoice, in USD.  This will reflect month-to-date usage in the invoice preview.
     */
    amount?: string;
    /**
     * Name of the DigitalOcean customer being invoiced.
     */
    user_name?: string;
    user_billing_address?: {
      /**
       * Street address line 1
       */
      address_line1?: string;
      /**
       * Street address line 2
       */
      address_line2?: string;
      /**
       * City
       */
      city?: string;
      /**
       * Region
       */
      region?: string;
      /**
       * Postal code
       */
      postal_code?: string;
      /**
       * Country (ISO2) code
       */
      country_iso2_code?: string;
      /**
       * Timestamp billing address was created
       */
      created_at?: string;
      /**
       * Timestamp billing address was updated
       */
      updated_at?: string;
    };
    /**
     * Company of the DigitalOcean customer being invoiced, if set.
     */
    user_company?: string;
    /**
     * Email of the DigitalOcean customer being invoiced.
     */
    user_email?: string;
    product_charges?: {
      /**
       * Description of usage charges
       */
      name?: string;
      /**
       * Total amount charged
       */
      amount?: string;
      /**
       * List of amount, and grouped aggregates by resource type.
       */
      items?: Array<{
        /**
         * Amount of the charge
         */
        amount?: string;
        /**
         * Description of the charge
         */
        name?: string;
        /**
         * Number of times the charge was applied
         */
        count?: string;
      }>;
    };
    overages?: {
      /**
       * Name of the charge
       */
      name?: string;
      /**
       * Total amount charged in USD
       */
      amount?: string;
    };
    taxes?: {
      /**
       * Name of the charge
       */
      name?: string;
      /**
       * Total amount charged in USD
       */
      amount?: string;
    };
    credits_and_adjustments?: {
      /**
       * Name of the charge
       */
      name?: string;
      /**
       * Total amount charged in USD
       */
      amount?: string;
    };
  }> {
    return __request(this.client, {
      method: "GET",
      url: "/v2/customers/my/invoices/{invoice_uuid}/summary",
      path: {
        invoice_uuid: invoiceUuid,
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
