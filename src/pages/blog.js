import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>My Blog Page</h1>
      <p>This is where all blogs will show up.</p>
      <ol>
        {blogData.allMarkdownRemark.edges.map(post => {
          return (
            <li>
              <h2>{post.node.frontmatter.title}</h2>
              {post.node.frontmatter.date} <br></br>
              {post.node.html}
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
