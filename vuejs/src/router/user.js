const user = [
    {
        path: "/",
        redirect: "/user/news"

    },
    {
        path: "/user",
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path: "news",
                name: "news-list",
                component: () => import("../views/user/news/NewsList.vue"),
            },

            {
                path: "news-detail",
                name: "news-detail",
                component: () => import("../views/user/news/NewsDetail.vue"),
            },
            {
                path: "news-form",
                name: "news-form",
                component: () => import("../views/admin/news/NewsDetail.vue"),
            },


        ],
    },
];

export default user;
