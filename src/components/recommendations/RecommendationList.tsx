import React from 'react';
import { 
    Box, 
    Stack, 
    Typography, 
    Skeleton, 
    Divider,
    Fade,
    Alert,
    Button
} from '@mui/material';
import type { GoogleBook } from '../../types/book';
import BookSearchListItem from '../review/BookSearchListItem';

interface RecommendationListProps {
    books: GoogleBook[] | null;
    isLoading: boolean;
    error: string | null;
    onRetry?: () => void;
}

const RecommendationList: React.FC<RecommendationListProps> = ({ books, isLoading, error, onRetry }) => {
    // Shared skeleton component for consistency - now showing only one card
    const Skeletons = () => (
        <Stack spacing={2}>
            <Skeleton 
                variant="rounded" 
                height={120} 
                sx={{ borderRadius: 3 }} 
            />
        </Stack>
    );

    if (error) {
        return (
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
                {onRetry && <Button variant="outlined" onClick={onRetry}>Retry</Button>}
            </Box>
        );
    }

    // Initial load: no books yet, just loading
    if (isLoading && (!books || books.length === 0)) {
        return (
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>AI Recommendations</Typography>
                <Skeletons />
            </Box>
        );
    }

    if (!books) return null;

    if (books.length === 0 && !isLoading) {
        return (
            <Box sx={{ mt: 4, textAlign: 'center', py: 6, backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: 4 }}>
                <Typography variant="h6" color="text.secondary">
                    No recommendations found. Try posting some reviews first!
                </Typography>
            </Box>
        );
    }

    return (
        <Fade in timeout={800}>
            <Box sx={{ mt: 6 }}>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>Recommendations for you</Typography>
                    <Divider sx={{ flex: 1, opacity: 0.5 }} />
                </Stack>
                <Stack spacing={3}>
                    {/* Prepend skeleton if we are loading more to the top */}
                    {isLoading && (
                        <Box sx={{ mb: 1 }}>
                            <Skeletons />
                        </Box>
                    )}

                    {books.map((book) => (
                        <BookSearchListItem 
                            key={book.id} 
                            book={book} 
                            onSelect={() => {}} 
                        />
                    ))}
                </Stack>
            </Box>
        </Fade>
    );
};

export default RecommendationList;
