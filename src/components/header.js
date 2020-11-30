import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link, useIntl } from "gatsby-plugin-intl"
import { css } from "emotion"
import styled from "@emotion/styled"
import LightModeLogo from "../assets/logo-lightMode.svg"
import DarkModeLogo from "../assets/logo-darkMode.svg"
import ModeToggleButton from "../components/modeToggleButton"
import { ThemeContext } from "../contexts/ThemeContext"
import Language from "../components/language"
import { Menu, Close } from "@material-ui/icons"
import Modal from "@material-ui/core/Modal"

const Header = () => {
  const { isDark, themeColor } = useContext(ThemeContext)
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
  const intl = useIntl()

  const handleCloseBurgerMenu = () => {
    setOpenBurgerMenu(false)
  }
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  const style = {
    headerContainer: css`
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
        @media (max-width: 768px) {
          display: none;
        }
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
    `,
    burgerIcon: css`
      &.MuiSvgIcon-root {
        display: none;
        @media (max-width: 768px) {
          display: inline-block;
        }
      }
    `,
    burgerMenuContainer: css`
      background: ${themeColor.background};
      height: 100%;
      .closeIcon{
        position: absolute;
        right: 0;
        top: 0;
        margin: 6px;
        cursor: pointer;
        color: ${themeColor.primary}
      }
      .burgerMenu{
        padding-top: 30px;
        li{
          a{
            justify-content: center;
            margin: 0;
            padding: 10px;
            font-size: 16px;
            &:hover{
              background-color: #c9c9c9;
              border-bottom: 2px solid transparent;
            }
          }
        }
      }
    `
  }

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
    <header className={style.headerContainer}>
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
                {intl.formatMessage({ id: "home" })}
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog" activeClassName="nav-active-item">
                {intl.formatMessage({ id: "blog" })}
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/project" activeClassName="nav-active-item">
                {intl.formatMessage({ id: "project" })}
              </StyledLink>
            </li>
          </ul>
        </nav>
        <Language />
        <ModeToggleButton />
      </div>
      <Modal open={openBurgerMenu} onClose={handleCloseBurgerMenu}>
        <div className={style.burgerMenuContainer}>
          <Close className="closeIcon" onClick={()=> setOpenBurgerMenu(false)}/>
          <ul className="burgerMenu">
            <li>
              <StyledLink to="/" activeClassName="nav-active-item">
                {intl.formatMessage({ id: "home" })}
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog" activeClassName="nav-active-item">
                {intl.formatMessage({ id: "blog" })}
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/project" activeClassName="nav-active-item">
                {intl.formatMessage({ id: "project" })}
              </StyledLink>
            </li>
          </ul>
        </div>
      </Modal>
      {openBurgerMenu ? null: (
        <Menu
          className={style.burgerIcon}
          onClick={() => setOpenBurgerMenu(true)}
        />
      )}
    </header>
  )
}

export default Header
