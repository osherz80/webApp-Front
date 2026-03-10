import { User } from "../../types/auth";

export interface RegisterLoginReq {
    email: string;
    password: string;
}

export interface RegisterLoginRes {
    accessToken: string;
    user: User;
    isAuth: boolean;
}
