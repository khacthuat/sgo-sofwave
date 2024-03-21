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

        ],
    },
];

export default user;
