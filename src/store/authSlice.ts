import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '../types/auth';
import { LOCAL_STORAGE_KEYS } from '../utils/const';

const initialState: AuthState = {
    user: null,
    accessToken: localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN),
    isAuth: !!localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN),
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setAuthSuccess: (state, action: PayloadAction<{ user: User; accessToken: string; refreshToken: string; isAuth: boolean }>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isAuth = action.payload.isAuth;
            state.loading = false;
            state.error = null;

            localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, action.payload.accessToken);
            localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, action.payload.refreshToken);
        },
        setAuthFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuth = false;
            state.loading = false;
            state.error = null;

            localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
        }
    },
});

export const { setLoading, setAuthSuccess, setAuthFailure, logout } = authSlice.actions;
export default authSlice.reducer;
