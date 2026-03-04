import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Card,
    InputAdornment,
    Divider,
    Link,
    Stack,
    Tab,
    Tabs,
    Alert,
    CircularProgress
} from '@mui/material';
import {
    EmailOutlined,
    LockOutlined
} from '@mui/icons-material';
import { GoogleLoginButton } from './GoogleLoginButton';

import { useDispatch, useSelector } from 'react-redux';
import { setAuthSuccess, setLoading, setAuthFailure } from '../../store/authSlice';
import { login, register } from '../../api/Auth.api';
import type { RootState } from '../../store';

const LoginForm = () => {
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleTabChange = (_: React.SyntheticEvent, newValue: 'login' | 'signup') => {
        setMode(newValue);
        dispatch(setAuthFailure(''));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));

        try {
            const apiCall = mode === 'login' ? login : register;
            const { data } = await apiCall({ email, password });
            console.log("login response data", data);
            dispatch(setAuthSuccess({
                user: data.user,
                isAuth: data.isAuth,
                accessToken: data.accessToken
            }));
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Authentication failed. Please try again.';
            dispatch(setAuthFailure(errorMessage));
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 440,
                borderRadius: 2,
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                backgroundColor: '#ffffff'
            }}
        >
            <Tabs
                value={mode}
                onChange={handleTabChange}
                variant="fullWidth"
                sx={{
                    borderBottom: '1px solid #f1f5f9',
                    '& .MuiTab-root': {
                        py: 2.5,
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        color: '#64748b',
                    },
                    '& .Mui-selected': {
                        color: '#10b981 !important',
                    },
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#10b981',
                        height: 3,
                    }
                }}
            >
                <Tab label="Login" value="login" />
                <Tab label="Sign Up" value="signup" />
            </Tabs>

            <Box sx={{ p: { xs: 4, sm: 5 } }}>
                <Stack spacing={4}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: '#111827', letterSpacing: '-0.025em' }}>
                            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                            {mode === 'login'
                                ? 'Sign in to continue your reading journey'
                                : 'Join us and start your reading journey'}
                        </Typography>
                    </Box>

                    {error && (
                        <Alert severity="error" variant="outlined" sx={{ borderRadius: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3}>
                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
                                    Email address
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="medium"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlined fontSize="small" sx={{ color: '#94a3b8' }} />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#10b981' },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#10b981' },
                                        }
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
                                    Password
                                </Typography>
                                <TextField
                                    fullWidth
                                    size="medium"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockOutlined fontSize="small" sx={{ color: '#94a3b8' }} />
                                            </InputAdornment>
                                        ),
                                        sx: {
                                            borderRadius: 2,
                                            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#10b981' },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#10b981' },
                                        }
                                    }}
                                />
                            </Box>

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={loading}
                                sx={{
                                    bgcolor: '#10b981',
                                    '&:hover': { bgcolor: '#059669' },
                                    py: 1.5,
                                    borderRadius: 2,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.4)',
                                    mt: 1
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : (mode === 'login' ? 'Login' : 'Sign Up')}
                            </Button>
                        </Stack>
                    </form>

                    <Divider>
                        <Typography variant="caption" color="text.secondary" sx={{ px: 2, fontWeight: 500 }}>
                            Or continue with
                        </Typography>
                    </Divider>

                    <GoogleLoginButton />

                    <Typography variant="caption" color="text.secondary" align="center" sx={{ px: 2, lineHeight: 1.6 }}>
                        By signing in, you agree to our <Link href="#" sx={{ color: '#64748b', fontWeight: 600 }}>Terms</Link> and <Link href="#" sx={{ color: '#64748b', fontWeight: 600 }}>Privacy Policy</Link>.
                    </Typography>
                </Stack>
            </Box>
        </Card>
    );
};

export default LoginForm;

