import axios from "axios";

const getGoogleBooksApiKey = () => {
    return import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
}

const getGoogleBooksApiUrl = (searchQuery: string) => {
    return `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}${getGoogleBooksApiKey() ? `&key=${getGoogleBooksApiKey()}` : ''}`
}
 const getGoogleBooks = async (searchQuery: string) => {
    return await axios.get(getGoogleBooksApiUrl(searchQuery));
}
 const getErrorText = (err: any) => {
    switch (err.response?.status) {
        case 429:
            return 'Google Books API daily quota exceeded. Please use manual entry or try again later.';
        case 403:
            return 'Access to Google Books API is forbidden. Please check if the API is enabled in your Google Cloud Console and that your API key has "Books API" allowed in its restrictions.';
        default:
            return 'Failed to fetch books from Google. Please try again.';
    }
}

export { getGoogleBooksApiUrl, getGoogleBooks, getErrorText }