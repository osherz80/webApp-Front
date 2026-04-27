import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { getAiRecommendations } from "../api/Ai.api";
import {
    setRecommendationsLoading,
    setRecommendationsError,
    addRecommendations
} from "../store/recommendationsSlice";

export const useAiRecommendations = () => {
    const dispatch = useDispatch();

    const { recommendations: data, isLoading, error } = useSelector((state: RootState) => state.recommendations);

    const fetchRecommendations = useCallback(async () => {
        dispatch(setRecommendationsLoading(true));
        dispatch(setRecommendationsError(null));

        try {
            const result = await getAiRecommendations();
            dispatch(addRecommendations(result));
        } catch (err: any) {
            console.error("Failed to fetch AI recommendations:", err);
            const message = err.response?.data?.message || err.message || "Failed to generate recommendations.";
            dispatch(setRecommendationsError(message));
        } finally {
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
