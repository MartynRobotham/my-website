module.exports = {
    pathPrefix: "", siteMetadata: {
        siteUrl: "https://martynrobotham.co.uk", title: "personal-website", icon: "static/images/favicon/favicon.ico"
    }, plugins: ["gatsby-plugin-sass", `gatsby-plugin-fontawesome-css`, {
        resolve: `gatsby-plugin-manifest`, options: {
            icon: "src/images/icon.png",
            name: "Martyn Robotham Website - Personal Portfolio",
            short_name: "Martyn Robotham Website",
            description: "My personal website and portfolio showing off my development experience",
            start_url: "./",
            scope: ".",
            background_color: "#FFFFEA",
            theme_color: "#FFFFEA",
            display: "standalone"
        },
    }, `gatsby-plugin-offline`],
};
