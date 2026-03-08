import { useState } from 'react';

export interface ProfileData {
    name: string;
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
    // In a real app, this would fetch from an API using React Query
    const [profile] = useState<ProfileData>({
        name: 'Sarah Jenkins',
        bio: 'Avid reader of sci-fi and historical fiction. Coffee addict. Always looking for the next great page-turner. 📚',
        avatarUrl: 'https://i.pravatar.cc/150?u=sarah', // Placeholder avatar based on design
        stats: {
            posts: 42,
            likes: 1200,
            following: 380,
        },
    });

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
