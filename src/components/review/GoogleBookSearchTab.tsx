import React from 'react';
import {
    Box,
    Stack,
    TextField,
    Button,
    CircularProgress
} from '@mui/material';
import { Search } from '@mui/icons-material';
import type { GoogleBookSearchTabProps } from './BookSearch.types';
import BookSearchListItem from './BookSearchListItem';

const GoogleBookSearchTab: React.FC<GoogleBookSearchTabProps> = ({
    searchQuery,
    setSearchQuery,
    onSearch,
    isLoading,
    searchResults,
    onSelectBook
}) => {
    return (
        <Box>
            <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                <TextField
                    fullWidth
                    placeholder="Search books by title, author, or ISBN..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                />
                <Button
                    variant="contained"
                    startIcon={<Search />}
                    onClick={onSearch}
                    disabled={isLoading}
                    sx={{ minWidth: 120 }}
                >
                    Search
                </Button>
            </Stack>

            {isLoading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            <Stack spacing={2}>
                {searchResults.map((book) => (
                    <BookSearchListItem 
                        key={book.id} 
                        book={book} 
                        onSelect={onSelectBook} 
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default GoogleBookSearchTab;
