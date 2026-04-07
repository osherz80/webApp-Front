import React from 'react';
import { Card } from '@mui/material';
import type { PostCardProps } from './PostCard.types';
import PostHeader from './PostHeader';
import PostMedia from './PostMedia';
import PostContent from './PostContent';

const PostCard: React.FC<PostCardProps> = ({ 
    post, 
    currentUserId, 
    onEdit, 
    onDelete, 
    onOpenComments 
}) => {
    return (
        <Card sx={{ 
            borderRadius: 4, 
            overflow: 'hidden', 
            border: '1px solid #f1f5f9', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
        }}>
            <PostHeader 
                post={post} 
                currentUserId={currentUserId} 
                onEdit={onEdit} 
                onDelete={onDelete} 
            />
            
            <PostMedia post={post} />

            <PostContent 
                post={post} 
                onOpenComments={onOpenComments} 
                currentUserId={currentUserId}
            />
        </Card>
    );
};

export default PostCard;
