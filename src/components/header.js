import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import LightModeLogo from "../assets/logo-lightMode.svg"
import DarkModeLogo from "../assets/logo-darkMode.svg"
import ModeToggleButton from "../components/modeToggleButton"
import { ThemeContext } from "../contexts/ThemeContext"
import { FormattedMessage} from "gatsby-plugin-intl"
import Language from './language'

const Header = () => {
  const { isDark, themeColor } = useContext(ThemeContext)
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const headerContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      display: flex;
      align-items: center;
      margin: 0;
    }
    .logo {
      width: 50px;
    }
    padding: 1rem 0 3rem 0;
    .title {
      color: ${themeColor.primary};
      font-size: 1.5rem;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
    }
    .nav-container {
      display: flex;
      align-items: center;
    }
    .nav-list {
      display: flex;
      list-style-type: none;
      margin: 0;
    }
    .nav-active-item {
      color: #9e9e9e;
    }
    .nav-active-item:hover {
      color: ${themeColor.hoverText};
    }
  `

  const StyledLink = styled(Link)`
    color: ${themeColor.primary};
    text-decoration: none;
    display: flex;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    border-bottom: 2px solid transparent;
    &:hover {
      color: ${themeColor.hoverText};
      border-bottom: 2px solid ${themeColor.hoverText};
    }
  `

  return (
    <header css={headerContainer}>
      <h1>
        <img
          src={isDark ? DarkModeLogo : LightModeLogo}
          className="logo"
          alt="logo"
        />
        <Link className="title" to="/">
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li>
              <StyledLink to="/" activeClassName="nav-active-item">
                <FormattedMessage id="home" />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog" activeClassName="nav-active-item">
                <FormattedMessage id="blog" />
              </StyledLink>
            </li>
          </ul>
        </nav>
        <ModeToggleButton />
        <Language />
      </div>
    </header>
  )
}

export default Header
