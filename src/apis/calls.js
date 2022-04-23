import axios from "axios";

export const restApi = axios.create({
  baseURL: "http://localhost:4000",
  // baseURL: process.env.APP_API_BASE_URL,
});

restApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
