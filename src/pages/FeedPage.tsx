import { Box, Typography } from '@mui/material';
import MainLayout from '../components/common/MainLayout';

const FeedPage = () => {
    return (
        <MainLayout>
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="body1" color="text.secondary" sx={{ opacity: 0.5 }}>
                </Typography>
            </Box>
        </MainLayout>
    );
};

export default FeedPage;
