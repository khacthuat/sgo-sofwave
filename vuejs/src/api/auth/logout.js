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
            // Hiển thị thông báo đăng xuất thành công
            console.log("Đăng xuất thành công!");
        } else {
            console.log("Đăng xuất thất bại!");
        }
    } catch (error) {
        console.log(error);
    }
};

export default logout;
