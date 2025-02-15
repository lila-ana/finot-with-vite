import axios, { AxiosRequestConfig, Method } from "axios";

interface RequestParams {
  url: string;
  method: Method;
  data?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
}

/**
 * Function to perform a CRUD operation by sending a request to the API
 * @param params The request parameters including url, method, and optional data
 * @returns The response data from the API
 */

export const crudRequest = async ({
  url,
  method,
  data,
  headers,
  params,
}: RequestParams) => {
  try {
    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      params,
    };

    if (data) {
      config.data = data;
    }
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
