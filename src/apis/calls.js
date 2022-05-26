import axios from "axios";

export const restApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "https://lucky-party.herokuapp.com",
});

restApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
