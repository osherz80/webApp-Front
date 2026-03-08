import { Box } from '@mui/material';
import type { ProfileTab } from '../../hooks/useProfile';

interface Props {
    activeTab: ProfileTab;
    onTabChange: (tab: ProfileTab) => void;
}

const tabs: { id: ProfileTab; label: string }[] = [
    { id: 'all', label: 'All Posts' },
    { id: 'drafts', label: 'Drafts (2)' },
    { id: 'published', label: 'Published' },
    { id: 'archived', label: 'Archived' },
];

const ProfileTabs = ({ activeTab, onTabChange }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                borderBottom: '1px solid #e5e7eb',
                mb: 3,
                overflowX: 'auto', // For mobile responsiveness
            }}
        >
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <Box
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        sx={{
                            px: 3,
                            py: 1.5,
                            cursor: 'pointer',
                            color: isActive ? 'primary.main' : 'text.secondary',
                            fontWeight: isActive ? 600 : 500,
                            position: 'relative',
                            transition: 'color 0.2s',
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                color: isActive ? 'primary.main' : 'text.primary',
                            },
                        }}
                    >
                        {tab.label}
                        {isActive && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -1,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    bgcolor: 'primary.main',
                                }}
                            />
                        )}
                    </Box>
                );
            })}
        </Box>
    );
};

export default ProfileTabs;
