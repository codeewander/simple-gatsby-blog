import React, { useContext } from "react"
import { css } from "emotion"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ThemeContext } from "../contexts/ThemeContext"

const Tags = ({ targetTag }) => {
  const { themeColor } = useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
          nodes {
            frontmatter {
              title
              date(formatString: "MMMM D")
              slug
              categories
            }
            timeToRead
          }
        }
      }
    }
  `)

  const style = {
    container: css`
      flex: 70%;
      h1 {
        color: ${themeColor.primary};
        font-size: 22px;
      }
    `,
    posts: css`
      list-style-type: none;
      margin: 0;
      .post {
        margin: 1rem 0;
        a {
          color: ${themeColor.primary};
          display: inline-block;
          /* padding: 1rem; */
          font-size: 18px;
          line-height: 1.5rem;
          letter-spacing: 0.5px;
          text-decoration: none;
          box-shadow: inset 0px -7px 0px 0px ${themeColor.linkUnderLine};
          transition: 0.3s;
        }
        a:hover {
          box-shadow: inset 0px -2px 0px 0px ${themeColor.hoverLink};
        }
      }
    `,
  }

  const renderData = data.allMdx.group.find(
    item => item.fieldValue === targetTag
  )

  return (
    <div className={style.container}>
      <h1>
        Tag: <span>{targetTag}</span>
      </h1>
      <ol className={style.posts}>
        {renderData.nodes.map(node => {
          return (
            <li key={node.frontmatter.slug} className="post">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

Tags.propTypes = {
  targetTag: PropTypes.string.isRequired,
}

export default Tags
