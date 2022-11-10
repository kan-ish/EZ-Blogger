import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blogs.module.scss"

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
      <ol className={blogStyles.allPosts}>
        {blogData.allMarkdownRemark.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.fields.slug}`} className="blogLink">
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
                <p>{post.node.excerpt}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
