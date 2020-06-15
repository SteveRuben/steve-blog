exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
  
    return new Promise((resolve, reject) => {
      const postPage = path.resolve('src/templates/post.js')
      const pagePage = path.resolve('src/templates/page.js')
      const tagPage = path.resolve('src/templates/tag.js')
      const categoryPage = path.resolve('src/templates/category.js')
  
      resolve(
        graphql(
          `
            {
              allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      tags
                      categories
                      template
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
  
          const tagSet = new Set()
          const categorySet = new Set()
  
          result.data.allMarkdownRemark.edges.forEach(edge => {
            if (edge.node.frontmatter.tags) {
              edge.node.frontmatter.tags.forEach(tag => {
                tagSet.add(tag)
              })
            }
  
            if (edge.node.frontmatter.categories) {
              edge.node.frontmatter.categories.forEach(category => {
                categorySet.add(category)
              })
            }
  
            if (edge.node.frontmatter.template === 'post') {
              createPage({
                path: edge.node.fields.slug,
                component: postPage,
                context: {
                  slug: edge.node.fields.slug,
                },
              })
            }
  
            if (edge.node.frontmatter.template === 'page') {
              createPage({
                path: edge.node.fields.slug,
                component: pagePage,
                context: {
                  slug: edge.node.fields.slug,
                },
              })
            }
          })
  
          const tagList = Array.from(tagSet)
          tagList.forEach(tag => {
            createPage({
              path: `/tags/${kebabCase(tag)}/`,
              component: tagPage,
              context: {
                tag,
              },
            })
          })
  
          const categoryList = Array.from(categorySet)
          categoryList.forEach(category => {
            createPage({
              path: `/categories/${category.toLowerCase()}/`,
              component: categoryPage,
              context: {
                category,
              },
            })
          })
        })
      )
    })
  }