import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import type { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
            <Navbar />

            <Box component="main" sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {children}
            </Box>

            <Footer />
        </Box>
    );
};

export default MainLayout;
