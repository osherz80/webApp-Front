import { Box, Typography } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const FeedPage = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
            <Navbar />

            {/* Main Content (Empty Feed) */}
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="text.secondary" sx={{ opacity: 0.5 }}>
                    {/* Empty area as shown in screenshot */}
                </Typography>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default FeedPage;
