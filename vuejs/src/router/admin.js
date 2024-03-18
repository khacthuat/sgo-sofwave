const admin = [
    {
        path: "/",
        component: () => import("../layouts/admin.vue"),
    },
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../pages/admin/users/index.vue"),
            },
            {
                path: "roles",
                name: "admin-roles",
                component: () => import("../pages/admin/roles/index.vue"),
            },
            {
                path: "settings",
                name: "admin-settings",
                component: () => import("../pages/admin/settings/index.vue"),
            },
            {
                path: "news",
                name: "admin-news",
                component: () => import("../pages/admin/news/index.vue"),
            },
            {
                path: "news-detail",
                name: "admin-news-detail",
                component: () => import("../pages/admin/news/detail.vue"),
            },
        ],
    },
];

export default admin;
