import type { GoogleBook } from '../../types/book';

export interface ReviewFormProps {
    selectedBook: GoogleBook;
    rating: number;
    setRating: (val: number) => void;
    recommendation: string;
    setRecommendation: (val: string) => void;
    userImageUrl: string | null;
    isSubmitting: boolean;
    error: string | null;
    onFileChange: (file: File | null) => void;
    onSubmit: (e: React.FormEvent) => void;
    onChangeBook: () => void;
}

export interface SelectedBookDetailsProps {
    selectedBook: GoogleBook;
    onChangeBook: () => void;
}

export interface ReviewFormFieldsProps {
    rating: number;
    setRating: (val: number) => void;
    recommendation: string;
    setRecommendation: (val: string) => void;
    userImageUrl: string | null;
    isSubmitting: boolean;
    error: string | null;
    onFileChange: (file: File | null) => void;
    onSubmit: (e: React.FormEvent) => void;
}
