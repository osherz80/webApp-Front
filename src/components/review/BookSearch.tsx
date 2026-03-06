import React from 'react';
import {
    Box,
    Button,
    Alert,
    Tabs,
    Tab
} from '@mui/material';
import { Search, EditNote } from '@mui/icons-material';
import type { BookSearchProps } from './BookSearch.types';
import GoogleBookSearchTab from './GoogleBookSearchTab';
import ManualBookEntryTab from './ManualBookEntryTab';

const BookSearch: React.FC<BookSearchProps> = ({
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    error,
    manualTitle,
    setManualTitle,
    manualAuthor,
    setManualAuthor,
    manualDescription,
    setManualDescription,
    manualBookImageUrl,
    onSearch,
    onSelectBook,
    onManualSubmit,
    onManualFileChange
}) => {
    return (
        <Box>
            <Tabs 
                value={activeTab} 
                onChange={(_, newValue) => setActiveTab(newValue)} 
                sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Search Google Books" icon={<Search />} iconPosition="start" />
                <Tab label="Manual Entry" icon={<EditNote />} iconPosition="start" />
            </Tabs>

            {error && (
                <Alert 
                    severity={error.includes('quota') ? 'warning' : 'error'} 
                    sx={{ mb: 3 }} 
                    action={
                        error.includes('quota') && activeTab === 0 ? (
                            <Button color="inherit" size="small" onClick={() => setActiveTab(1)}>
                                Switch to Manual
                            </Button>
                        ) : undefined
                    }
                >
                    {error}
                </Alert>
            )}

            {activeTab === 0 ? (
                <GoogleBookSearchTab 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    onSearch={onSearch}
                    isLoading={isLoading}
                    searchResults={searchResults}
                    onSelectBook={onSelectBook}
                />
            ) : (
                <ManualBookEntryTab 
                    manualTitle={manualTitle}
                    setManualTitle={setManualTitle}
                    manualAuthor={manualAuthor}
                    setManualAuthor={setManualAuthor}
                    manualDescription={manualDescription}
                    setManualDescription={setManualDescription}
                    manualBookImageUrl={manualBookImageUrl}
                    onManualSubmit={onManualSubmit}
                    onManualFileChange={onManualFileChange}
                />
            )}
        </Box>
    );
};

export default BookSearch;
