import { Box, Card, IconButton, Modal, Typography, Avatar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { profileUrls } from '../../utils/consts';

interface Props {
    open: boolean;
    onClose: () => void;
    onSelect: (url: string) => void;
    currentUrl: string;
}

const ProfilePicturePicker = ({ open, onClose, onSelect, currentUrl }: Props) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 3,
                    position: 'relative',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        p: 2.5,
                        borderBottom: '1px solid #f3f4f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        Choose Profile Picture
                    </Typography>
                    <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ p: 3, maxHeight: '70vh', overflowY: 'auto' }}>
                    <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: 2 
                    }}>
                        {profileUrls.map((url, index) => (
                            <Box
                                key={index}
                                onClick={() => {
                                    onSelect(url);
                                    onClose();
                                }}
                                sx={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    p: 0.5,
                                    transition: 'all 0.2s ease-in-out',
                                    border: '2px solid',
                                    borderColor: currentUrl === url ? 'primary.main' : 'transparent',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        bgcolor: 'rgba(16, 185, 129, 0.05)',
                                    },
                                }}
                            >
                                <Avatar
                                    src={url}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: '1/1',
                                        boxShadow: currentUrl === url ? '0 4px 12px rgba(16, 185, 129, 0.2)' : 'none',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Card>
        </Modal>
    );
};

export default ProfilePicturePicker;
