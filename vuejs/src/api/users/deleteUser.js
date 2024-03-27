const deleteUserAPI = async (id) => {
    try {
        const response = await axios.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export default deleteUserAPI;
