import type { Post } from '../../types/post';

export interface PostCardProps {
    post: Post;
    currentUserId?: string;
    onEdit: (post: Post) => void;
    onDelete: (postId: string) => void;
    onOpenComments: (post: Post) => void;
}

export interface PostHeaderProps {
    post: Post;
    currentUserId?: string;
    onEdit: (post: Post) => void;
    onDelete: (postId: string) => void;
}

export interface PostMediaProps {
    post: Post;
}

export interface PostContentProps {
    post: Post;
    onOpenComments: (post: Post) => void;
}
