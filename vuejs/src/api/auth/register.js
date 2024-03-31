import apiURL from "../constants";

const register = async (email, password) => {
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

export default register;
