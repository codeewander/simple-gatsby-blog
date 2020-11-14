import React,{ useContext} from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import {css} from '@emotion/core'
import { Instagram, GitHub, Email } from '@material-ui/icons';
import {ThemeContext} from '../contexts/ThemeContext'

const Footer = ()=>{
  const {themeColor} = useContext(ThemeContext)
  const footer = css`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact{
      height: 20px;
      a{
        color: ${themeColor.primary}
      }
      svg{
        font-size: 18px;
        margin-left: 8px;
      }
    }
    .copyright{
      margin:0;
      font-size: 13px;
    }
  `
  
    const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)
    return(
        <footer css={footer}>
            <div className="contact">
              <a target="__blank" href="https://github.com/codeewander"><GitHub/></a>
              <a target="__blank" href="https://www.instagram.com/ygchangru"><Instagram/></a>
              <a href="mailto:changru.yang02@gmail.com"><Email/></a>
            </div>
            <p className="copyright">Create by {data.site.siteMetadata.author} © Copyright {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    )
}

export default Footer