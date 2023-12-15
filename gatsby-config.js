
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
    title: "Mahendra Kale",
    description:
      "Mahendra Kale is a Full-stack developer based in India. He is a Computer Science post graduate from Pune University .",
    siteUrl: "https://mahendra2.netlify.app/",
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

