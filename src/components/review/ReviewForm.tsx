import React from 'react';
import {
    Box,
    Stack,
    Paper
} from '@mui/material';
import type { ReviewFormProps } from './ReviewForm.types';
import SelectedBookDetails from './SelectedBookDetails';
import ReviewFormFields from './ReviewFormFields';

const ReviewForm: React.FC<ReviewFormProps> = ({
    selectedBook,
    rating,
    setRating,
    recommendation,
    setRecommendation,
    userImageUrl,
    isSubmitting,
    error,
    onFileChange,
    onSubmit,
    onChangeBook
}) => {
    return (
        <Paper elevation={0} sx={{ p: 4, border: '1px solid #e2e8f0', borderRadius: 4 }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 4 }}>
                <SelectedBookDetails 
                    selectedBook={selectedBook} 
                    onChangeBook={onChangeBook} 
                />
            </Stack>

            <Box sx={{ mt: 2 }}>
                <ReviewFormFields
                    rating={rating}
                    setRating={setRating}
                    recommendation={recommendation}
                    setRecommendation={setRecommendation}
                    userImageUrl={userImageUrl}
                    isSubmitting={isSubmitting}
                    error={error}
                    onFileChange={onFileChange}
                    onSubmit={onSubmit}
                />
            </Box>
        </Paper>
    );
};

export default ReviewForm;
