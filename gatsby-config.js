/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "9dvdQGEdRX3fHheNX7ZYbe",
        token: "Waeu5oNz7kvA60geM4DVdyS7UkocscAnfXuSfQzFLsIBbQmwKFNnIeOvb1Yty974snaMAUK1fU2jNmF1v1g",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
