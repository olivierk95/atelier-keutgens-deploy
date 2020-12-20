/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Atelier d'Architecture Keutgens",
    author: 'Olivier Keutgens',
    description: "",
    image: '/src/assets/hero-background-image.jpg',
    url: 'https://atelier-keutgens.be'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL,
        queryLimit: 5000,
        contentTypes: [ `projets` ],
        singleTypes: [ `atelier`, `contact` ]
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name: `Atelier d'Architecture Keutgens`,
        short_name: `Atelier Keutgens`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/assets/logo-atelier-navigateur.svg`,
      }
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Playfair Display`,
              variants: [`400`, `400i`, `500`, `500i`, `600`, `600i`, `700`, `700i`, `800`, `800i`, `900`, `900i`]
            },
            {
              family: `Playfair Display SC`,
              variants: [`400`, `400i`, `700`, `700i`, `900`, `900i`]
            },
            {
              family: `Montserrat`,
              variants: [`100`,`100i`, `200`,`200i`, `300`,`300i`, `400`,`400i`, `500`,`500i`, `600`,`600i`, `700`,`700i`, `800`,`800i`, `900`,`900i`]
            },
          ],
        },
      },
    }
  ],
}
