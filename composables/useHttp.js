import axios from "axios";

export const useHttp = () => {
    const runtimeConfig = useRuntimeConfig();

    let api = axios.create({
        headers: {
            Authorization: `Client-ID DTLyPOHY2hHQYj2FAF_Q48kOMGPK0G9UIrqAXCxyeXI`,
        },
        baseURL: "https://api.unsplash.com/",
    });

    async function getPhotos() {
        try {
            const res = await api.get("/photos/");
            return res.data;
        } catch (error) {
            console.error("Ошибка при получении фото:", error);
            throw error;
        }
    }

    async function searchPhoto(query) {
        try {
            const res = await api.get("/search/photos?query=" + query);
            return res.data.results;
        } catch (error) {
            console.error("Ошибка при попытке найти фото:", error);
            throw error;
        }
    }

    async function getPhotoById(id) {
        try {
            const res = await api.get("/photos/" + id);
            return res.data;
        } catch (error) {
            console.error("Ошибка при попытке получить фото от его ID:", error);
            throw error;
        }
    }

    return {
        getPhotos,
        getPhotoById,
        searchPhoto,
    };
};
