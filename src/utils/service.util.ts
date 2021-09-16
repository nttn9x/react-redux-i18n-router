import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

import _get from "lodash/get";

import { HTTP_CODE } from "app-constants";

export function formatResponse(response: any): any {
  return response.data;
}

export function handleDataError(error: any) {
  let message;

  if (error.response) {
    if (error.response.status === HTTP_CODE.UNAUTHORIZED) {
      message = "Login failed";
    } else if (error.response.status === HTTP_CODE.INTERNAL_SERVER_ERROR) {
      message = "Internal Server Error";
    } else {
      message = _get(error.response.data, "error.message");
    }
  }

  if (!message || message.length < 1) {
    return { message: "Oops, something went wrong" };
  }

  return { message };
}

export function handleBeforeCallApi() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}

export function handleAfterCallApi(instance?: AxiosInstance) {
  const axiosDefault = instance || axios;
  // Add a response interceptor
  axiosDefault.interceptors.response.use(
    (response: any): any => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      return formatResponse(response);
    },
    (error: any) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      return Promise.reject(handleDataError(error));
    }
  );
}

export function setUpApi() {
  axios.defaults.baseURL = "/api";
  axios.defaults.headers.post["Content-Type"] = "application/json";

  handleBeforeCallApi();

  handleAfterCallApi();
}

export const callApi = async (options: AxiosRequestConfig) => {
  return axios(options);
};

export const callApiAuth = async (options: AxiosRequestConfig) => {
  return axios(options);
};
