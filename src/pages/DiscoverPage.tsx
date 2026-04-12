import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MainLayout from '../components/common/MainLayout';
import RecommendationHero from '../components/recommendations/RecommendationHero';
import RecommendationList from '../components/recommendations/RecommendationList';
import { useAiRecommendations } from '../hooks/useAiRecommendations';

/**
 * DiscoverPage allows users to find new books through AI-powered recommendations.
 * It's structured to prioritize the "Get Recommendations" feature at the top.
 */
const DiscoverPage: React.FC = () => {
    const {
        data: recommendedBooks,
        isLoading,
        error,
        fetchRecommendations
    } = useAiRecommendations();

    return (
        <MainLayout>
            <Box component="main" sx={{ flex: 1, py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    {/* Page Header for SEO/Accessibility */}
                    <header>
                        <Typography
                            variant="h1"
                            sx={{
                                display: 'none' // Hidden but present for SEO 
                            }}
                        >
                            Discover New Books
                        </Typography>
                    </header>

                    {/* AI Recommendation Trigger Section */}
                    <section aria-labelledby="recommendation-hero">
                        <RecommendationHero
                            onTrigger={fetchRecommendations}
                            isLoading={isLoading}
                            hasExisting={!!recommendedBooks && recommendedBooks.length > 0}
                        />
                    </section>

                    {/* Results / List Section */}
                    <section aria-labelledby="recommendation-results">
                        <RecommendationList
                            books={recommendedBooks}
                            isLoading={isLoading}
                            error={error}
                            onRetry={fetchRecommendations}
                        />
                    </section>
                </Container>
            </Box>
        </MainLayout>
    );
};

export default DiscoverPage;
