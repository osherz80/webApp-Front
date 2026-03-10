export interface User {
    id: string;
    email: string;
    username?: string;
    profilePicture?: string;
    bio?: string;
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}