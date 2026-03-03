import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "../utils/const";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
