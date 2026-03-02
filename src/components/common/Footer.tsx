import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                borderTop: '1px solid #f8fafc',
                bgcolor: '#ffffff',
                mt: 'auto'
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="body2"
                    color="#64748b"
                    align="center"
                    sx={{ fontWeight: 500 }}
                >
                    © {new Date().getFullYear()} BookShare Inc.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
