import { Box, Typography } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
    activeNav: string;
    onNavChange: (nav: string) => void;
}

const navItems = [
    { id: 'posts', label: 'My Posts', icon: <GridViewIcon /> },
    { id: 'wishlist', label: 'Wishlist', icon: <FavoriteBorderIcon /> },
];

const ProfileSideNav = ({ activeNav, onNavChange }: Props) => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                borderRadius: 2,
                border: '1px solid #e5e7eb',
                p: 1.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
            }}
        >
            {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                    <Box
                        key={item.id}
                        onClick={() => onNavChange(item.id)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderRadius: 1.5,
                            cursor: 'pointer',
                            color: isActive ? 'primary.main' : 'text.secondary',
                            bgcolor: isActive ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                bgcolor: isActive ? 'rgba(16, 185, 129, 0.08)' : 'rgba(0,0,0,0.02)',
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', '& > svg': { fontSize: 22 } }}>
                            {item.icon}
                        </Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: isActive ? 600 : 500 }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default ProfileSideNav;
