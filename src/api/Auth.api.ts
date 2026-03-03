import API from "./Axios";

export const googleLogin = (token: string) => {
    return API.post("/auth/google", { token });
};

export const refreshSession = (refreshToken: string) => {
    return API.post("/auth/refresh", { refreshToken });
};

export const getProfile = () => {
    return API.get("/user/profile");
};
