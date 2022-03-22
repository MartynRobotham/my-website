module.exports = {
    siteMetadata: {
        siteUrl: "https://martynrobotham.co.uk",
        title: "personal-website",
        icon: "src/images/favicon/favicon.ico"
    },
    plugins: ["gatsby-plugin-sass", `gatsby-plugin-fontawesome-css`, {
        resolve: `gatsby-plugin-manifest`,
        options: {
            icon: "src/images/favicon/icon.png",
            name: "Martyn Robotham Website",
            short_name: "My Website",
            description: "My personal website",
            start_url: '/',
            background_color: `#8EE4AF`,
            theme_color: `#EDF5E1`,
            display: 'standalone',
            icons: [
                {
                    src: `src/images/favicon/android-chrome-192x192.png`,
                    sizes: `192x192`,
                    type: `image/png`
                },
                {
                    src: `src/images/favicon/android-chrome-512x512.png`,
                    sizes: `512x512`,
                    type: `image/png`
                },
                {
                    src: "src/images/favicon/apple-touch-icon.png",
                    sizes: "180x180",
                    type: "image/png"
                },
                {
                    src: "src/images/favicon/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png"
                },
                {
                    src: "src/images/favicon/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png"
                }
            ]
        },
    },
        `gatsby-plugin-offline`
        //     {
        //     resolve: `gatsby-plugin-offline`,
        //     options: {
        //         precachePages: [`/index`],
        //     },
        // },
    ],
};
