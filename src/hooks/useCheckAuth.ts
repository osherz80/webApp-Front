import { useDispatch } from "react-redux";
import { setAuthSuccess, logout } from "../store/authSlice";
import { refreshSession, getProfile } from "../api/Auth.api";

export const useCheckAuth = () => {
    const dispatch = useDispatch();

    const handleRefresh = async () => {
        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            console.warn('No refresh token found, user must login');
            dispatch(logout());
            return null;
        }

        try {
            const response = await refreshSession(refreshToken);
            const { accessToken, refreshToken: newRefreshToken } = response.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            console.log('Tokens refreshed successfully');
            return accessToken;
        } catch (error) {
            console.error('Refresh failed, session expired');
            dispatch(logout());
            return null;
        }
    };

    const checkAuth = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                console.log("token", token);
                const response = await getProfile();
                const { user, accessToken, refreshToken, isAuth } = response.data;
                dispatch(setAuthSuccess({
                    user,
                    accessToken,
                    refreshToken,
                    isAuth
                }));

            } catch (err) {
                console.error('Auth check failed, attempting refresh', err);
                await handleRefresh();
            }
        }
    };

    return {
        checkAuth
    };
};