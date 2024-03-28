import apiURL from "../constants";

const createUserAPI = async (user) => {
    try {
        const response = await axios.post(`${apiURL.baseURL}/users/`, user);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export default createUserAPI;
