export interface User {
    id: string;
    email: string;
    username?: string;
    picture?: string;
}

export interface AuthState {
    user: User | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}