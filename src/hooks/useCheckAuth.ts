import { useDispatch } from "react-redux";
import { setAuthSuccess, logout } from "../store/authSlice";
import { refreshSession } from "../api/Auth.api";
import { useEffect, useRef } from "react";

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const hasRun = useRef(false);

    useEffect(() => {
        // Guard against React 18 StrictMode double-mount
        if (hasRun.current) return;
        hasRun.current = true;

        const checkAuth = async () => {
            try {
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