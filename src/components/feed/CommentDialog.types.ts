import type { Post, Comment } from '../../types/post';

export interface CommentDialogProps {
    post: Post | null;
    comments: Comment[];
    newComment: string;
    isLoading: boolean;
    onClose: () => void;
    onCommentChange: (val: string) => void;
    onAddComment: () => void;
}

export interface CommentItemProps {
    comment: Comment;
}

export interface CommentInputProps {
    newComment: string;
    onCommentChange: (val: string) => void;
    onAddComment: () => void;
}
export interface CommentListProps {
    comments: Comment[];
    isLoading: boolean;
}
