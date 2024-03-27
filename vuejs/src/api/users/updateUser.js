const updateUserAPI = async (id, data) => {
    try {
        const response = await axios.put(`/users/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export default updateUserAPI;
