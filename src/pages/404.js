import React from "react"
import {css} from 'emotion'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "404-notfound.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const NotFoundPage = ({ data }) => {
  const featureImage = data.imageSharp.fixed
  const style={
    contentContainer:css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

    `
  }
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={style.contentContainer}>
        <Img fixed={featureImage} />
        <p>Oops! The page you were looking for does not exist</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
