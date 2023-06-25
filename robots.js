export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: "https://devKarin.github.io/lumav_FE_test_02_05_2022/sitemap.xml",
    };
}