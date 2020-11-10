import React, { useContext } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from "@emotion/core"
import { ThemeContext } from "../contexts/ThemeContext"
// import parse, {domToReact} from 'html-react-parser';
// import {PostCode} from '../components/postcode'

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
        body
      frontmatter{
        title
        date(formatString: "MMMM D, YYYY")
        slug
        featureImage{
            childImageSharp{
                fixed{
                    ...GatsbyImageSharpFixed
                }
            }
        }
      }
    }
  }
`

const SinglePost = ({data}) => {
    console.log(data)
    const {themeColor} = useContext(ThemeContext)
    console.log(themeColor)
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed.src

  const imageContainer = css`
    img{
      width: 100%;
    }
  `
  const postContent = css`
    .title {
      font-size: 24px;
      color: ${themeColor.primary};
      text-align: center;
      margin-bottom: 10px;
      line-height: 2rem;
    }
    .subTitle{
      font-size: 14px;
      text-align: center;
      color: #c9c9c9;
    }
    h1,h2,h3,h4,h5,h6{
      color: ${themeColor.primary};
      margin-top: 1.5rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.3rem
    }
    h1{
      font-size: 24px;
      line-height: 2rem;
      font-weight: 600;
    }
    h2{
      font-size: 22px;
      line-height: 1.875rem;
      font-weight: 600;
      border-bottom: 1px solid #e5e5e5;
    }
    h3{
      font-size: 20px;
      line-height: 1.625rem;
      font-weight: 600;
      border-bottom: 1px solid #e5e5e5;
    }
    h4{
      font-size: 20px;
      line-height: 1.5rem;
      font-weight: 600;
      border-bottom: 1px solid #e5e5e5;
    }
    h5{
      font-size: 18px;
      line-height: 1.375rem;
      font-weight: 600;
      border-bottom: 1px solid #e5e5e5;
    }
    h6{
      font-size: 1rem;
      line-height: 1.125rem;
      font-weight: 600;
      text-transform :uppercase;
    }
    p{
      font-size: 16px;
      line-height: 1.875rem;
      font-weight: 400;
      color: ${themeColor.primary};
      margin-top: 1.5rem;
    }
    a{
      color: ${themeColor.link};
      text-decoration: none;
      box-shadow: inset 0px -7px 0px 0px rgba(0,0,0,0.1);
    }
    a:hover{
      box-shadow: inset 0px -2px 0px 0px ${themeColor.link};
      color: ${themeColor.primary}
    }
    strong{
      font-weight: 700;
    }
    em{
      font-style: italic
    }
    blockquote{
      margin: 1em 0;
      padding: 15px 20px;
      border-left: 4px solid ${themeColor.link};
      background: ${themeColor.blockquoteBackground};
      border-bottom-right-radius: 2px;
      border-top-right-radius: 2px;
    }
    blockquote p{
      font-size: 16px;
      text-align: left;
      max-width: 36rem;
      margin:0;
    }
    ul,ol{
      color: ${themeColor.primary};
      margin: 1rem 0 1rem 2rem;
    }
    code{
      font-size: 1rem;
      line-height: 1.875rem;
      background-color: #c9c9c9;
      padding: 0 0.3rem;
    }
    li{
      margin: 0.25rem 0;
      font-size: 16px;
    }
    hr{
      border: 0;
      height: 1px;
      background: red;
      opacity: 0.1;
      margin-top: 2rem;
    }
    table{
      width: 100%;
      border-spacing: 0.25rem;
      border-collapse: collapse;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
    }
    th{
      font-weight: 600
    }
    table,
    th,td{
      text-align: left;
      padding: 0.5rem;
      border: 1px solid ${themeColor.primary}
    }
    img{
      padding: 20px 0;
    }
  `
  
  return (
    <Layout>
      <div css={imageContainer}>
        <img src={featureImage}/>
      </div>
      {/* <Head title={data.mdx.frontmatter.title} /> */}
      <div css={postContent}>
        <h1 className="title">{data.mdx.frontmatter.title}</h1>
        <p className="subTitle">{data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default SinglePost
