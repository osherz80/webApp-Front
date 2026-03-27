import React from 'react';
import { 
    Box, 
    Typography, 
    Button, 
    Paper, 
    Stack, 
    alpha,
    useTheme 
} from '@mui/material';
import { AutoAwesome, CollectionsBookmark } from '@mui/icons-material';

interface RecommendationHeroProps {
    onTrigger: () => void;
    isLoading: boolean;
    hasExisting: boolean;
}

const RecommendationHero: React.FC<RecommendationHeroProps> = ({ onTrigger, isLoading, hasExisting }) => {
    const theme = useTheme();

    return (
        <Paper 
            elevation={0}
            sx={{
                p: { xs: 4, md: 6 },
                mb: 6,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: alpha('#ffffff', 0.1),
                    zIndex: 0
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -30,
                    left: 20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: alpha('#ffffff', 0.05),
                    zIndex: 0
                }
            }}
        >
            <Stack spacing={3} sx={{ position: 'relative', zIndex: 1, maxWidth: 600 }}>
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1.5,
                        backgroundColor: alpha('#ffffff', 0.15),
                        py: 0.5,
                        px: 2,
                        borderRadius: 10,
                        width: 'fit-content'
                    }}
                >
                    <AutoAwesome sx={{ fontSize: 18 }} />
                    <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: 0.5 }}>
                        AI-POWERED RECOMMENDATIONS
                    </Typography>
                </Box>

                <Box>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}>
                        {hasExisting ? 'Still hungry for more?' : 'Discover your next favorite book'}
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: 500, fontSize: '1.1rem' }}>
                        Browse books hand-picked for you by our AI, 
                        based on your previous reading experiences and shared thoughts.
                    </Typography>
                </Box>

                <Button 
                    variant="contained" 
                    size="large"
                    disabled={isLoading}
                    onClick={onTrigger}
                    startIcon={isLoading ? undefined : <CollectionsBookmark />}
                    sx={{ 
                        backgroundColor: '#ffffff',
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        fontSize: '1rem',
                        py: 1.5,
                        px: 4,
                        borderRadius: 3,
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        '&:hover': {
                            backgroundColor: alpha('#ffffff', 0.9),
                            transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease',
                        width: 'fit-content'
                    }}
                >
                    {isLoading 
                        ? 'Generating Recommendations...' 
                        : hasExisting ? 'Find More Recommendations' : 'Get My Recommendations'}
                </Button>
            </Stack>
        </Paper>
    );
};

export default RecommendationHero;
