import apiURL from "../constants";

const getUserAPI = {
    getById: async (id) => {
        try {
            const response = await axios.get(`${apiURL}/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },
};

export default getUserAPI;
