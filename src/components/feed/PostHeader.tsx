import React from 'react';
import {
    Stack,
    Avatar,
    Box,
    Typography,
    IconButton,
    CardContent
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import type { PostHeaderProps } from './PostCard.types';

const PostHeader: React.FC<PostHeaderProps> = ({ post, currentUserId, onEdit, onDelete }) => {
    return (
        <CardContent sx={{ pb: 1 }}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={post?.sender?.profilePicture} sx={{ width: 40, height: 40 }} />
                    <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {post?.sender?.username}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {formatDistanceToNow(new Date(post?.createdAt))} ago
                        </Typography>
                    </Box>
                </Stack>
                {currentUserId === post?.sender?._id && (
                    <Box>
                        <IconButton size="small" onClick={() => onEdit(post)}>
                            <Edit fontSize="small" />
                        </IconButton>
                        <IconButton size="small" color="error" onClick={() => onDelete(post._id)}>
                            <Delete fontSize="small" />
                        </IconButton>
                    </Box>
                )}
            </Stack>
        </CardContent>
    );
};

export default PostHeader;
