import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export interface ProfileData {
    name: string;
    username?: string;
    bio: string;
    avatarUrl: string;
    stats: {
        posts: number;
        likes: number;
        following: number;
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
            following: 380,
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

    return {
        profile,
        activeTab,
        activeNav,
        handleTabChange,
        handleNavChange,
        isLoading: false,
    };
};
