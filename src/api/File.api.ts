import API from "./Axios";

export const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    return API.post("/file/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
