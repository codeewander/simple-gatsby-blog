import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { css } from "@emotion/core"
// import parse, {domToReact} from 'html-react-parser';
// import {PostCode} from '../components/postcode'

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter{
        title
        date
        slug
      }
    }
  }
`

const SinglePost = ({data}) => {
  const postContent = css`
    .title {
      font-size: 28px;
      color: #353637;
      text-align: center;
      margin-bottom: 10px;
    }
    .subTitle{
      font-size: 14px;
      text-align: center;
      color: #c9c9c9;
    }
    img{
      padding: 20px 0;
    }
  `
  
  return (
    <Layout>
      {/* <Head title={props.data.mdx.frontmatter.title} />
      <div css={postContent}>
        <h1 className="title">{props.data.mdx.frontmatter.title}</h1>
        <p className="subTitle">{props.data.mdx.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.mdx.html }}
        ></div>
      </div> */}
    </Layout>
  )
}

export default SinglePost
