module.exports = {
  siteMetadata: {
    siteUrl: "https://martynrobotham.co.uk",
    title: "personal-website",
    icon: "src/images/favicon/favicon.ico"
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: "src/images/favicon/icon.png"
    }
  }],
};
