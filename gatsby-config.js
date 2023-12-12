/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `SmartStock`,
    siteTitle: `SmartStock`,
    description: `landing page made to learn gatsby`,
    siteUrl: `https://smartstockapp.netlify.app/`,
    siteImage: `src/images/logo.svg`,
    siteLanguage: `en`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SmartStock`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
      },
    }
    /*
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    */
  ]
}; 