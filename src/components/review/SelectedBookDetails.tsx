import React from 'react';
import {
    Box,
    Typography,
    Button,
    Stack
} from '@mui/material';
import { EditNote } from '@mui/icons-material';
import type { SelectedBookDetailsProps } from './ReviewForm.types';

const SelectedBookDetails: React.FC<SelectedBookDetailsProps> = ({ 
    selectedBook, 
    onChangeBook 
}) => {
    return (
        <Stack direction="row" spacing={3} alignItems="flex-start">
            {selectedBook.volumeInfo.imageLinks?.thumbnail ? (
                <Box
                    component="img"
                    src={selectedBook.volumeInfo.imageLinks.thumbnail}
                    sx={{ 
                        width: 120, 
                        height: 180, 
                        objectFit: 'cover', 
                        borderRadius: 2, 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        flexShrink: 0
                    }}
                />
            ) : (
                <Box sx={{ 
                    width: 120, 
                    height: 180, 
                    bgcolor: '#f1f5f9', 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                }}>
                    <EditNote sx={{ fontSize: 40, color: '#94a3b8' }} />
                </Box>
            )}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, lineHeight: 1.2, mb: 0.5 }}>
                    {selectedBook.volumeInfo.title}
                </Typography>
                <Typography color="text.secondary" variant="subtitle1" sx={{ mb: 1.5 }}>
                    {selectedBook.volumeInfo.authors?.join(', ')}
                </Typography>
                {selectedBook.volumeInfo.description && (
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            mb: 2, 
                            color: 'text.secondary',
                            maxHeight: '100px',
                            overflowY: 'auto',
                            pr: 1,
                            lineHeight: 1.6,
                            '&::-webkit-scrollbar': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#e2e8f0',
                                borderRadius: '4px',
                            }
                        }}
                    >
                        {selectedBook.volumeInfo.description}
                    </Typography>
                )}
                <Button size="small" onClick={onChangeBook} color="error" sx={{ fontWeight: 600 }}>
                    Change Book
                </Button>
            </Box>
        </Stack>
    );
};

export default SelectedBookDetails;
