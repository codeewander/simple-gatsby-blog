import React, { useContext } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Logo from "../assets/logo.svg"

const Header = () => {


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
       color: #363537;
       font-size: 1.5rem;
       text-decoration: none;
       text-align: center;
       cursor: pointer;
     }
     .nav-container {
       display: flex;
     }
     .nav-list {
       display: flex;
       list-style-type: none;
       margin: 0;
     }
     .nav-active-item {
       color: #9e9e9e
     } 
     .nav-active-item:hover {
       color: #666
     } 
  `

  const StyledLink = styled(Link)`
    color: #363537;
    text-decoration: none;
    display: flex;
    font-size: 0.9rem;
    margin-right: 1.3rem;
    border-bottom: 2px solid transparent;
    &:hover {
      color: #666;
      border-bottom: 2px solid #666;
    }
  `


  return (
    <header css={headerContainer}>
      <h1>
        <img src={Logo} className="logo" alt="logo" />
        <Link className="title" to="/">
          Kira Yang
        </Link>
      </h1>
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li>
              <StyledLink to="/" activeClassName="nav-active-item">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/blog" activeClassName="nav-active-item">
                Blog
              </StyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
