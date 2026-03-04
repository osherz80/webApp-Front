import { useDispatch } from "react-redux";
import { setAuthSuccess, logout } from "../store/authSlice";
import { refreshSession, getProfile } from "../api/Auth.api";
import { LOCAL_STORAGE_KEYS } from "../utils/const";
import { useEffect } from "react";

export const useCheckAuth = () => {
    const dispatch = useDispatch();


    useEffect(() => {

        const handleRefresh = async () => {

        };

        const checkAuth = async () => {
            const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
            console.log("checkAuth", accessToken);
            if (accessToken) {
                try {
                    console.log("token in try", accessToken);
                    const response = await getProfile();
                    console.log("response profile", response.data);
                    const user = response.data;
                    dispatch(setAuthSuccess({
                        user,
                        isAuth: true
                    }));

                } catch (err) {
                    console.error('Auth check failed, attempting refresh', err);
                    await handleRefresh();
                }
            }
        };

        checkAuth();
    }, []);
};