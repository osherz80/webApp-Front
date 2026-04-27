import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPosts, deletePost, updatePost, getComments, addComment as apiAddComment } from '../api/Post.api';
import { uploadFile } from '../api/File.api';
import type { RootState } from '../store';
import type { Post, Comment } from '../types/post';

export const useFeed = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { user } = useSelector((state: RootState) => state.auth);

    const [editingPost, setEditingPost] = useState<Post | null>(null);
    const [editMessage, setEditMessage] = useState('');
    const [editImageFile, setEditImageFile] = useState<File | null>(null);
    const [removeImage, setRemoveImage] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const [isLoadingComments, setIsLoadingComments] = useState(false);

    const [selectedPostComments, setSelectedPostComments] = useState<Post | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState('');

    const [deleteConfirm, setDeleteConfirm] = useState<{ open: boolean; postId: string | null }>({
        open: false,
        postId: null
    });
    const [isDeleting, setIsDeleting] = useState(false);

    const [notification, setNotification] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error' | 'warning' | 'info';
    }>({
        open: false,
        message: '',
        severity: 'info'
    });

    const showNotification = (message: string, severity: 'success' | 'error' | 'warning' | 'info' = 'info') => {
        setNotification({ open: true, message, severity });
    };

    const handleCloseNotification = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setNotification((prev) => ({ ...prev, open: false }));
    };

    const fetchPosts = async (reset = false) => {
        try {
            const currentPage = reset ? 1 : page;
            const res = await getPosts(currentPage, 5);
            const newPosts = res.data.posts || [];
            const totalPages = res.data.totalPages || 0;

            if (reset) {
                setPosts(newPosts);
                setPage(2);
            } else {
                setPosts((prev) => [...prev, ...newPosts]);
                setPage(page + 1);
            }

            setHasMore(currentPage < totalPages);
        } catch (err) {
            console.error('Failed to fetch posts', err);
            showNotification('Failed to fetch posts', 'error');
        }
    };

    useEffect(() => {
        fetchPosts(true);
    }, []);

    const handleDelete = (postId: string) => {
        setDeleteConfirm({ open: true, postId });
    };

    const handleConfirmDelete = async () => {
        if (!deleteConfirm.postId) return;
        setIsDeleting(true);
        try {
            await deletePost(deleteConfirm.postId);
            setPosts(posts.filter(p => p._id !== deleteConfirm.postId));
            showNotification('Post deleted successfully', 'success');
            setDeleteConfirm({ open: false, postId: null });
        } catch (err) {
            showNotification('Failed to delete post', 'error');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCloseDeleteConfirm = () => {
        setDeleteConfirm({ open: false, postId: null });
    };

    const handleUpdate = async () => {
        if (!editingPost) return;
        setIsUpdating(true);
        try {
            let newImageUrl = editingPost.userImage;
            
            if (removeImage) {
                newImageUrl = '';
            }
            
            if (editImageFile) {
                const uploadRes = await uploadFile(editImageFile);
                newImageUrl = uploadRes.data.url;
            }
            await updatePost(editingPost._id, { recommendation: editMessage, userImage: newImageUrl });
            setPosts(posts.map(p => p._id === editingPost._id ? { ...p, recommendation: editMessage, userImage: newImageUrl } : p));
            setEditingPost(null);
            setEditImageFile(null);
            setRemoveImage(false);
            showNotification('Post updated successfully', 'success');
        } catch (err) {
            showNotification('Failed to update post', 'error');
        } finally {
            setIsUpdating(false);
        }
    };

    const handleOpenComments = async (post: Post) => {
        setSelectedPostComments(post);
        setIsLoadingComments(true);
        try {
            const res = await getComments(post._id);
            setComments(res.data);
        } catch (err) {
            console.error('Failed to fetch comments');
            showNotification('Failed to fetch comments', 'error');
        } finally {
            setIsLoadingComments(false);
        }
    };

    const handleAddComment = async () => {
        if (!selectedPostComments || !newComment.trim()) return;
        try {
            await apiAddComment(selectedPostComments._id, newComment);
            const commentRes = await getComments(selectedPostComments._id);
            setComments(commentRes.data);
            setNewComment('');
        } catch (err) {
            console.error('Failed to add comment', err);
            showNotification('Failed to add comment', 'error');
        }
    };

    return {
        posts,
        hasMore,
        user,
        editingPost,
        editMessage,
        editImageFile,
        removeImage,
        isUpdating,
        selectedPostComments,
        comments,
        newComment,
        isLoadingComments,
        notification,
        deleteConfirm,
        isDeleting,
        setEditingPost,
        setEditMessage,
        setEditImageFile,
        setRemoveImage,
        setSelectedPostComments,
        setNewComment,
        fetchPosts,
        handleDelete,
        handleConfirmDelete,
        handleCloseDeleteConfirm,
        handleUpdate,
        handleOpenComments,
        handleAddComment,
        handleCloseNotification
    };
};
