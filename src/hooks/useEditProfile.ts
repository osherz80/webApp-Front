import { useState } from 'react';
import type { ProfileData } from './useProfile';

export const useEditProfile = (initialProfile: ProfileData) => {
    // The design shows 'alex_reader88' as a username which isn't in original data yet
    const [username, setUsername] = useState('alex_reader88');
    const [bio, setBio] = useState(initialProfile.bio);

    const handleSave = () => {
        // Mock save logic for now
        console.log('Saving profile...', { username, bio });
    };

    return {
        username,
        setUsername,
        bio,
        setBio,
        handleSave,
    };
};
