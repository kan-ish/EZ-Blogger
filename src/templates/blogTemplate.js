import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

// Following code is for querying blogposts coming from Contentful.
export const blogData = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            url
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  // options is defined for rendering images in rich-text body from Contentful.
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <img src={node.data.target.url} alt={node.data.target.title} />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.date}</p>
      <p>{renderRichText(data.contentfulBlogPost.body, options)}</p>
    </Layout>
  )
}

export default Blog
