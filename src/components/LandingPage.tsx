import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Card,
    IconButton,
    InputAdornment,
    Divider,
    Link,
    Stack,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    EmailOutlined,
    LockOutlined,
    ForumOutlined,
    PsychologyOutlined,
    LibraryBooksOutlined,
    MenuOutlined
} from '@mui/icons-material';

// Custom Book Icon based on the image logo CIRCLE
const BookCircleIcon = ({ size = 160 }: { size?: number }) => (
    <Box
        sx={{
            width: size,
            height: size,
            borderRadius: '50%',
            border: '4px solid #1f2937',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'transparent',
            mb: 4
        }}
    >
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6V9.5zm0 2.5h6v1.5h-6V12zm0 2.5h6v1.5h-6v-1.5z" />
        </svg>
    </Box>
);

// Green Book Logo for Top Left
const BrandLogo = () => (
    <Stack direction="row" spacing={1} alignItems="center">
        <Box sx={{ color: '#10b981', display: 'flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13z" />
            </svg>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#1f2937', letterSpacing: '-0.02em' }}>
            BookShare
        </Typography>
    </Stack>
);

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps) => (
    <Stack alignItems="center" spacing={2} sx={{ textAlign: 'center', maxWidth: 300 }}>
        <Box
            sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                bgcolor: '#f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1f2937'
            }}
        >
            {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {description}
        </Typography>
    </Stack>
);

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
            {/* Navbar */}
            <Box sx={{ py: 3, borderBottom: '1px solid #f1f5f9' }}>
                <Container maxWidth="xl">
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <BrandLogo />
                        {isMobile && (
                            <IconButton edge="end" color="inherit">
                                <MenuOutlined />
                            </IconButton>
                        )}
                    </Stack>
                </Container>
            </Box>

            {/* Hero Content */}
            <Container maxWidth="xl" sx={{ flex: 1, py: { xs: 8, md: 12 } }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 8, md: 4 }}
                    alignItems="center"
                    justifyContent="space-around"
                >
                    {/* Left Side: Brand Identity */}
                    <Box sx={{ maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
                        <BookCircleIcon />
                        <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '4.5rem' }, fontWeight: 800, color: '#1f2937', mb: 2, letterSpacing: '-0.04em' }}>
                            BookShare
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, opacity: 0.8, maxWidth: 400 }}>
                            Your community for discovering and sharing great reads.
                        </Typography>
                    </Box>

                    {/* Right Side: Login Card */}
                    <Card
                        sx={{
                            width: '100%',
                            maxWidth: 440,
                            p: 5,
                            borderRadius: 6,
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
                            >
                                Continue with Google
                            </Button>

                            <Typography variant="caption" color="text.secondary" align="center">
                                By signing in, you agree to our <Link href="#" sx={{ color: 'inherit' }}>Terms</Link> and <Link href="#" sx={{ color: 'inherit' }}>Privacy Policy</Link>.
                            </Typography>
                        </Stack>
                    </Card>
                </Stack>
            </Container>

            {/* Features Section */}
            <Box sx={{ py: 12, borderTop: '1px solid #f1f5f9' }}>
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={8}
                        justifyContent="center"
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                    >
                        <FeatureItem
                            icon={<ForumOutlined />}
                            title="Social Feed"
                            description="Connect with fellow readers, Share reviews, and find your next favorite book."
                        />
                        <FeatureItem
                            icon={<PsychologyOutlined />}
                            title="Smart Search"
                            description="AI-powered discovery. Let our Ai to find you the perfect match."
                        />
                        <FeatureItem
                            icon={<LibraryBooksOutlined />}
                            title="Personal Library"
                            description="Manage your recommendations. Track what you've read, what you own, and build your ultimate wishlist."
                        />
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
