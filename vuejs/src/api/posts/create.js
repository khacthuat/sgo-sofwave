import apiURL from "../constants";

const createPostAPI = {
    create: async (data) => {
        try {
            const response = await axios.post(`${apiURL.baseURL}/posts`, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default createPostAPI;
