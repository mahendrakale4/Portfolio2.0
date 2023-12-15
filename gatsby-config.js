
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 *
 * 
 */
require("dotenv").config({path: ".env" });
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Allan Fernandes",
    description:
      "Allan Fernandes is a frontend developer based in Nottingham, UK. He is a Computer Science post graduate from NTU, Goa Campus. He is currently working as a web developer at NTSU.",
    siteUrl: "https://allanfernandes.dev/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "lyairl50",
        dataset: "production",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
        ],
        web: [
          {
            name: "Fira Code",
            file: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap",
          },
          {
            name: "Space Mono",
            file: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-66DZ7RTMP9",
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};

