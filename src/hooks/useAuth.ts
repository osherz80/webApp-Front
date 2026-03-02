import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export const useAuth = (onSuccess?: () => void) => {
    const handleGoogleSuccess = async (token: string) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/google', {
                token: token,
            });
            const { accessToken, refreshToken, user } = response.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            console.log('User logged in successfully:', user);

            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Backend verification failed:', error);
        }
    };

    const handleGoogleError = () => {
        console.error('Google Login Failed');
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