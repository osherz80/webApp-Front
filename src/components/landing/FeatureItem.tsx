import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

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
                color: '#1f2937',
                '& > svg': { fontSize: '2.4rem' }
            }}
        >
            {icon}
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {description}
        </Typography>
    </Stack>
);

export default FeatureItem;
