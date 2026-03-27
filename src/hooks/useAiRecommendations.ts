import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { getAiRecommendations } from "../api/Ai.api";
import {
    setRecommendationsLoading,
    setRecommendationsError,
    addRecommendations
} from "../store/recommendationsSlice";

/**
 * Custom hook to handle the AI recommendation fetching logic with Redux persistence.
 */
export const useAiRecommendations = () => {
    const dispatch = useDispatch();

    // Access the recommendations state from Redux
    const { recommendations: data, isLoading, error } = useSelector((state: RootState) => state.recommendations);

    const fetchRecommendations = useCallback(async () => {
        // Start loading
        dispatch(setRecommendationsLoading(true));
        dispatch(setRecommendationsError(null));

        try {
            const result = await getAiRecommendations();
            // addRecommendations also sets isLoading to false internally
            dispatch(addRecommendations(result));
        } catch (err: any) {
            console.error("Failed to fetch AI recommendations:", err);
            const message = err.response?.data?.message || err.message || "Failed to generate recommendations.";
            dispatch(setRecommendationsError(message));
        } finally {
            // Guarantee loading stop in all cases
            dispatch(setRecommendationsLoading(false));
        }
    }, [dispatch]);

    return {
        data,
        isLoading,
        error,
        fetchRecommendations
    };
};
