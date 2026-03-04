import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import BrandLogo from '../components/common/BrandLogo';
import BookCircleIcon from '../components/common/BookCircleIcon';
import LoginForm from '../components/auth/LoginForm';
import FeaturesSection from '../components/landing/FeaturesSection';

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
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
            <Container maxWidth="xl" sx={{ flex: 1, py: 8 }}>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 8, md: 4 }}
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Box sx={{ maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
                        <BookCircleIcon />
                        <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '4.5rem' }, fontWeight: 800, color: '#1f2937', mb: 2, letterSpacing: '-0.04em' }}>
                            BookShare
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{ fontWeight: 400, opacity: 0.8, maxWidth: 400 }}>
                            Your community for discovering and sharing great reads.
                        </Typography>
                    </Box>
                    <LoginForm />
                </Stack>
            </Container>
            <FeaturesSection />
            <Box component="footer" sx={{ py: 6, borderTop: '1px solid #f1f5f9', mt: 'auto' }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} BookShare • Built with MUI & Passion
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;
