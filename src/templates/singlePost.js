import React, { useContext } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "emotion"
import { ThemeContext } from "../contexts/ThemeContext"
import { EventNote, CalendarToday, Category, AccessTime}  from '@material-ui/icons';
import Img from "gatsby-image"
import SEO from '../components/seo'

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      body
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        tags
        excerpt
        featureImage {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const SinglePost = ({ data }) => {
  const { themeColor } = useContext(ThemeContext)
  const featureImage =
    data.mdx.frontmatter.featureImage.childImageSharp.fixed
    const seoImage =
    data.mdx.frontmatter.featureImage.publicURL
  const style = {
    container: css`
      max-width: 900px;
      margin: 0 auto;
      .imageContainer {
        img {
          width: 100%;
        }
      }
    `,
    titleBanner:css`
      background: ${themeColor.titleBannerBackground};
      display: grid;
      grid-template-columns: 10rem auto;
      grid-template-rows: auto auto;
      margin: 2rem 0 3rem;
      border: 2px solid black;
      padding: 1.5rem 1.5rem 0;
      box-shadow: 1rem 1rem 0 0 black;
      .gatsby-image-wrapper{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column: 1;
        height: 8rem;
        padding-right: 2rem;
        width: 100% !important;
        height: unset !important;
        margin-bottom: 1rem;
      }
      h1{
        font-size: 2rem;
        font-weight: 700;
        grid-row: 1;
        grid-column: 2;
        margin:0;
      }
      .info{
        display: flex;
        svg{
          width: 24px;
          height:24px;
          margin: 0 1rem 1rem;
        }
      }
    `,
    postContent: css`
      .title {
        font-size: 24px;
        color: ${themeColor.primary};
        text-align: center;
        margin-bottom: 10px;
        line-height: 2rem;
      }
      .subTitle {
        font-size: 14px;
        text-align: center;
        color: #c9c9c9;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${themeColor.primary};
        margin-top: 1.5rem;
        margin-bottom: 1.25rem;
        padding-bottom: 0.3rem;
      }
      h1 {
        font-size: 24px;
        line-height: 2rem;
        font-weight: 600;
      }
      h2 {
        font-size: 22px;
        line-height: 1.875rem;
        font-weight: 600;
        border-bottom: 1px solid #e5e5e5;
      }
      h3 {
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 500;
        border-bottom: 1px solid #e5e5e5;
        margin: 3rem 0 1rem;
      }
      h4 {
        font-size: 20px;
        line-height: 1.5rem;
        font-weight: 600;
        border-bottom: 1px solid #e5e5e5;
      }
      h5 {
        font-size: 18px;
        line-height: 1.375rem;
        font-weight: 600;
        border-bottom: 1px solid #e5e5e5;
      }
      h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 600;
        text-transform: uppercase;
      }
      p {
        font-size: 16px;
        line-height: 2rem;
        font-weight: 400;
        color: ${themeColor.primary};
        margin: 1.5rem 0;
      }
      a {
        color: ${themeColor.link};
        text-decoration: none;
        box-shadow: inset 0px -7px 0px 0px rgba(0, 0, 0, 0.1);
      }
      a:hover {
        box-shadow: inset 0px -2px 0px 0px ${themeColor.link};
        color: ${themeColor.primary};
      }
      strong {
        font-weight: 700;
      }
      em {
        font-style: italic;
      }
      blockquote {
        margin: 1em 0;
        padding: 15px 20px;
        border-left: 4px solid ${themeColor.link};
        background: ${themeColor.blockquoteBackground};
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
      }
      blockquote p {
        font-size: 16px;
        text-align: left;
        max-width: 36rem;
        margin: 0;
      }
      pre {
        border-radius: 0.5rem;
        font-size: 16px;
        padding: 1em;
        margin: 0.5em 0;
        overflow: auto;
      }
      ul,
      ol {
        color: ${themeColor.primary};
        margin: 1rem 0 1rem 2rem;
      }
      code {
        font-size: 1rem;
        line-height: 1.875rem;
        background-color: #c9c9c9;
        padding: 0 0.3rem;
      }
      li {
        margin: 0.25rem 0;
        font-size: 16px;
      }
      hr {
        border: 0;
        height: 1px;
        background: red;
        opacity: 0.1;
        margin-top: 2rem;
      }
      table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
      }
      th {
        font-weight: 600;
      }
      table,
      th,
      td {
        text-align: left;
        padding: 0.5rem;
        border: 1px solid ${themeColor.primary};
      }
      img {
        padding: 20px 0;
      }
    `,
  }

  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} image={seoImage} description={data.mdx.frontmatter.excerpt}/>
      <div className={style.container}>
        <div className={style.titleBanner}>
          <Img fixed={featureImage}/>
          <h1>{data.mdx.frontmatter.title}</h1>
          <div style={{marginTop:'10px'}}>
            <p className="info">
              <CalendarToday/> 
              <span>{data.mdx.frontmatter.date}</span>
            </p>
            <p className="info">
              <AccessTime/> 
              <span>{data.mdx.timeToRead} minute(s)</span>
            </p>
            <p className="info">
              <AccessTime/> 
              <span>{data.mdx.frontmatter.tags.join(',')}</span>
            </p>
          </div>
        </div>
        <div className={style.postContent}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost
