import apiURL from "../constants";

const listPostsAPI = {
    getAllPosts: async () => {
        try {
            const response = await axios.get(`${apiURL.baseURL}/posts`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getPostPending: async () => {
        try {
            const response = await axios.get(`${apiURL.baseURL}/pending`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
    getPostNotPending: async () => {
        try {
            const response = await axios.get(`${apiURL.baseURL}/notpending`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default listPostsAPI;
