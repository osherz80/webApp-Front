import {
    Box,
    Typography,
    Stack,
    CircularProgress,
    Snackbar,
    Alert,
} from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useMyPosts } from '../../hooks/useMyPosts';

import PostCard from '../feed/PostCard';
import EditPostDialog from '../feed/EditPostDialog';
import CommentDialog from '../feed/CommentDialog';
import ConfirmDialog from '../common/ConfirmDialog';

const MyPostsContent = () => {
    const {
        posts,
        hasMore,
        user,
        editingPost,
        editMessage,
        selectedPostComments,
        comments,
        newComment,
        isLoadingComments,
        setEditingPost,
        setEditMessage,
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
    } = useMyPosts();

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ maxWidth: 600, width: '100%', mx: 'auto' }}>
                <Box sx={{ px: { xs: 2, md: 0 }, pt: { xs: 2, md: 0 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                        My Posts
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                        Manage your shared recommendations and reviews.
                    </Typography>
                </Box>

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
                            {posts.length > 0 ? "You've reached the end of your posts." : "You haven't posted any reviews yet."}
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
                                }}
                                onDelete={handleDelete}
                                onOpenComments={handleOpenComments}
                            />
                        ))}
                    </Stack>
                </InfiniteScroll>
            </Box>

            <EditPostDialog 
                post={editingPost}
                message={editMessage}
                onClose={() => setEditingPost(null)}
                onMessageChange={setEditMessage}
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
        </Box>
    );
};

export default MyPostsContent;
