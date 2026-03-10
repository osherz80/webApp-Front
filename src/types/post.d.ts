export interface Post {
    _id: string;
    bookTitle: string;
    bookAuthor: string;
    bookDescription?: string;
    bookImage?: string;
    userImage?: string;
    recommendation: string;
    rating: number;
    sender: {
        _id: string;
        username: string;
        profilePicture?: string;
    };
    createdAt: string;
}

export interface Comment {
    _id: string;
    message: string;
    sender: {
        _id: string;
        username: string;
        profilePicture?: string;
    };
    createdAt: string;
}
