import React from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Card,
    InputAdornment,
    Divider,
    Link,
    Stack
} from '@mui/material';
import {
    EmailOutlined,
    LockOutlined
} from '@mui/icons-material';
import { GoogleLoginButton } from './GoogleLoginButton';

const LoginForm = () => (
    <Card
        sx={{
            width: '100%',
            maxWidth: 440,
            p: 5,
            borderRadius: 2,
            boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
        }}
    >
        <Stack spacing={4}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1f2937' }}>
                    Welcome Back
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Sign in to continue your reading journey
                </Typography>
            </Box>

            <Stack spacing={3}>
                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
                        Email address
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="you@example.com"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlined fontSize="small" color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
                        Password
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        type="password"
                        placeholder="••••••••"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlined fontSize="small" color="action" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                <Link href="#" variant="body2" sx={{ color: '#10b981', fontWeight: 600, textDecoration: 'none', alignSelf: 'flex-start' }}>
                    Forgot password?
                </Link>

                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                        bgcolor: '#10b981',
                        '&:hover': { bgcolor: '#0d9488' },
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: '1rem',
                        textTransform: 'none'
                    }}
                >
                    Login
                </Button>
            </Stack>

            <Divider>
                <Typography variant="caption" color="text.secondary" sx={{ px: 1 }}>
                    Or continue with
                </Typography>
            </Divider>

            <GoogleLoginButton />

            <Typography variant="caption" color="text.secondary" align="center">
                By signing in, you agree to our <Link href="#" sx={{ color: 'inherit' }}>Terms</Link> and <Link href="#" sx={{ color: 'inherit' }}>Privacy Policy</Link>.
            </Typography>
        </Stack>
    </Card>
);

export default LoginForm;
