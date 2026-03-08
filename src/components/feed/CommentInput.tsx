import React from 'react';
import {
    Stack,
    TextField,
    IconButton
} from '@mui/material';
import { Send } from '@mui/icons-material';
import type { CommentInputProps } from './CommentDialog.types';

const CommentInput: React.FC<CommentInputProps> = ({ 
    newComment, 
    onCommentChange, 
    onAddComment 
}) => {
    return (
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <TextField
                fullWidth
                size="small"
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => onCommentChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && newComment.trim()) {
                        onAddComment();
                    }
                }}
            />
            <IconButton 
                color="primary" 
                onClick={onAddComment} 
                disabled={!newComment.trim()}
            >
                <Send />
            </IconButton>
        </Stack>
    );
};

export default CommentInput;
