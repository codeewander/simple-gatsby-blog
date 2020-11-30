import React, { useContext } from "react"
import { css } from "emotion"
import { graphql, useStaticQuery } from "gatsby"
import { Link , useIntl} from "gatsby-plugin-intl"
import { ThemeContext } from "../contexts/ThemeContext"
import styled from "@emotion/styled"

const TagsMenu = ({ setTargetTag, setActiveTab }) => {
  const { themeColor } = useContext(ThemeContext)
  const intl = useIntl()
  const style = {
    container: css`
      .title {
        color: ${themeColor.link};
        border-bottom: 2px solid ${themeColor.primary};
        padding: 10px 0;
        font-size: 18px;
        text-align: center;
      }
      .tagsWrapper {
        margin-top: 3px;
        border-top: 1px solid ${themeColor.primary};
        padding-top: 5px;
      }
    `,
  }
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const StyledLink = styled(Link)`
    color: ${themeColor.primary};
    text-decoration: none;
    margin-right: 1.3rem;
    border-bottom: 2px solid transparent;
    &:hover {
      color: ${themeColor.hoverText};
    }
  `
  const handleFilterTag = target => {
    setTargetTag(target)
    setActiveTab(2)
  }

  return (
    <div className={style.container}>
      <h2 className="title">{intl.formatMessage({id: "tags"})}</h2>
      <div className="tagsWrapper">
        {data.allMdx.group.map(category => (
          <StyledLink
            to="/blog"
            onClick={() => handleFilterTag(category.fieldValue)}
            key={category.fieldValue}
          >
            <span
              style={{
                fontSize: `clamp(12px, ${12 + category.totalCount}px ,20px))`,
              }}
            >
              {category.fieldValue}
            </span>
          </StyledLink>
        ))}
      </div>
    </div>
  )
}

export default TagsMenu
