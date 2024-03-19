const user = [
    {
        path: "/",
        component: () => import("../layouts/user.vue"),

    },
    {
        path: "/user",
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path: "users",
                name: "users",
                component: () => import("../views/admin/employee/EmployeeList.vue"),
            },
            {
                path: "news",
                name: "user-news",
                component: () => import("../views/admin/news/NewsList.vue"),
            },
            {
                path: "news-detail",
                name: "user-news-detail",
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

export default user;
