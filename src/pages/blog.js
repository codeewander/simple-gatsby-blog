import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { css } from "emotion"
import CategoryMenu from "../components/categoryMenu"
import CategoryPosts from "../templates/categoryPosts"
import AllPosts from "../templates/allPosts"
import TagsMenu from "../components/tagsMenu"
import Tags from "../templates/tags"
import { FormattedMessage } from "gatsby-plugin-intl"

const Blog = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [targetCategory, setTargetCategory] = useState("")
  const [targetTag, setTargetTag] = useState("")

  const style = {
    tabs: css`
      margin-bottom: 40px;
      span {
        color: #666;
        padding-right: 20px;
        cursor: pointer;
        &:hover {
          color: #cacaca;
        }
      }
    `,
    mainContent: css`
      display: flex;
    `,
    sidebar: css`
      flex: 30%;
    `,
  }
  const handleChangeTab = tab => {
    setActiveTab(tab)
    setTargetCategory("")
  }
  return (
    <Layout>
      <SEO title="blog lists" />
      <div className={style.tabs}>
        <span onClick={() => handleChangeTab(0)}>
          <FormattedMessage id="archive-posts" />
        </span>
        <span onClick={() => handleChangeTab(1)}>
          <FormattedMessage id="all-posts" />
        </span>
      </div>
      <div className={style.mainContent}>
        {activeTab === 0 && <CategoryPosts targetCategory={targetCategory} />}
        {activeTab === 1 && <AllPosts />}
        {activeTab === 2 && <Tags targetTag={targetTag} />}
        <div className={style.sidebar}>
          <CategoryMenu
            setTargetCategory={setTargetCategory}
            setActiveTab={setActiveTab}
          />
          <TagsMenu setActiveTab={setActiveTab} setTargetTag={setTargetTag} />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
