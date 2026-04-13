import React from 'react';
import {
    CardContent,
    Rating,
    Typography,
    Divider,
    Button,
    Stack
} from '@mui/material';
import { ChatBubbleOutline, Favorite, FavoriteBorder } from '@mui/icons-material';
import type { PostContentProps } from './PostCard.types';
import { usePostLike } from '../../hooks/usePostLike';

const PostContent: React.FC<PostContentProps> = ({ post, onOpenComments, currentUserId }) => {
    const { likes, isLiked, handleToggleLike } = usePostLike(post, currentUserId);

    return (
        <CardContent>
            <Rating value={post.rating} readOnly size="small" sx={{ mb: 1.5 }} />
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
                {post.recommendation}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center">
                <Button
                    startIcon={isLiked ? <Favorite sx={{ color: 'error.main' }} /> : <FavoriteBorder />}
                    size="small"
                    color="inherit"
                    onClick={handleToggleLike}
                    disabled={!currentUserId}
                    sx={{ color: isLiked ? 'error.main' : '#64748b' }}
                >
                    {likes.length}
                </Button>

                <Button
                    startIcon={<ChatBubbleOutline />}
                    size="small"
                    color="inherit"
                    onClick={() => onOpenComments(post)}
                    sx={{ color: '#64748b' }}
                >
                    Comments
                </Button>
            </Stack>
        </CardContent>
    );
};

export default PostContent;
