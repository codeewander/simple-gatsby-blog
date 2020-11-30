import React, { useContext } from "react"
import { css } from "emotion"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pixelImage from "../projects/pixel-image.gif"
import { ThemeContext } from "../contexts/ThemeContext"

const Project = () => {
  const { themeColor } = useContext(ThemeContext)
  const style = {
    title: css`
      margin-bottom: 20px;

      span {
        font-size: 20px;
        position: relative;
      }
      &:after {
        position: absolute;
        left: 0;
        content: "";
        height: 20px;
        background-color: ${themeColor.hoverLink};
        width: 160px;
        z-index: -1;
        transform: translate(18px,-3px)
      }
    `,
    galleryContainer: css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto auto;
      img {
        width: 100%;
        max-width: 400px;
      }
    `,
  }
  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.title}>
        <span>Creative Coding</span>
      </div>
      <div className={style.galleryContainer}>
        <img src={pixelImage} alt="pixel-image" />
      </div>
    </Layout>
  )
}

export default Project
