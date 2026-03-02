import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthSuccess, setLoading, setAuthFailure } from '../store/authSlice';

export const useAuth = () => {
    const dispatch = useDispatch();

    const handleGoogleSuccess = async (token: string) => {
        dispatch(setLoading(true));
        try {
            const response = await axios.post('http://localhost:3000/auth/google', {
                token: token,
            });
            const { accessToken, refreshToken, user } = response.data;

            dispatch(setAuthSuccess({
                user,
                accessToken,
                refreshToken
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

    const loginWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            handleGoogleSuccess(tokenResponse.access_token);
        },
        onError: handleGoogleError,
    });

    return {
        loginWithGoogle,
    };
};