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


