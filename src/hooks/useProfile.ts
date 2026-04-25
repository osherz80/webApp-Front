import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';
import { logout } from '../store/authSlice';
import { logoutApi } from '../api/Auth.api';
import { defaultProfileUrl } from '../utils/consts';
import { useMyPosts } from './useMyPosts';

export interface ProfileData {
    username?: string;
    bio: string;
    profileprofilePicture: string;
    stats: {
        posts: number;
        likes: number;
    };
}

export type ProfileTab = 'all' | 'published' | 'archived';

export const useProfile = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const { posts } = useMyPosts();

    const profile = useMemo<ProfileData>(() => ({
        username: user?.username || user?.email?.split('@')[0] || 'User',
        bio: user?.bio || 'Avid reader and book enthusiast.',
        profileprofilePicture: user?.profilePicture || defaultProfileUrl,
        stats: {
            posts: posts.length,
            likes: posts.reduce((sum, post) => sum + (post.likes?.length || 0), 0),
        },
    }), [user, posts]);

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
