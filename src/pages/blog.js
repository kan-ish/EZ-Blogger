import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"

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
            fields {
              slug
            }
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
            <Link to={`/blog/${post.node.fields.slug}`} className="blogLink">
              <li>
                <h2>{post.node.frontmatter.title}</h2>
                {post.node.frontmatter.date} <br></br>
                {post.node.excerpt}
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
