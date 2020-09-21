module.exports = {
    purge: [
        "src/**/*.js",
        "src/**/*.jsx",
        "src/**/*.ts",
        "src/**/*.tsx",
        "public/**/*.html",
    ],
    theme: {
        extend: {},
        container: {
            padding: "var(--pw)",
            center: true,
        },
    },
    variants: {},
    plugins: [],
};
