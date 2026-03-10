import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import type { ProfileData } from '../../hooks/useProfile';
import { useEditProfile } from '../../hooks/useEditProfile';
import ProfilePicturePicker from './ProfilePicturePicker';

interface Props {
    profile: ProfileData;
}

const EditProfile = ({ profile }: Props) => {
    const {
        username,
        setUsername,
        bio,
        setBio,
        profilePicture,
        setprofilePicture,
        isPickerOpen,
        openPicker,
        closePicker,
        handleSave
    } = useEditProfile(profile);

    return (
        <Box sx={{ flex: 1, p: { xs: 2, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'text.primary' }}>
                Edit Profile
            </Typography>

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid #e5e7eb',
                    p: { xs: 3, md: 6 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ position: 'relative', mb: 2 }}>
                    <Avatar
                        src={profilePicture}
                        alt={username}
                        sx={{
                            width: 100,
                            height: 100,
                            border: '4px solid #fff',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                    />
                    <Box
                        onClick={openPicker}
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            bgcolor: 'primary.main',
                            color: '#fff',
                            borderRadius: '50%',
                            width: 28,
                            height: 28,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            border: '2px solid #fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                            transition: 'transform 0.2s ease',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            }
                        }}
                    >
                        <CameraAltIcon sx={{ fontSize: 14 }} />
                    </Box>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 5, color: 'text.primary' }}>
                    {profile.username?.length! > 30 ? profile.username?.slice(0, 30) + '...' : profile.username}
                </Typography>

                <Box sx={{ width: '100%', maxWidth: 600 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        Username
                    </Typography>
                    <TextField
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        helperText={`${username.length}/15`}
                        slotProps={{
                            formHelperText: {
                                sx: { textAlign: 'right', color: 'text.secondary', fontWeight: 500 }
                            }
                        }}
                        sx={{
                            mb: 4,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1.5,
                                bgcolor: '#f9fafb',
                                '& fieldset': { borderColor: '#e5e7eb' },
                            }
                        }}
                    />

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'text.primary' }}>
                        Bio
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        minRows={3}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        variant="outlined"
                        helperText={`${bio.length}/100`}
                        slotProps={{
                            formHelperText: {
                                sx: { textAlign: 'right', color: 'text.secondary', fontWeight: 500 }
                            }
                        }}
                        sx={{
                            mb: 6,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 1.5,
                                bgcolor: '#f9fafb',
                                '& fieldset': { borderColor: '#e5e7eb' },
                            }
                        }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            onClick={handleSave}
                            sx={{
                                bgcolor: 'primary.main',
                                color: '#fff',
                                py: '10px',
                                px: 6,
                                minWidth: 200,
                                borderRadius: 1.5,
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '1rem',
                                boxShadow: 'none',
                                '&:hover': {
                                    bgcolor: '#059669',
                                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                                },
                            }}
                        >
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </Box>

            <ProfilePicturePicker
                open={isPickerOpen}
                onClose={closePicker}
                onSelect={setprofilePicture}
                currentUrl={profilePicture}
            />
        </Box>
    );
};

export default EditProfile;
