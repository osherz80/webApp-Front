import axios from "axios";
import { store } from "../store";
import { setAuthSuccess, logout } from "../store/authSlice";

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true, // Crucial for cookies
});

// Request interceptor: Attach accessToken from Redux state
instance.interceptors.request.use((config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor: Handle 401 errors by refreshing the token
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If error is 401 and it's not a retry and not the refresh request itself
        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/auth/refresh')
        ) {
            originalRequest._retry = true;

            try {
                // Call refresh endpoint directly using history.post to avoid repeated interceptor logic if needed
                // Using the instance is fine as long as we handle the URL check above
                const response = await instance.post('/auth/refresh');
                const { accessToken, user, isAuth } = response.data;

                // Update the store
                store.dispatch(setAuthSuccess({ accessToken, user, isAuth }));

                // Update the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                // Retry the original request
                return instance(originalRequest);
            } catch (refreshError) {
                // If refresh fails, log the user out
                store.dispatch(logout());
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default instance;
