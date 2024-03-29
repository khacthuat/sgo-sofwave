import apiURL from "../constants";

const listPostsAPI = async () => {
    try {
        const response = await axios.get(`${apiURL.baseURL}/posts`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default listPostsAPI;
