import React from 'react';
import {
    Box,
    CardMedia,
    Typography
} from '@mui/material';
import { formatImageUrl } from '../../utils/imageUtils';
import type { PostMediaProps } from './PostCard.types';

const PostMedia: React.FC<PostMediaProps> = ({ post }) => {
    return (
        <Box sx={{ position: 'relative', display: 'flex', bgcolor: '#f8fafc' }}>
            {post.bookImage && post.userImage && (
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        right: 16, 
                        width: 60, 
                        height: 90, 
                        zIndex: 2,
                        borderRadius: 1,
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        border: '2px solid white'
                    }}
                >
                    <img src={formatImageUrl(post.bookImage)} alt="Book cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            )}
            
            <CardMedia
                component="img"
                height="350"
                image={formatImageUrl(post.userImage) || formatImageUrl(post.bookImage)}
                alt={post.bookTitle}
                sx={{ objectFit: 'cover' }}
            />
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                color: '#ffffff'
            }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    {post.bookTitle}
                </Typography>
                <Typography variant="subtitle1" sx={{ opacity: 0.9, fontWeight: 500 }}>
                    by {post.bookAuthor}
                </Typography>
            </Box>
        </Box>
    );
};

export default PostMedia;
