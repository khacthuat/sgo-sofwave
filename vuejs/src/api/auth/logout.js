import apiURL from "../constants";

const logout = async (token) => {
    try {
        const response = await axios.post(`${apiURL.baseURL}/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default logout;
