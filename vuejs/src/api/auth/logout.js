import apiURL from "../constants";

const logout = async (token) => {
    try {
        const response = await axios.post(
            `${apiURL.baseURL}/auth/logout`,
            token
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default logout;
