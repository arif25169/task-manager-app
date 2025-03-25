import axios from "axios";
import { config } from "./config";

const api = axios.create({
    baseURL: config.apiBaseUrl,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("tokenAuth");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
