import { useGoogleLogin as useGoogleLoginReact } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setAuthSuccess, setLoading, setAuthFailure } from '../store/authSlice';
import { googleLogin } from '../api/Auth.api';

export const useGoogleLogin = () => {
    const dispatch = useDispatch();

    // auth with the server now
    const handleGoogleSuccess = async (token: string) => {
        dispatch(setLoading(true));
        try {
            const response = await googleLogin(token);
            const { accessToken, refreshToken, user, isAuth } = response.data;

            dispatch(setAuthSuccess({
                user,
                accessToken,
                refreshToken,
                isAuth
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