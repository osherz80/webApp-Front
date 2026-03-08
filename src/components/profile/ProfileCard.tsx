import { Box, Typography, Button, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import type { ProfileData } from '../../hooks/useProfile';

interface Props {
    profile: ProfileData;
    onEditProfile: () => void;
}

const ProfileCard = ({ profile, onEditProfile }: Props) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '1px solid #e5e7eb',
                p: { xs: 3, md: 4 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 3,
            }}
        >
            <Box sx={{ position: 'relative', mb: 2 }}>
                <Avatar
                    src={profile.avatarUrl}
                    alt={profile.name}
                    sx={{
                        width: 120,
                        height: 120,
                        border: '4px solid #fff',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 4,
                        right: 4,
                        bgcolor: 'primary.main',
                        color: '#fff',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: '2px solid #fff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    }}
                >
                    <CameraAltIcon sx={{ fontSize: 16 }} />
                </Box>
            </Box>

            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                {profile.name}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                    mb: 3,
                    lineHeight: 1.6,
                    px: 1,
                }}
            >
                {profile.bio}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    mb: 3,
                    px: 1,
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>{profile.stats.posts}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 0.5, fontWeight: 600, fontSize: '0.65rem' }}>POSTS</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>{(profile.stats.likes / 1000).toFixed(1)}k</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 0.5, fontWeight: 600, fontSize: '0.65rem' }}>LIKES</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>{profile.stats.following}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: 0.5, fontWeight: 600, fontSize: '0.65rem' }}>FOLLOWING</Typography>
                </Box>
            </Box>

            <Button
                variant="outlined"
                fullWidth
                onClick={onEditProfile}
                startIcon={<EditIcon sx={{ fontSize: 20 }} />}
                sx={{
                    color: 'text.primary',
                    borderColor: '#e5e7eb',
                    '&:hover': {
                        borderColor: '#d1d5db',
                        bgcolor: 'rgba(0,0,0,0.02)',
                    },
                    py: 1,
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: 'none',
                    textTransform: 'none',
                }}
            >
                Edit Profile
            </Button>
        </Box>
    );
};

export default ProfileCard;
