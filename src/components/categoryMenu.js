import React, { useContext } from "react"
import { css } from "emotion"
import { Link, graphql, useStaticQuery } from "gatsby"
import { ThemeContext } from "../contexts/ThemeContext"
import styled from "@emotion/styled"
import { FormattedMessage } from "gatsby-plugin-intl"

const CategoryMenu = ({ setTargetCategory, setActiveTab }) => {
  const { themeColor } = useContext(ThemeContext)

  const style = {
    container: css`
      .title {
        color: ${themeColor.link};
        border-bottom: 2px solid ${themeColor.primary};
        padding: 10px 0;
        font-size: 18px;
        text-align: center;
      }
      ul {
        margin-top: 3px;
        border-top: 1px solid ${themeColor.primary};
        padding: 10px 0;
      }
      li {
        list-style: none;
        font-size: 14px;
        padding-bottom: 5px;
      }
    `,
  }
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const StyledLink = styled(Link)`
    color: ${themeColor.primary};
    text-decoration: none;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    border-bottom: 2px solid transparent;
    &:hover {
      color: ${themeColor.hoverText};
    }
  `
  const handleFilterCategory = target => {
    setTargetCategory(target)
    setActiveTab(0)
  }

  return (
    <div className={style.container}>
      <h2 className="title">
        <FormattedMessage id="category"/>
      </h2>
      <ul>
        {data.allMdx.group.map(category => (
          <li key={category.fieldValue}>
            <StyledLink
              to="/blog"
              onClick={() => handleFilterCategory(category.fieldValue)}
              
            >
              {category.fieldValue}
              {`(${category.totalCount})`}
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryMenu
