import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '../api/File.api';
import { addPost } from '../api/Post.api';
import type { GoogleBook } from '../types/book';
import { getErrorText, getGoogleBooks } from '../utils/addReview/googleBooksUtils';
import { checkValidation } from '../utils/addReview/reviewValidationUtils';

export const useAddReview = () => {
    const [activeTab, setActiveTab] = useState(0); // 0 for Search by Google Books API, 1 for Manual
    const [error, setError] = useState<string | null>(null);

    const handleSetActiveTab = (tab: number) => {
        setActiveTab(tab);
        setError(null);
    };

    // Search by Google Books API State
    const [searchQuery, setSearchQuery] = useState('');
    const handleSetSearchQuery = (query: string) => {
        setSearchQuery(query);
        setError(null);
    }
    const [searchResults, setSearchResults] = useState<GoogleBook[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedBook, setSelectedBook] = useState<GoogleBook | null>(null);
    
    // Manual Entry State
    const [manualTitle, setManualTitle] = useState('');
    const handleSetManualTitle = (val: string) => {
        setManualTitle(val);
        setError(null);
    }
    const [manualAuthor, setManualAuthor] = useState('');
    const handleSetManualAuthor = (val: string) => {
        setManualAuthor(val);
        setError(null);
    }
    const [manualDescription, setManualDescription] = useState('');
    const [manualBookImage, setManualBookImage] = useState<File | null>(null);
    const [manualBookImageUrl, setManualBookImageUrl] = useState<string | null>(null);

    // Review State
    const [recommendation, setRecommendation] = useState('');
    const [rating, setRating] = useState<number>(0);
    const [userImage, setUserImage] = useState<File | null>(null);
    const [userImageUrl, setUserImageUrl] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleSearch = async () => {
        if (!searchQuery.trim()) return;
        setIsLoading(true);
        setError(null);
        try {
            const response = await getGoogleBooks(searchQuery);
            setSearchResults(response.data.items || []);
        } catch (err: any) {
            setError(getErrorText(err));
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileChange = (file: File | null) => {
        if (file) {
            setUserImage(file);
            setUserImageUrl(URL.createObjectURL(file));
        } else {
            setUserImage(null);
            setUserImageUrl(null);
        }
    };

    const uploadImage = async (image: File | null) => {
        if(image){
            const uploadRes = await uploadFile(image);
            return uploadRes.data.url;
        }
        return '';
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const isManual = activeTab === 1;
        const error = checkValidation(isManual, selectedBook, manualTitle, manualAuthor, recommendation, rating);
        if (error) {
            setError(error);
            return;
        }
        
        setIsSubmitting(true);
        setError(null);

        try {
            const uploadedImageUrl = await uploadImage(userImage)
            const uploadedBookImageUrl = isManual ? 
                                           await uploadImage(manualBookImage) :
                                           (selectedBook!.volumeInfo.imageLinks?.thumbnail || '');

            const postData = {
                bookTitle: isManual ? manualTitle : selectedBook!.volumeInfo.title,
                bookAuthor: isManual ? manualAuthor : (selectedBook!.volumeInfo.authors?.join(', ') || 'Unknown Author'),
                bookDescription: isManual ? manualDescription : (selectedBook!.volumeInfo.description || ''),
                bookImage: uploadedBookImageUrl,
                userImage: uploadedImageUrl,
                recommendation,
                rating: Number(rating) || 0,
            };

            await addPost(postData);
            navigate('/feed');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to create post. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleManualSubmit = () => {
        if (manualTitle && manualAuthor) {
            setSelectedBook({
                id: 'manual',
                volumeInfo: { 
                    title: manualTitle, 
                    authors: [manualAuthor],
                    description: manualDescription,
                    imageLinks: { thumbnail: manualBookImageUrl }
                }
            } as any);
        } else {
            setError('Please provide both title and author.');
        }
    };

    const handleManualFileChange = (file: File | null) => {
        if (file) {
            setManualBookImage(file);
            setManualBookImageUrl(URL.createObjectURL(file));
        } else {
            setManualBookImage(null);
            setManualBookImageUrl(null);
        }
    };

    return {
        activeTab,
        setActiveTab: handleSetActiveTab,
        searchQuery,
        setSearchQuery: handleSetSearchQuery,
        searchResults,
        isLoading,
        selectedBook,
        setSelectedBook,
        manualTitle,
        setManualTitle: handleSetManualTitle,
        manualAuthor,
        setManualAuthor: handleSetManualAuthor,
        manualDescription,
        setManualDescription,
        manualBookImageUrl,
        recommendation,
        setRecommendation,
        rating,
        setRating,
        userImageUrl,
        isSubmitting,
        error,
        setError,
        handleSearch,
        handleFileChange,
        handleManualFileChange,
        handleSubmit,
        handleManualSubmit
    };
};
