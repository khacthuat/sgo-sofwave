import vue from "@vitejs/plugin-vue";

module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        "primary-color": "#1DA57A",
                        "link-color": "#1DA57A",
                        "border-radius-base": "2px",
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};
