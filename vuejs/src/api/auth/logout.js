import apiURL from "../constants";
const logout = async () => {
    try {
        const token = localStorage.getItem("token");
        const headers = {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(
            `${apiURL.baseURL}/auth/logout`,
            {},
            { headers }
        );
        if (response.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
    }
};

export default logout;
