const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = options => ({
  siteMetadata: {
    siteTitle: `University Department of Chemistry.`,
    siteTitleAlt: `University Department of Chemistry. Bhupendra Narayan Mandal University.`,
    siteHeadline: `University Department of Chemistry. Bhupendra Narayan Mandal University. Madhepura. Bihar.`,
    siteUrl: `https://docbnmu.in`,
    siteDescription: `University Department of Chemistry. Bhupendra Narayan Mandal University. Madhepura. Bihar.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@docbnmu`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
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
