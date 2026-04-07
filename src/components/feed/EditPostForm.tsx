import React from 'react';
import {
    TextField,
    Box,
    Typography,
    Button,
    IconButton
} from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import { formatImageUrl } from '../../utils/imageUtils';

interface EditPostFormProps {
    message: string;
    editImageFile: File | null;
    existingImageUrl?: string;
    removeImage: boolean;
    onMessageChange: (val: string) => void;
    onImageChange: (file: File | null) => void;
    onRemoveImageChange: (remove: boolean) => void;
}

const EditPostForm: React.FC<EditPostFormProps> = ({ 
    message, 
    editImageFile, 
    existingImageUrl,
    removeImage,
    onMessageChange, 
    onImageChange,
    onRemoveImageChange
}) => {
    return (
        <>
            <TextField
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => onMessageChange(e.target.value)}
                sx={{ mt: 1 }}
                autoFocus
            />
            <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                    Change Image (Optional)
                </Typography>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="edit-upload-button"
                    type="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            onImageChange(e.target.files[0]);
                            onRemoveImageChange(false);
                        }
                    }}
                />
                <label htmlFor="edit-upload-button">
                    <Button
                        variant="outlined"
                        component="span"
                        startIcon={<CloudUpload />}
                        sx={{ mb: 2 }}
                    >
                        Select New Image
                    </Button>
                </label>

                {(editImageFile || (existingImageUrl && !removeImage)) && (
                    <Box sx={{ position: 'relative', width: 'fit-content' }}>
                        <Box
                            component="img"
                            src={editImageFile ? URL.createObjectURL(editImageFile) : formatImageUrl(existingImageUrl)}
                            sx={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 2 }}
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
                            onClick={() => {
                                if (editImageFile) {
                                    onImageChange(null);
                                } else {
                                    onRemoveImageChange(true);
                                }
                            }}
                        >
                            <Delete fontSize="small" color="error" />
                        </IconButton>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default EditPostForm;
