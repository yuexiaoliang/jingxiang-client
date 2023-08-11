import axios from 'axios';

const service = axios.create({
  baseURL: 'api/v1/',
  timeout: 5000
});

service.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
});

service.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response;
});

export default service;
