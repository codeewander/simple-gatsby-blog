module.exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  //create single blog post
  data.allMdx.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: {
        id,
      },
    })
  })
}
