import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button
} from '@mui/material';
import type { Post } from '../../types/post';

interface EditPostDialogProps {
    post: Post | null;
    message: string;
    onClose: () => void;
    onMessageChange: (val: string) => void;
    onUpdate: () => void;
}

const EditPostDialog: React.FC<EditPostDialogProps> = ({ post, message, onClose, onMessageChange, onUpdate }) => {
    return (
        <Dialog open={!!post} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Update Recommendation</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => onMessageChange(e.target.value)}
                    sx={{ mt: 1 }}
                    autoFocus
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onUpdate} variant="contained">Update</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditPostDialog;
