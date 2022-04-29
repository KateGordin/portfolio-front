import axios from "axios";
import { NotificationManager } from "react-notifications";

export const restApi = axios.create({
  baseURL: "https://lucky-party.herokuapp.com",
  // baseURL: process.env.APP_API_BASE_URL,
});

restApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// restApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       NotificationManager.error("Please log-in again", "Error");
//     } else {
//       NotificationManager.error("An error occured", "Error");
//     }
//     throw error;
//   }
// );
