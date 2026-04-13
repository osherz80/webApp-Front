import {
    Box,
    Container,
    Typography,
    Stack,
    CircularProgress,
    Snackbar,
    Alert
} from '@mui/material';
import MainLayout from '../components/common/MainLayout';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFeed } from '../hooks/useFeed';

import PostCard from '../components/feed/PostCard';
import EditPostDialog from '../components/feed/EditPostDialog';
import CommentDialog from '../components/feed/CommentDialog';
import ConfirmDialog from '../components/common/ConfirmDialog';

const FeedPage = () => {
    const {
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
        notification,
        deleteConfirm,
        isDeleting,
        handleCloseNotification
    } = useFeed();

    return (
        <MainLayout>
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <InfiniteScroll
                    dataLength={posts?.length || 0}
                    next={fetchPosts}
                    hasMore={hasMore}
                    loader={
                        <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                            <CircularProgress size={30} />
                        </Box>
                    }
                    endMessage={
                        <Typography align="center" sx={{ p: 4, color: 'text.secondary' }}>
                            You've seen all the books! Go read some more.
                        </Typography>
                    }
                >
                    <Stack spacing={4}>
                        {posts?.map((post) => (
                            <PostCard 
                                key={post._id}
                                post={post}
                                currentUserId={user?.id}
                                onEdit={(p) => {
                                    setEditingPost(p);
                                    setEditMessage(p.recommendation);
                                    setEditImageFile(null);
                                    setRemoveImage(false);
                                }}
                                onDelete={handleDelete}
                                onOpenComments={handleOpenComments}
                            />
                        ))}
                    </Stack>
                </InfiniteScroll>

                <EditPostDialog 
                    post={editingPost}
                    message={editMessage}
                    editImageFile={editImageFile}
                    removeImage={removeImage}
                    isUpdating={isUpdating}
                    onClose={() => {
                        setEditingPost(null);
                        setEditImageFile(null);
                        setRemoveImage(false);
                    }}
                    onMessageChange={setEditMessage}
                    onImageChange={setEditImageFile}
                    onRemoveImageChange={setRemoveImage}
                    onUpdate={handleUpdate}
                />

                <CommentDialog 
                    post={selectedPostComments}
                    comments={comments}
                    newComment={newComment}
                    isLoading={isLoadingComments}
                    onClose={() => setSelectedPostComments(null)}
                    onCommentChange={setNewComment}
                    onAddComment={handleAddComment}
                />

                <ConfirmDialog 
                    open={deleteConfirm.open}
                    title="Delete Post"
                    message="Are you sure you want to delete this post? This action cannot be undone."
                    onClose={handleCloseDeleteConfirm}
                    onConfirm={handleConfirmDelete}
                    loading={isDeleting}
                />

                <Snackbar 
                    open={notification.open} 
                    autoHideDuration={2500} 
                    onClose={handleCloseNotification}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert 
                        onClose={handleCloseNotification} 
                        severity={notification.severity} 
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notification.message}
                    </Alert>
                </Snackbar>
            </Container>
        </MainLayout>
    );
};

export default FeedPage;
