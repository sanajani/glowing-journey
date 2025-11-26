import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:4940'
})

export const userAPI = {
    // getUsers: () => axiosClient.get("/api/v1/users"),
    // getUser: (id) => axiosClient.get(`/api/v1/users/${id}`),
    createUser: (userData) => axiosClient.post("/api/v1/users", userData),
    loginUser: (userData) => axiosClient.post("/api/v1/users/sessions", userData)
    // updateUser: (id, userData) => axiosClient.patch(`api/v1/users/${id}`, userData),
    // deleteUser: () => axiosClient.delete(`/api/v1/users/${id}`),
}

