import React, { useContext } from "react"
import { css } from "emotion"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ThemeContext } from "../contexts/ThemeContext"
import { CalendarToday, Category, AccessTime } from "@material-ui/icons"
import PropTypes from "prop-types"

const CategoryPosts = ({ targetCategory }) => {
  const { themeColor } = useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___categories) {
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

  let renderData

  if (targetCategory) {
    renderData = data.allMdx.group.filter(
      item => item.fieldValue === targetCategory
    )
  } else {
    renderData = data.allMdx.group
  }

  const style = {
    container: css`
      flex: 70%;
    `,
    groupTitle: css``,
    posts: css`
      list-style-type: none;
      margin: 0;
      .post {
        margin: 1rem 0;
        a {
          display: inline-block;
          font-size: 18px;
          line-height: 1.5rem;
          letter-spacing: 0.5px;
          text-decoration: none;
          box-shadow: inset 0px -7px 0px 0px ${themeColor.linkUnderLine};
          transition: 0.3s;
        }
        a:hover {
          box-shadow: inset 0px -2px 0px 0px ${themeColor.link};
        }
        h2 {
          margin-bottom: 0;
          font-size: 18px;
          color: ${themeColor.primary};
          font-weight: 400;
        }
        p {
          color: #777;
          font-size: 13px;
        }
      }
      .postInfo {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-top: 8px;
        svg {
          font-size: 15px;
          margin: 0 6px;
        }
      }
    `,
  }

  return (
    <div className={style.container}>
      {renderData.map(category => (
        <>
          <h2 className={style.groupTitle}>{category.fieldValue}</h2>
          <ol className={style.posts}>
            {category.nodes.map(node => (
              <>
                <li className="post" key={node.frontmatter.slug}>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <p className="postInfo">
                    <CalendarToday />
                    {`${node.frontmatter.date} - `}
                    <Category />
                    {`${node.frontmatter.categories} - `}
                    <AccessTime />
                    {`${node.timeToRead} minute(s) read`}
                  </p>
                </li>
              </>
            ))}
          </ol>
        </>
      ))}
    </div>
  )
}

CategoryPosts.propTypes = {
  targetCategory: PropTypes.string.isRequired,
}

export default CategoryPosts
