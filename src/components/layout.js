import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { css } from "@emotion/core"
import "./layout.css"

const Layout = ({ children }) => {
  const container = css`
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #363537;
  .content{
      flex-grow: 1;
  }
`
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div css={container}>
      <div className="content">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        </div>
        <Footer/>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
