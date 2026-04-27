import axios from "axios";
import { store } from "../store";
import { setAuthSuccess, logout } from "../store/authSlice";
import { API_BASE_URL } from "../config";

const instance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, 
});

instance.interceptors.request.use((config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/auth/refresh')
        ) {
            originalRequest._retry = true;

            try {
                const response = await instance.post('/auth/refresh');
                const { accessToken, user, isAuth } = response.data;
                store.dispatch(setAuthSuccess({ accessToken, user, isAuth }));
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return instance(originalRequest);
            } catch (refreshError) {
                store.dispatch(logout());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
