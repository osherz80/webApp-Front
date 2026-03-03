export interface User {
    id: string;
    email: string;
    name?: string;
    picture?: string;
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuth: boolean;
    loading: boolean;
    error: string | null;
}
