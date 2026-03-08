import React from 'react';
import {
    Stack,
    Avatar,
    Box,
    Typography
} from '@mui/material';
import { API_BASE_URL } from '../../config';
import type { CommentItemProps } from './CommentDialog.types';

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    const avatarSrc = comment.sender?.picture 
        ? (comment.sender.picture.startsWith('http') 
            ? comment.sender.picture 
            : `${API_BASE_URL}/${comment.sender.picture}`) 
        : undefined;

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar 
                    src={avatarSrc} 
                    sx={{ width: 32, height: 32 }}
                >
                    {comment.sender?.username?.charAt(0).toUpperCase()}
                </Avatar>
                <Box sx={{ bgcolor: '#f1f5f9', p: 1.5, borderRadius: 3, flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        {comment.sender?.username || 'Unknown User'}
                    </Typography>
                    <Typography variant="body2">{comment.message}</Typography>
                </Box>
            </Stack>
        </Box>
    );
};

export default CommentItem;
