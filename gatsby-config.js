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
            background_color: "#ABF62D",
            theme_color: "#ABF62D",
            display: "standalone"
        },
    }, {
        resolve: 'gatsby-plugin-html-attributes',
        options: {
            lang: 'en'
        }
    }, `gatsby-plugin-offline`],
};
