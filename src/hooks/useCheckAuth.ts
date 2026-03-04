import { useDispatch } from "react-redux";
import { setAuthSuccess } from "../store/authSlice";
import { getProfile } from "../api/Auth.api";
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
                    const { user, isAuth } = response.data;
                    dispatch(setAuthSuccess({
                        user,
                        isAuth
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