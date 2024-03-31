import apiURL from "../constants";

export const logout = async () => {
    try {
        const response = await axios.post(`${apiURL.baseURL}/auth/logout`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
