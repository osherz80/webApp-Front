import { useGoogleLogin as useGoogleLoginReact } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setAuthSuccess, setLoading, setAuthFailure } from '../store/authSlice';
import { googleLogin } from '../api/Auth.api';
import { LOCAL_STORAGE_KEYS } from '../utils/const';

export const useGoogleLogin = () => {
    const dispatch = useDispatch();

    // auth with the server now
    const handleGoogleSuccess = async (token: string) => {
        dispatch(setLoading(true));
        try {
            const response = await googleLogin(token);
            console.log("response googleLogin", response.data);

            const { user, isAuth, accessToken } = response.data;
            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
            dispatch(setAuthSuccess({
                user,
                isAuth,
            }));

            console.log('User logged in successfully:', user);
        } catch (error) {
            console.error('Backend verification failed:', error);
            dispatch(setAuthFailure('Google login failed'));
        }
    };

    const handleGoogleError = () => {
        console.error('Google Login Failed');
        dispatch(setAuthFailure('Google interaction failed'));
    };

    const loginWithGoogle = useGoogleLoginReact({
        onSuccess: (tokenResponse) => {
            handleGoogleSuccess(tokenResponse.access_token);
        },
        onError: handleGoogleError,
    });

    return {
        loginWithGoogle,
    };
};