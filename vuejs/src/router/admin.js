const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../views/admin/user/UserList.vue"),
            },
            {
                path: "news",
                name: "admin-news",
                component: () => import("../views/admin/news/NewsList.vue"),
            },
            {
                path: "news-detail",
                name: "admin-news-detail",
                component: () => import("../views/admin/news/NewsDetail.vue"),
            },
            {
                path: "news-statistic",
                name: "admin-news-statistic",
                component: () => import("../views/admin/news/NewsBrowse.vue"),
            },
        ],
    },
];

export default admin;
