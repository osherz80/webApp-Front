import API from "./Axios";

export interface PostData {
    bookTitle: string;
    bookAuthor: string;
    bookDescription?: string;
    bookImage?: string;
    userImage?: string;
    recommendation: string;
    rating: number;
}

export const addPost = (postData: PostData) => {
    return API.post("/post", postData);
};

export const getPosts = (page: number, limit: number, sender?: string) => {
    const params: any = { page, limit };
    if (sender) params.sender = sender;
    return API.get("/post", { params });
};

export const updatePost = (id: string, postData: Partial<PostData>) => {
    return API.put(`/post/${id}`, postData);
};

export const deletePost = (id: string) => {
    return API.delete(`/post/${id}`);
};

export const addComment = (postId: string, message: string) => {
    return API.post("/comments", { postId, message });
};

export const getComments = (postId: string) => {
    return API.get("/comments", { params: { postId } });
};

export const getPostsByUserId = (userId: string, page: number, limit: number) => {
    const params = { page, limit };
    return API.get(`/post/user/${userId}`, { params });
};

export const toggleLikePost = (id: string) => {
    return API.put(`/post/${id}/like`);
};
