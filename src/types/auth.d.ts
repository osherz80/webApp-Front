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

export interface LoginResponse {
    accessToken: string;
    user: User;
    isAuth: boolean;
}

export interface ProfileResponse {
    user: User;
    isAuth: boolean;
}