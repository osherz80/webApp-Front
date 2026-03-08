import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../api/Auth.api';
import { updateUser } from '../store/authSlice';
import type { ProfileData } from './useProfile';

export const useEditProfile = (initialProfile: ProfileData) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(initialProfile.username || '');
    const [bio, setBio] = useState(initialProfile.bio || '');

    const handleSave = async () => {
        try {
            await updateProfile({ username, bio });
            dispatch(updateUser({ username, bio }));
            console.log('Profile saved successfully');
        } catch (error) {
            console.error('Failed to save profile:', error);
        }
    };

    return {
        username,
        setUsername,
        bio,
        setBio,
        handleSave,
    };
};
