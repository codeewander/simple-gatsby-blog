import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang ='en', meta, title, url, keywords, author, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = url || site.siteMetadata.url
  const metaKeywords = keywords || ["Kira", "blog", "react"]
  const metaAuthor = author || site.siteMetadata.author
  const metaImage = image || site.siteMetadata.featureImage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords.join(`, `),
            }
          : []
      )}
    />
  )
}

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
