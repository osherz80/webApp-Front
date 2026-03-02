import { Button } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';

export const GoogleLoginButton = ({ onLogin }: { onLogin?: () => void }) => {
    const { loginWithGoogle } = useAuth(onLogin);

    return (
        <Button
            variant="outlined"
            fullWidth
            startIcon={<img src="https://www.google.com/favicon.ico" alt="Google" width={18} height={18} />}
            sx={{
                py: 1.2,
                borderRadius: 2,
                textTransform: 'none',
                color: '#4b5563',
                borderColor: '#e5e7eb',
                '&:hover': { borderColor: '#d1d5db', bgcolor: '#f9fafb' }
            }}
            onClick={() => loginWithGoogle()}
        >
            Continue with Google
        </Button>
    );
};