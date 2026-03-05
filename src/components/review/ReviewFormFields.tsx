import React from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Rating,
    IconButton,
    CircularProgress,
    Alert
} from '@mui/material';
import { CloudUpload, Delete, Send } from '@mui/icons-material';
import type { ReviewFormFieldsProps } from './ReviewForm.types';

const ReviewFormFields: React.FC<ReviewFormFieldsProps> = ({
    rating,
    setRating,
    recommendation,
    setRecommendation,
    userImageUrl,
    isSubmitting,
    error,
    onFileChange,
    onSubmit
}) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onFileChange(e.target.files[0]);
        }
    };

    return (
        <Box component="form" onSubmit={onSubmit}>
            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Your Rating
            </Typography>
            <Rating
                value={rating}
                onChange={(_, newValue) => setRating(newValue || 0)}
                size="large"
                sx={{ mb: 3 }}
            />

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Recommendation
            </Typography>
            <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="What did you think about this book?"
                value={recommendation}
                onChange={(e) => setRecommendation(e.target.value)}
                sx={{ mb: 3 }}
            />

            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                Upload Book Image (Optional)
            </Typography>
            <Box sx={{ mb: 4 }}>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="upload-button"
                    type="file"
                    onChange={handleFileChange}
                />
                <label htmlFor="upload-button">
                    <Button
                        variant="outlined"
                        component="span"
                        startIcon={<CloudUpload />}
                        sx={{ mb: 2 }}
                    >
                        Select Image
                    </Button>
                </label>

                {userImageUrl && (
                    <Box sx={{ position: 'relative', width: 'fit-content' }}>
                        <Box
                            component="img"
                            src={userImageUrl}
                            sx={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 2 }}
                        />
                        <IconButton
                            sx={{
                                position: 'absolute',
                                top: -10,
                                right: -10,
                                bgcolor: '#ffffff',
                                '&:hover': { bgcolor: '#f1f5f9' },
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            size="small"
                            onClick={() => onFileChange(null)}
                        >
                            <Delete fontSize="small" color="error" />
                        </IconButton>
                    </Box>
                )}
            </Box>

            <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                sx={{ py: 1.5, fontSize: '1.1rem' }}
            >
                {isSubmitting ? 'Posting...' : 'Share Recommendation'}
            </Button>
        </Box>
    );
};

export default ReviewFormFields;
