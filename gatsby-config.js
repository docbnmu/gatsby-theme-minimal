const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = options => ({
  siteMetadata: {
    siteTitle: `University Department of Chemistry`,
    siteTitleAlt: `University Department of Chemistry, B. N. Mandal University.`,
    siteHeadline: `University Department of Chemistry, B. N. Mandal University.`,
    siteUrl: `https://docbnmu.in/`,
    siteDescription: `University Department of Chemistry, B. N. Mandal University.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@docbnmu`,
  },
  plugins: [
    {
      resolve: `@docbnmu/gatsby-theme-minimal-core`,
      options,
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ],
})
