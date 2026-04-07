import { useState } from 'react';
import { toggleLikePost } from '../api/Post.api';
import type { Post } from '../types/post';

export const usePostLike = (post: Post, currentUserId?: string) => {
    const defaultLikes = post.likes || [];
    const [likes, setLikes] = useState<string[]>(defaultLikes);
    
    const isLiked = currentUserId ? likes.includes(currentUserId) : false;

    const handleToggleLike = async () => {
        if (!currentUserId) return;
        
        const previousLikes = [...likes];
        if (isLiked) {
            setLikes(likes.filter(id => id !== currentUserId));
        } else {
            setLikes([...likes, currentUserId]);
        }

        try {
            await toggleLikePost(post._id);
        } catch (error) {
            console.error('Failed to toggle like', error);
            setLikes(previousLikes);
        }
    };

    return { likes, isLiked, handleToggleLike };
};
