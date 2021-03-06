require('dotenv').config({path: `.env`})

module.exports = {
  siteMetadata: {
    title: `June 1 and Beyond: Confronting Racism in Cicero`,
    description: `June 1 and Beyond: Confronting Racism in Cicero`,
    twitterUsername: `@ciceronoticias`,
    url: "https://confrontingracism.ciceroindependiente.com", // No trailing slash allowed!
    image: "/card.png"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_KEY}`,
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `${process.env.GATSBY_BASE_ID}`,
            tableName: 'Cicero Timeline website backend',
            mapping: {
              'full_width_image' : 'fileNode',
              'image' : 'fileNode',
              'description': 'text/markdown',
              'description_es': 'text/markdown'
            },
            defaultValues: {
              onChapterEnter: '',
              onChapterExit: ''
            }
          }
        ]
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-30162627-5",
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
  ],
}
