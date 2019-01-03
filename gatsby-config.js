module.exports = {
  siteMetadata: {
    title: 'Aravind Balla',
    author: 'Aravind Balla',
    image: 'https://aravindballa.com/avatar.jpg',
    description: 'Discoveries and rants of a developer while developing stuff',
    siteUrl: 'https://aravindballa.com/',
    social: {
      twitter: 'aravindballa'
    },
    organization: {
      name: 'Aravind Balla',
      url: 'https://aravindballa.com',
      logo: 'https://aravindballa.com/logo.png',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: require.resolve('./plugins/remark-embedder')
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-65268954-3`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aravind Balla`,
        short_name: `AB`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#d7d7d7`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-styled-components`
  ],
}
