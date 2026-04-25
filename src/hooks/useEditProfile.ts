import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../api/User.api';
import { updateUser } from '../store/authSlice';
import type { ProfileData } from './useProfile';

export const useEditProfile = (initialProfile: ProfileData) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(initialProfile.username || '');
    const [bio, setBio] = useState(initialProfile.bio || '');
    const [profilePicture, setprofilePicture] = useState(initialProfile.profileprofilePicture || '');
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const handleSave = async () => {
        try {
            await updateProfile({ username, bio, profilePicture });
            dispatch(updateUser({ username, bio, profilePicture }));
        } catch (error) {
            console.error('Failed to save profile:', error);
        }
    };

    const handleUsernameChange = (newUsername: string) => {
        if (newUsername.length <= 15) {
            setUsername(newUsername);
        }
    };

    const handleBioChange = (newBio: string) => {
        if (newBio.length <= 100) {
            setBio(newBio);
        }
    };

    const handleSelectPicture = (url: string) => {
        setprofilePicture(url);
    };

    return {
        username,
        setUsername: handleUsernameChange,
        bio,
        setBio: handleBioChange,
        profilePicture,
        setprofilePicture: handleSelectPicture,
        isPickerOpen,
        openPicker: () => setIsPickerOpen(true),
        closePicker: () => setIsPickerOpen(false),
        handleSave,
    };
};
