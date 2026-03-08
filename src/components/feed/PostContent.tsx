import React from 'react';
import {
    CardContent,
    Rating,
    Typography,
    Divider,
    Button
} from '@mui/material';
import { ChatBubbleOutline } from '@mui/icons-material';
import type { PostContentProps } from './PostCard.types';

const PostContent: React.FC<PostContentProps> = ({ post, onOpenComments }) => {
    return (
        <CardContent>
            <Rating value={post.rating} readOnly size="small" sx={{ mb: 1.5 }} />
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
                {post.recommendation}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Button
                startIcon={<ChatBubbleOutline />}
                size="small"
                color="inherit"
                onClick={() => onOpenComments(post)}
                sx={{ color: '#64748b' }}
            >
                Comments
            </Button>
        </CardContent>
    );
};

export default PostContent;
