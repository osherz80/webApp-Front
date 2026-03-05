import type { GoogleBook } from '../../types/book';

export interface BookSearchProps {
    activeTab: number;
    setActiveTab: (tab: number) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: GoogleBook[];
    isLoading: boolean;
    error: string | null;
    manualTitle: string;
    setManualTitle: (val: string) => void;
    manualAuthor: string;
    setManualAuthor: (val: string) => void;
    manualDescription: string;
    setManualDescription: (val: string) => void;
    manualBookImageUrl: string | null;
    onSearch: () => void;
    onSelectBook: (book: GoogleBook) => void;
    onManualSubmit: () => void;
    onManualFileChange: (file: File | null) => void;
}


export interface GoogleBookSearchTabProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    onSearch: () => void;
    isLoading: boolean;
    searchResults: GoogleBook[];
    onSelectBook: (book: GoogleBook) => void;
}
export interface BookSearchListItemProps {
    book: GoogleBook;
    onSelect: (book: GoogleBook) => void;
}

export interface ManualBookEntryTabProps {
    manualTitle: string;
    setManualTitle: (val: string) => void;
    manualAuthor: string;
    setManualAuthor: (val: string) => void;
    manualDescription: string;
    setManualDescription: (val: string) => void;
    manualBookImageUrl: string | null;
    onManualSubmit: () => void;
    onManualFileChange: (file: File | null) => void;
}
