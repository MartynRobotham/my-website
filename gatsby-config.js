module.exports = {
    pathPrefix: "", siteMetadata: {
        siteUrl: "https://martynrobotham.co.uk", title: "personal-website", icon: "static/images/favicon/favicon.ico"
    }, plugins: ["gatsby-plugin-sass", `gatsby-plugin-fontawesome-css`, {
        resolve: `gatsby-plugin-manifest`, options: {
            icon: "static/images/favicon/icon.png",
            name: "Martyn Robotham - Experienced UI Developer",
            short_name: "Martyn Robotham - UI Developer",
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
