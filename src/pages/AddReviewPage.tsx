import {
    Container,
    Typography
} from '@mui/material';
import MainLayout from '../components/common/MainLayout';
import { useAddReview } from '../hooks/useAddReview';
import BookSearch from '../components/review/BookSearch';
import ReviewForm from '../components/review/ReviewForm';

const AddReviewPage = () => {
    const {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        searchResults,
        isLoading,
        selectedBook,
        setSelectedBook,
        manualTitle,
        setManualTitle,
        manualAuthor,
        setManualAuthor,
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
        handleSearch,
        handleFileChange,
        handleManualFileChange,
        handleSubmit,
        handleManualSubmit
    } = useAddReview();

    return (
        <MainLayout>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, letterSpacing: '-0.02em' }}>
                    Share Your Next Read
                </Typography>

                {!selectedBook ? (
                    <BookSearch 
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        searchResults={searchResults}
                        isLoading={isLoading}
                        error={error}
                        manualTitle={manualTitle}
                        setManualTitle={setManualTitle}
                        manualAuthor={manualAuthor}
                        setManualAuthor={setManualAuthor}
                        manualDescription={manualDescription}
                        setManualDescription={setManualDescription}
                        manualBookImageUrl={manualBookImageUrl}
                        onSearch={handleSearch}
                        onSelectBook={setSelectedBook}
                        onManualSubmit={handleManualSubmit}
                        onManualFileChange={handleManualFileChange}
                    />
                ) : (
                    <ReviewForm 
                        selectedBook={selectedBook}
                        rating={rating}
                        setRating={setRating}
                        recommendation={recommendation}
                        setRecommendation={setRecommendation}
                        userImageUrl={userImageUrl}
                        isSubmitting={isSubmitting}
                        error={error}
                        onFileChange={handleFileChange}
                        onSubmit={handleSubmit}
                        onChangeBook={() => setSelectedBook(null)}
                    />
                )}
            </Container>
        </MainLayout>
    );
};

export default AddReviewPage;
