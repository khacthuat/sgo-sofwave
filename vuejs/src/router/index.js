import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";
import user from "./user.js";

const routes = [
    ...admin,
    ...user,
    {
        path: "/post/create",
        name: "post.create",
    },
];

function isAuthenticated() {
    return localStorage.getItem("token");
}

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
