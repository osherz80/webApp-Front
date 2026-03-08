import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';
import { logout } from '../store/authSlice';
import { logoutApi } from '../api/Auth.api';

export interface ProfileData {
    name: string;
    username?: string;
    bio: string;
    avatarUrl: string;
    stats: {
        posts: number;
        likes: number;
    };
}

export type ProfileTab = 'all' | 'published' | 'archived';

export const useProfile = () => {
    const { user } = useSelector((state: RootState) => state.auth);

    const profile = useMemo<ProfileData>(() => ({
        name: user?.username || user?.email?.split('@')[0] || 'Unknown User',
        username: user?.username || '',
        bio: user?.bio || 'Avid reader and book enthusiast.',
        avatarUrl: user?.picture || 'https://i.pravatar.cc/150?u=placeholder', // Fallback avatar
        stats: {
            posts: 42,
            likes: 1200,
        },
    }), [user]);

    const [activeTab, setActiveTab] = useState<ProfileTab>('all');
    const [activeNav, setActiveNav] = useState('posts');

    const handleTabChange = (tab: ProfileTab) => {
        setActiveTab(tab);
    };

    const handleNavChange = (nav: string) => {
        setActiveNav(nav);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutApi();
        } catch (error) {
            console.error('Logout failed', error);
        } finally {
            dispatch(logout());
            navigate('/');
        }
    };

    return {
        profile,
        activeTab,
        activeNav,
        handleTabChange,
        handleNavChange,
        handleLogout,
        isLoading: false,
    };
};
