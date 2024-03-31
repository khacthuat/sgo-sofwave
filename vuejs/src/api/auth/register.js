import apiURL from "../constants";

export const register = async (email, password) => {
    try {
        const response = await axios.post(`${apiURL.baseURL}/auth/register`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
