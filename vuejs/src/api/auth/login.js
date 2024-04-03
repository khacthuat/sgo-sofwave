import apiURL from "../constants";

const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiURL.baseURL}/auth/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default login;
