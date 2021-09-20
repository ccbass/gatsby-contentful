require('dotenv').config()

module.exports = {
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: 'Full-Stack Engineering Blog',
    author: 'CCB',
    siteUrl: 'https://gatsby-contentful-demo-main.netlify.app'
  },
}
