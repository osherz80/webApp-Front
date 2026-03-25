import { useState, useCallback } from "react";
import { getAiRecommendations } from "../api/Ai.api";
import type { GoogleBook } from "../types/book";

/**
 * Custom hook to handle the AI recommendation fetching logic.
 * Encapsulates state for data, loading, and potential errors.
 */
export const useAiRecommendations = () => {
    const [data, setData] = useState<GoogleBook[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRecommendations = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const recommendations = await getAiRecommendations();
            
            setData(prev => {
                const currentBooks = prev || [];
                // Create a Set of existing IDs for efficient deduplication
                const existingIds = new Set(currentBooks.map(b => b.id));
                
                // Only add books that aren't already in the list
                const newUniqueBooks = recommendations.filter(b => !existingIds.has(b.id));
                
                return [...newUniqueBooks, ...currentBooks];
            });
        } catch (err: any) {
            console.error("Failed to fetch AI recommendations:", err);
            setError(err.response?.data?.message || err.message || "Failed to generate recommendations. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }, []);

    const reset = useCallback(() => {
        setData(null);
        setError(null);
    }, []);

    return { data, isLoading, error, fetchRecommendations, reset };
};
