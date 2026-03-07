import React from 'react';
import {
    Stack,
    Box,
    Typography,
    CircularProgress
} from '@mui/material';
import CommentItem from './CommentItem';
import type { CommentListProps } from './CommentDialog.types';

const CommentList: React.FC<CommentListProps> = ({ comments, isLoading }) => {
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress size={24} />
            </Box>
        );
    }

    return (
        <Stack spacing={2} sx={{ mb: 2 }}>
            {comments.length === 0 ? (
                <Typography color="text.secondary" align="center">
                    No comments yet.
                </Typography>
            ) : (
                comments.map((comment) => (
                    <CommentItem key={comment._id} comment={comment} />
                ))
            )}
        </Stack>
    );
};

export default CommentList;
