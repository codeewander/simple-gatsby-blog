import React,{ useContext} from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import {css} from '@emotion/core'
import { Instagram, GitHub, Email } from '@material-ui/icons';

const Footer = ()=>{
  const footer = css`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contactIcons{
      height: 20px;
      
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
            <div className="contactIcons">
              <GitHub/>
              <Instagram/>
              <Email/>
            </div>
            <p className="copyright">Create by {data.site.siteMetadata.author} © Copyright {new Date().getFullYear()} All rights reserved.</p>
        </footer>
    )
}

export default Footer