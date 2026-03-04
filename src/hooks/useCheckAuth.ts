import { useDispatch } from "react-redux";
import { setAuthSuccess, logout } from "../store/authSlice";
import { refreshSession } from "../api/Auth.api";
import { useEffect } from "react";

export const useCheckAuth = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Attempt to refresh the session - browser sends HttpOnly cookie automatically
                const response = await refreshSession();
                const { user, isAuth, accessToken } = response.data;

                dispatch(setAuthSuccess({
                    user,
                    isAuth,
                    accessToken
                }));
                console.log('Silent refresh successful');
            } catch (err) {
                console.warn('No active session found');
                dispatch(logout());
            }
        };

        checkAuth();
    }, [dispatch]);
};