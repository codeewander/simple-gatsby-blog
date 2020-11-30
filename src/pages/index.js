import React from "react"
import { css } from "emotion"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import P5Wrapper from "react-p5-wrapper"
import HelloKira from "../sketch/helloKira"

const IndexPage = () => {
  const style = {
    container: css`
      display: flex;
      .mainContent{
        width: 50vw;
      }
    `,
    canvasContainer: css`
      width: 50vw;
      .p5Canvas {
        width: 100% !important;
        height: auto !important;
      }
    `,
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.container}>
      <div className="mainContent">
        <h1>Hello</h1>
        <p>Welcome to my new Gatsby site.</p>
      </div>
      <div className={style.canvasContainer}>
        <P5Wrapper sketch={HelloKira} />
      </div>
      </div>
    </Layout>
  )
}

export default IndexPage
