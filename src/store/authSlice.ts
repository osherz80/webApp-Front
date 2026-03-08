import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, User } from '../types/auth';

const initialState: AuthState = {
    user: null,
    accessToken: null,
    isAuth: false,
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
        setAuthSuccess: (state, action: PayloadAction<{ user: User; accessToken: string; isAuth: boolean }>) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.isAuth = action.payload.isAuth;
            state.loading = false;
            state.error = null;
        },
        setAuthFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuth = false;
            state.loading = false;
            state.error = null;
        },
        updateUser: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            }
        }
    },
});

export const { setLoading, setAuthSuccess, setAuthFailure, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
