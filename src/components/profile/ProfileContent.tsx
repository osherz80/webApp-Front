import { Box, Typography } from '@mui/material';
import ProfileTabs from './ProfileTabs';
import EditProfile from './EditProfile';
import type { ProfileTab, ProfileData } from '../../hooks/useProfile';

interface Props {
    profile: ProfileData;
    activeNav: string;
    activeTab: ProfileTab;
    onTabChange: (tab: ProfileTab) => void;
}

const ProfileContent = ({ profile, activeNav, activeTab, onTabChange }: Props) => {
    if (activeNav === 'edit') {
        return <EditProfile profile={profile} />;
    }

    if (activeNav === 'wishlist') {
        return (
            <Box sx={{ flex: 1, p: { xs: 2, md: 0 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Wishlist
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    Manage your saved books.
                </Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ px: { xs: 2, md: 0 }, pt: { xs: 2, md: 0 } }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    My Posts
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                    Manage your shared recommendations and reviews.
                </Typography>

                <ProfileTabs activeTab={activeTab} onTabChange={onTabChange} />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    px: { xs: 2, md: 0 },
                    // Here we'd map through posts, drafts, etc based on activeTab
                    // Leaving blank as per image right side below tabs
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 200,
                }}
            >
                {/* Empty State or Content will go here */}
            </Box>
        </Box>
    );
};

export default ProfileContent;
