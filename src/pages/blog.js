import React, { useState, useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ThemeContext } from "../contexts/ThemeContext"
import { css } from "emotion"
import CategoryMenu from "../components/categoryMenu"
import CategoryPosts from "../templates/categoryPosts"
import AllPosts from "../templates/allPosts"

const Blog = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [targetCategory, setTargetCategory] = useState('')
  const theme = useContext(ThemeContext)

  const style={
      tabs:css`
      margin-bottom: 40px;
        span{
          color: #666;
          padding-right: 20px;
          cursor: pointer;
          &:hover{
            color: #cacaca;
          }
        }
      `,
      mainContent: css`
        display: flex;
      `
  }
  const handleChangeTab = (tab)=>{
    setActiveTab(tab)
    setTargetCategory("")
  }
  return (
    <Layout>
      <SEO title="blog lists" />
      <div className={style.tabs}>
        <span onClick={()=>handleChangeTab(0)}>分類文章</span>
        <span onClick={()=>handleChangeTab(1)}>全文列表</span>
      </div>
      <div className={style.mainContent}>
      {activeTab === 0 &&  <CategoryPosts targetCategory={targetCategory}/>}
      {activeTab === 1 && <AllPosts />}
      <CategoryMenu setTargetCategory={setTargetCategory} setActiveTab={setActiveTab}/>
      
      </div>
    </Layout>
  )
}

export default Blog
