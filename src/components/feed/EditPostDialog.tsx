import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    CircularProgress
} from '@mui/material';
import type { Post } from '../../types/post';
import EditPostForm from './EditPostForm';

interface EditPostDialogProps {
    post: Post | null;
    message: string;
    editImageFile: File | null;
    removeImage: boolean;
    isUpdating: boolean;
    onClose: () => void;
    onMessageChange: (val: string) => void;
    onImageChange: (file: File | null) => void;
    onRemoveImageChange: (remove: boolean) => void;
    onUpdate: () => void;
}

const EditPostDialog: React.FC<EditPostDialogProps> = ({ 
    post, 
    message, 
    editImageFile, 
    removeImage,
    isUpdating, 
    onClose, 
    onMessageChange, 
    onImageChange, 
    onRemoveImageChange,
    onUpdate 
}) => {
    return (
        <Dialog open={!!post} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Update Recommendation</DialogTitle>
            <DialogContent>
                <EditPostForm
                    message={message}
                    editImageFile={editImageFile}
                    existingImageUrl={post?.userImage}
                    removeImage={removeImage}
                    onMessageChange={onMessageChange}
                    onImageChange={onImageChange}
                    onRemoveImageChange={onRemoveImageChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} disabled={isUpdating}>Cancel</Button>
                <Button 
                    onClick={onUpdate} 
                    variant="contained" 
                    disabled={isUpdating}
                    startIcon={isUpdating ? <CircularProgress size={20} /> : undefined}
                >
                    {isUpdating ? 'Updating...' : 'Update'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditPostDialog;
