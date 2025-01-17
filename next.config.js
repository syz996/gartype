module.exports = {
    async redirects() {
        return [
            {
                source: '/terms', // 用户访问的路径
                destination: '/terms', // 要重定向到的路径
            },
            {
                source: '/privacy', // 用户访问的路径
                destination: '/privacy', // 要重定向到的路径
            },
        ];
    },
};
