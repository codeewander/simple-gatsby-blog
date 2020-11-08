import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ThemeContext } from "../contexts/ThemeContext"
const Blog = () => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>blog</h1>
    </Layout>
  )
}

export default Blog
