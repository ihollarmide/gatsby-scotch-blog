const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    //  grapghql allows us to fetch narkdown nodes which contain the data we need.
    // actions grant us access to create new pages
    const { createPage } = actions;

    //This blogTemplate variable gets the path to the blog Template created
    const blogTemplate = require.resolve(`./src/templates/blog-post.js`);

    // This is a graphql function that takes a string as argument and returns the queried markdown data. It returns a promise but we use aync/await
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    //For each markdown data returned, we call the createPage function.
    res.data.allMarkdownRemark.edges.forEach(edge =>{
        //  The createPage function takes three argument.
        createPage({
            //The Path to the Blog Page Template Component
            component: blogTemplate,

            //  A specific path/url for each markdown blog post
            path: `/blog${edge.node.fields.slug}`,

            //  This holds values available on the page when queried with graphql
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}