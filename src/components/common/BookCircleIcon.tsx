import React from 'react';
import { Box } from '@mui/material';

interface BookCircleIconProps {
    size?: number;
}

const BookCircleIcon = ({ size = 160 }: BookCircleIconProps) => (
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
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="188" height="188" rx="94" stroke="black" stroke-width="4" />
            <path d="M93 66.132C86.7324 62.1175 79.443 59.989 72 60C67.572 59.9955 63.1756 60.7462 59 62.22C57.8015 62.6437 57.0002 63.7768 57 65.048V122.048C57.0001 123.022 57.473 123.935 58.2681 124.497C59.0633 125.059 60.0819 125.201 61 124.876C64.5333 123.63 68.2533 122.995 72 123C79.98 123 87.292 125.828 93 130.544V66.132V66.132M99 130.544C104.906 125.657 112.334 122.988 120 123C123.864 123 127.56 123.664 131 124.888C131.918 125.213 132.937 125.071 133.732 124.509C134.527 123.947 135 123.034 135 122.06V65.048C135 63.7768 134.198 62.6437 133 62.22C128.824 60.7462 124.428 59.9955 120 60C112.557 59.989 105.268 62.1175 99 66.132V130.544V130.544" fill="black" />
        </svg>

    </Box>
);

export default BookCircleIcon;
