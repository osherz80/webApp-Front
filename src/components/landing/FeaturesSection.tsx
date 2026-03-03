import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import {
    ForumOutlined,
    PsychologyOutlined,
    LibraryBooksOutlined
} from '@mui/icons-material';
import FeatureItem from './FeatureItem';

const FeaturesSection = () => (
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
);

export default FeaturesSection;
