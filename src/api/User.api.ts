import API from "./Axios";
import type { ProfileResponse, UpdateProfileReq } from "./types/UserApi";

export const getProfile = () => {
    console.log("getProfile");
    return API.get<ProfileResponse>(`/user`);
};

export const updateProfile = (data: UpdateProfileReq) => {
    console.log("updateProfile");
    return API.put(`/user/update`, data);
};