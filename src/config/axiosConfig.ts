import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Interface for the custom Axios request configuration
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  metadata: {
    startTime: Date;
    endTime: Date;
  };
}

// Function to calculate the response time
const calculateResponseTime = (start: Date, end: Date): number => {
  return end.getTime() - start.getTime();
};

// Function to calculate the response size
const calculateResponseSize = <T>(response: AxiosResponse<T>): number => {
  return JSON.stringify(response.data).length + JSON.stringify(response.headers)?.length;
};

// Request interceptor
axios.interceptors.request.use((config: any) => {
  config.metadata = { startTime: new Date() };
  return config;
}, Promise.reject);

// Response interceptor
axios.interceptors.response.use(
  (response: any) => {
    (response.config as CustomAxiosRequestConfig).metadata.endTime = new Date();
    response.duration = calculateResponseTime(
      (response.config as CustomAxiosRequestConfig).metadata.startTime,
      (response.config as CustomAxiosRequestConfig).metadata.endTime
    );
    response.size = calculateResponseSize(response);
    return response;
  },
  (error) => {
    (error.config as CustomAxiosRequestConfig).metadata.endTime = new Date();
    error.duration = calculateResponseTime(
      (error.config as CustomAxiosRequestConfig).metadata.startTime,
      (error.config as CustomAxiosRequestConfig).metadata.endTime
    );
    return Promise.reject(error);
  }
);

export default axios;
