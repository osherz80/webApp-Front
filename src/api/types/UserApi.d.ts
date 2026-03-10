import { User } from "../../types/auth";

export interface ProfileResponse {
    user: User;
    isAuth: boolean;
}

export interface UpdateProfileReq {
    username: string;
    bio: string;
    profilePicture: string;
}
