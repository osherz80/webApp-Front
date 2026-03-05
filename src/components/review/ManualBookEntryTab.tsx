import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    Paper
} from '@mui/material';
import type { ManualBookEntryTabProps } from './BookSearch.types';

const ManualBookEntryTab: React.FC<ManualBookEntryTabProps> = ({
    manualTitle,
    setManualTitle,
    manualAuthor,
    setManualAuthor,
    manualDescription,
    setManualDescription,
    manualBookImageUrl,
    onManualSubmit,
    onManualFileChange
}) => {
    return (
        <Paper elevation={0} sx={{ p: 4, border: '1px solid #e2e8f0', borderRadius: 4 }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>Book Details</Typography>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    label="Book Title"
                    required
                    value={manualTitle}
                    onChange={(e) => setManualTitle(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Author"
                    required
                    value={manualAuthor}
                    onChange={(e) => setManualAuthor(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Description (Optional)"
                    multiline
                    rows={4}
                    value={manualDescription}
                    onChange={(e) => setManualDescription(e.target.value)}
                />
                <Box>
                    <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                        Book Cover Image (Optional)
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button
                            variant="outlined"
                            component="label"
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={(e) => onManualFileChange(e.target.files?.[0] || null)}
                            />
                        </Button>
                        {manualBookImageUrl && (
                            <Box 
                                component="img" 
                                src={manualBookImageUrl} 
                                sx={{ 
                                    width: 60, 
                                    height: 80, 
                                    objectFit: 'cover', 
                                    borderRadius: 1,
                                    border: '1px solid #e2e8f0'
                                }} 
                            />
                        )}
                    </Stack>
                </Box>
                <Button 
                    variant="contained" 
                    size="large" 
                    onClick={onManualSubmit}
                    sx={{ mt: 2 }}
                >
                    Next: Write Recommendation
                </Button>
            </Stack>
        </Paper>
    );
};

export default ManualBookEntryTab;
