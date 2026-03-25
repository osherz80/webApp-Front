import API from "./Axios";
import type { GoogleBook } from "../types/book";

export const getAiRecommendations = async (): Promise<GoogleBook[]> => {
    const response = await API.get<GoogleBook[]>("/post/ai-recommendation");
    return response.data;
};
