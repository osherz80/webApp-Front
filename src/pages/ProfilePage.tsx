import { Box, Container } from '@mui/material';
import MainLayout from '../components/common/MainLayout';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileSideNav from '../components/profile/ProfileSideNav';
import ProfileContent from '../components/profile/ProfileContent';
import { useProfile } from '../hooks/useProfile';

const ProfilePage = () => {
    const { profile, activeNav, activeTab, handleNavChange, handleTabChange, handleLogout } = useProfile();

    return (
        <MainLayout>
            <Box sx={{ bgcolor: '#f9fafb', flex: 1, py: { xs: 4, md: 6 } }}>
                <Container maxWidth="lg">
                    {/* Using standard flex layout or Grid */}
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, lg: 6 } }}>

                        {/* Left Sidebar Column */}
                        <Box sx={{ width: { xs: '100%', md: 320 }, flexShrink: 0 }}>
                            <ProfileCard profile={profile} onEditProfile={() => handleNavChange('edit')} onLogout={handleLogout} />
                            <ProfileSideNav activeNav={activeNav} onNavChange={handleNavChange} />
                        </Box>

                        {/* Right Content Column */}
                        <Box sx={{ flex: 1 }}>
                            <ProfileContent
                                profile={profile}
                                activeNav={activeNav}
                                activeTab={activeTab}
                                onTabChange={handleTabChange}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </MainLayout>
    );
};

export default ProfilePage;
