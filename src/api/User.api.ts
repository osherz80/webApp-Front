import API from "./Axios";
import type { ProfileResponse, UpdateProfileReq } from "./types/UserApi";

export const getProfile = () => {
    return API.get<ProfileResponse>(`/user`);
};

export const updateProfile = (data: UpdateProfileReq) => {
    return API.put(`/user/update`, data);
};