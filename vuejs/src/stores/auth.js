import { defineStore } from "pinia";

const auth = defineStore({
    id: "auth",
    state: () => ({
        token: "",
        user: {},
    }),
    actions: {
        login(token, user) {
            this.token = token;
            this.user = user;
            localStorage.setItem("token", token);
        },
        logout() {
            this.token = "";
            this.user = {};
            localStorage.removeItem("token");
        },
    },
});

export default auth;
