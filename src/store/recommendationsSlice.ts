import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { GoogleBook } from '../types/book';

interface RecommendationsState {
    recommendations: GoogleBook[];
    isLoading: boolean;
    error: string | null;
}

const initialState: RecommendationsState = {
    recommendations: [],
    isLoading: false,
    error: null,
};

const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        setRecommendationsLoading: (state, action: PayloadAction<boolean>) => {
            console.log("rec load before", state.isLoading);
            state.isLoading = action.payload;
            console.log("rec load after", state.isLoading);
        },
        setRecommendationsError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        addRecommendations: (state, action: PayloadAction<GoogleBook[]>) => {
            const newBooks = action.payload;
            const existingIds = new Set(state.recommendations.map(b => b.id));

            // Filter only unique books
            const uniqueNewBooks = newBooks.filter(b => !existingIds.has(b.id));

            // Prepend new books
            state.recommendations = [...uniqueNewBooks, ...state.recommendations];
        },
        clearRecommendations: (state) => {
            state.recommendations = [];
            state.error = null;
            state.isLoading = false;
        }
    }
});

export const {
    setRecommendationsLoading,
    setRecommendationsError,
    addRecommendations,
    clearRecommendations
} = recommendationsSlice.actions;
export default recommendationsSlice.reducer;
