import type { LoginResponse, ProfileResponse } from "../types/auth";
import API from "./Axios";

export const googleLogin = (token: string) => {
    console.log("googleLogin");
    return API.post<LoginResponse>("/auth/google", { token });
};

export const refreshSession = () => {
    console.log("refreshSession");
    return API.post("/auth/refresh");
};

export const getProfile = () => {
    console.log("getProfile");
    return API.get<ProfileResponse>(`/user`);
};
