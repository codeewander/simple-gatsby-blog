import React, { useContext } from "react"
import { css } from "emotion"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby-plugin-intl' 
import { ThemeContext } from "../contexts/ThemeContext"
import {
  EventNote,
  CalendarToday,
  Category,
  AccessTime,
} from "@material-ui/icons"

const AllPosts = () => {
  const { themeColor } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        group(field: frontmatter___year) {
          fieldValue
          nodes {
            frontmatter {
              title
              date(formatString: "MMMM D")
              excerpt
              slug
              tags
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
    `,
    year: css`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      svg {
        margin-right: 10px;
      }
      h2 {
        font-size: 22px;
        margin-bottom: 0;
      }
    `,
    posts: css`
      list-style-type: none;
      margin: 0;
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
    `,
  }

  return (
    <div className={style.container}>
      {data.allMdx.group.map(groupItem => (
        <>
          <div className={style.year}>
            <EventNote />
            <h2>{groupItem.fieldValue}</h2>
          </div>
          <ol className={style.posts}>
            {groupItem.nodes.map(node => (
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
            ))}
          </ol>
        </>
      ))}
    </div>
  )
}

export default AllPosts
