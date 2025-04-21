import { httpErrors } from "@/config/httpError";
import axios, { AxiosError } from "axios";
import { message } from 'antd';

export const useAxios = () => {

  const http = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  // 添加请求拦截器
  http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  http.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const status = error?.status;

    const errorMessage = httpErrors[status as keyof typeof httpErrors] || '请求失败';
    message.info({ content: errorMessage, key: 'info' });
    // 处理错误信息
    return Promise.reject(error);
  });

  return {http}
}
