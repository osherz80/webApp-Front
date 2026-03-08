import { API_BASE_URL } from "../config";

export const formatImageUrl = (url: string | null | undefined): string => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    if (url.startsWith('uploads/')) return `${API_BASE_URL}/${url}`;
    return url;
};
