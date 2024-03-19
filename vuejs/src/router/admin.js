const admin = [
    {
        path: "/",
        redirect: "/admin/users"

    },
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => import("../view/admin/employee/EmployeeList.vue"),
            },
            {
                path: "news",
                name: "admin-news",
                component: () => import("../view/admin/news/NewsList.vue"),
            },
            {
                path: "news-detail",
                name: "admin-news-detail",
                component: () => import("../view/admin/news/NewsDetail.vue"),
            },
            {
                path: "news-statistic",
                name: "admin-news-statistic",
                component: () => import("../view/admin/news/NewsBrowse.vue"),
            },

        ],
    },
];

export default admin;
