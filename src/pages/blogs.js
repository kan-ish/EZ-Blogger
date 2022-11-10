import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import * as blogStyles from "./blogs.module.scss"

const BlogPage = () => {
  //query for posts in md files
  // const blogData = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           html
  //           excerpt
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // query for posts from Contentful
  const blogData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            date(formatString: "MMM D, YYYY")
            slug
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
        {blogData.allContentfulBlogPost.edges.map(post => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${post.node.slug}`} className="blogLink">
                <h2>{post.node.title}</h2>
                <p className={blogStyles.date}>{post.node.date}</p>
                {/* <p>{post.node.excerpt}</p> */}
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
