import React, { useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ThemeContext } from "../contexts/ThemeContext"
import { EventNote, CalendarToday, Category, AccessTime}  from '@material-ui/icons';
import { css } from "@emotion/core"

const Blog = () => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  const data = useStaticQuery(graphql`
        query{
            allMdx{
                edges{
                  node{
                    frontmatter{
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

    const year = css`
        display: flex; 
        align-items: center;
        margin-bottom: 20px;
        svg{
            margin-right: 10px;
        }
        h2{
            font-size: 22px;
            margin-bottom: 0;
        }
    `
    const posts = css`
        list-style-type:none;
        margin: 0;
        .postInfo{
            display: flex;
            align-items: center;
            font-size: 14px;
            margin-top: 8px;
            svg{
                font-size: 15px;
                margin: 0 6px;
            }
        }
        .post{
            margin: 1rem 0;
            a{
                color: #000;
                display: inline-block;
                /* padding: 1rem; */
                font-size: 18px;
                line-height: 1.5rem;
                letter-spacing: 0.5px;
                text-decoration: none;
                box-shadow: inset 0px -7px 0px 0px rgba(0,0,0,0.1);
                transition: 0.3s;
            }
            a:hover{
                box-shadow: inset 0px -2px 0px 0px #bcb8ff
            }
            h2{
                margin-bottom: 0;
                font-size:18px;
                color: #353637;
                font-weight: 400;
            }
            p{
                color: #777;
                font-size: 13px;
            }
        }

    `
  return (
    <Layout>
      <SEO title="Home" />
      <div css={year}>
                <EventNote/>
                <h2>2020</h2>
            </div>
            <ol css={posts}>
            {data.allMdx.edges.map((edge)=>{
                    return (
                        <li className="post">
                            <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                            </Link>
                            <p className="postInfo">
                                <CalendarToday/>                             
                                {`${edge.node.frontmatter.date} - `} 
                                <Category/>
                                {`${edge.node.frontmatter.categories} - `}  
                                <AccessTime/>
                                {`${edge.node.timeToRead} minute(s) read`}
                            </p>
                        </li>
                    )
                })}
            </ol>
    </Layout>
  )
}

export default Blog
