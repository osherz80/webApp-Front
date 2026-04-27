import { useDispatch } from "react-redux";
import { setAuthSuccess, logout } from "../store/authSlice";
import { refreshSession } from "../api/Auth.api";
import { useEffect, useRef } from "react";

export const useCheckAuth = () => {
    const dispatch = useDispatch();
    const hasRun = useRef(false);

    useEffect(() => {
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
            } catch (err) {
                console.warn('No active session found');
                dispatch(logout());
            }
        };

        checkAuth();
    }, [dispatch]);
};