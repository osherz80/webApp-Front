import API from "./Axios";
import type { RegisterLoginReq, RegisterLoginRes } from "./types/AuthApi";

export const googleLogin = (token: string) => {
    return API.post<RegisterLoginRes>("/auth/google", { token });
};

export const login = (data: RegisterLoginReq) => {
    return API.post<RegisterLoginRes>("/auth/login", data);
};

export const register = (data: RegisterLoginReq) => {
    return API.post<RegisterLoginRes>("/auth/register", data);
};

export const refreshSession = () => {
    return API.post("/auth/refresh");
};

export const logoutApi = () => {
    return API.post("/auth/logout");
};

