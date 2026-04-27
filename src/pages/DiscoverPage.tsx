import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MainLayout from '../components/common/MainLayout';
import RecommendationHero from '../components/recommendations/RecommendationHero';
import RecommendationList from '../components/recommendations/RecommendationList';
import { useAiRecommendations } from '../hooks/useAiRecommendations';

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
                    <header>
                        <Typography
                            variant="h1"
                            sx={{
                                display: 'none'
                            }}
                        >
                            Discover New Books
                        </Typography>
                    </header>

                    <section aria-labelledby="recommendation-hero">
                        <RecommendationHero
                            onTrigger={fetchRecommendations}
                            isLoading={isLoading}
                            hasExisting={!!recommendedBooks && recommendedBooks.length > 0}
                        />
                    </section>

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
