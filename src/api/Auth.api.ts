import API from "./Axios";
import type { RegisterLoginReq, RegisterLoginRes } from "./types/AuthApi";

export const googleLogin = (token: string) => {
    console.log("googleLogin");
    return API.post<RegisterLoginRes>("/auth/google", { token });
};

export const login = (data: RegisterLoginReq) => {
    console.log("login");
    return API.post<RegisterLoginRes>("/auth/login", data);
};

export const register = (data: RegisterLoginReq) => {
    console.log("register");
    return API.post<RegisterLoginRes>("/auth/register", data);
};

export const refreshSession = () => {
    console.log("refreshSession");
    return API.post("/auth/refresh");
};

export const logoutApi = () => {
    console.log("logoutApi");
    return API.post("/auth/logout");
};

