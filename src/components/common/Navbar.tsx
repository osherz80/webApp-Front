import { Box, Container, Stack, Link, useTheme, useMediaQuery } from '@mui/material';
import BrandLogo from './BrandLogo';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { label: 'Feed', path: '/feed' },
        { label: 'Discover', path: '/discover' },
        { label: 'Add Review', path: '/add-review' },
        { label: 'Profile', path: '/profile' },
    ];

    return (
        <Box
            component="nav"
            sx={{
                py: 2.5,
                borderBottom: '2px solid #f1f5f9',
                bgcolor: '#ffffff',
                position: 'sticky',
                top: 0,
                zIndex: 1100
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <BrandLogo />

                    {!isMobile && (
                        <Stack
                            direction="row"
                            spacing={4}
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            {navItems.map((item) => {
                                const isActive = location.pathname === item.path;
                                return (
                                    <Link
                                        key={item.label}
                                        component="button"
                                        variant="body1"
                                        onClick={() => navigate(item.path)}
                                        sx={{
                                            textDecoration: 'none',
                                            color: isActive ? '#10b981' : '#64748b',
                                            fontWeight: isActive ? 600 : 500,
                                            fontSize: '0.9rem',
                                            transition: 'color 0.2s ease',
                                            '&:hover': {
                                                color: '#10b981',
                                                textDecoration: 'none'
                                            }
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </Stack>
                    )}

                    {!isMobile && <Box sx={{ width: 156 }} />}
                </Stack>
            </Container>
        </Box>
    );
};

export default Navbar;
