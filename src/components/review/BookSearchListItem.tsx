import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import type { BookSearchListItemProps } from './BookSearch.types';

const BookSearchListItem: React.FC<BookSearchListItemProps> = ({ book, onSelect }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#f8fafc' },
                transition: 'background-color 0.2s'
            }}
            onClick={() => onSelect(book)}
        >
            {book.volumeInfo.imageLinks?.thumbnail && (
                <CardMedia
                    component="img"
                    sx={{ width: 100, objectFit: 'cover' }}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                />
            )}
            <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{book.volumeInfo.title}</Typography>
                <Typography color="text.secondary">
                    {book.volumeInfo.authors?.join(', ')}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BookSearchListItem;
