import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';
import type { CommentDialogProps } from './CommentDialog.types';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const CommentDialog: React.FC<CommentDialogProps> = ({ 
    post, 
    comments, 
    newComment, 
    isLoading, 
    onClose, 
    onCommentChange, 
    onAddComment 
}) => {
    return (
        <Dialog 
            open={!!post} 
            onClose={onClose} 
            fullWidth 
            maxWidth="sm" 
            disableRestoreFocus
        >
            <DialogTitle>Comments</DialogTitle>
            <DialogContent dividers>
                <CommentList comments={comments} isLoading={isLoading} />
                
                <CommentInput 
                    newComment={newComment} 
                    onCommentChange={onCommentChange} 
                    onAddComment={onAddComment} 
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CommentDialog;
