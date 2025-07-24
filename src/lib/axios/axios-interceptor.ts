import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getBaseUrl } from "../../utils/Utilities";

declare module "axios" {
  export interface AxiosRequestConfig {
    authRequired?: boolean;
  }
}

const getToken = (): string | null => {
  return localStorage.getItem("token");
};

const apiClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    console.log("Request Config:", config);

    const token = getToken();

    config.headers = config.headers || {};

    if (config.authRequired !== false && token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    const isFormData =
      config.data instanceof FormData ||
      config.headers?.["Content-Type"] === "multipart/form-data";

    config.headers["Content-Type"] = isFormData
      ? "multipart/form-data"
      : "application/json";
    return config;
  },
  (error: AxiosError) => {
    console.error("[Request Error]:", error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError) => {
    console.log("[Response Error]:", error);

    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.warn("Bad Request:", data);
          break;
        case 401:
          console.warn("Unauthorized. Redirecting to login...");
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          console.warn("Forbidden");
          break;
        case 404:
          console.warn("Not Found");
          break;
        case 500:
          console.error("Server Error");
          break;
        default:
          console.warn("Unhandled Error:", data);
          break;
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Axios config error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
