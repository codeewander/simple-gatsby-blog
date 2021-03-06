module.exports = {
  siteMetadata: {
    title: `Kira 's personal website`,
    description: `A blog to keep my learning notes`,
    author: `Kira Yang`,
    url: "https://github.com/codeewander",
    featureImage: './src/assets/logo-lightMode.svg'
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins:[
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `source sans pro\:300,400,400i,700`,
          `Noto Sans TC`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`zh-TW`,`en`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.TOKEN,
      }
    }
  ],
}
