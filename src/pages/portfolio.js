import React, { useContext } from "react"
import { css } from "emotion"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pixelImage from "../projects/pixel-image.gif"
import banmu from "../projects/banmu.png"
import { ThemeContext } from "../contexts/ThemeContext"

const Project = () => {
  const { themeColor } = useContext(ThemeContext)

  const tags = [
    { name: "All", color: "#456268" },
    { name: "React", color: "#79a3b1" },
    { name: "Wordpress", color: "#d0e8f2" },
    { name: "Google Cloud", color: "#ea97ad" },
    { name: "Gatsby", color: "#98acf8" },
    { name: "JavaScript", color: "#f2d974" },
  ]

  const style = {
    title: css`
      margin: 20px 0;

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
        transform: translate(18px, -3px);
      }
    `,
    galleryContainer: css`
      .projectContainer {
        position: relative;
        &:hover .mask {
          opacity: 0.3;
          cursor: pointer;
        }
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #9ddfd3;
          opacity: 0;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content:space-between;
          &:hover {
            opacity: 1;
          }
        }
        h3 {
          color: #fff;
        }
        .projectName {
          text-align: center;
          color: #fff;
        }
        
        .tag {
          display: inline-block;
          margin: 5px;
          padding: 5px;
          border-radius: 4px;
          font-size: 12px;
        }
        .cardTagColor {
          background-color: antiquewhite;
        }
        .link{
          text-align: right;
          text-decoration: underline;
        }
      }
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto auto;
      img {
        width: 100%;
        max-width: 400px;
      }
    `,
    tagsContainer: css`
      padding: 20px 0;
      .tag {
        display: inline-block;
        margin: 5px;
        padding: 5px;
        border-radius: 4px;
        font-size: 12px;
      }
    `,
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.title}>
        <span>Project</span>
      </div>
      <div className={style.tagsContainer}>
        {tags.map(tag => (
          <div className="tag" style={{ backgroundColor: "#e7e6e6" }}>
            {tag.name}
          </div>
        ))}
      </div>
      <div className={style.galleryContainer}>
        <div className="projectContainer">
          <img src={banmu} alt="banmu" />
          <div className="mask">
            <h3>Corporate website</h3>
            <h2 className="projectName">Banmu.com</h2>
            <div className="tagsContainer">
              <div className="tag cardTagColor">Wordpress</div>
              <div className="tag cardTagColor">Google Cloud</div>
            </div>
            <a className="link">More</a>
          </div>
        </div>
      </div>
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
