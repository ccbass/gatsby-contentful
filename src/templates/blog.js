import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout/layout"
import Head from "../components/head";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      minutesToRead
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed (width: 750) {
              src
            }
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const {title} = node.data.target
        const {src} = node.data.target.fixed
        return <img src={src} alt={title}/>
      }
    },
  }

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      <p>Estimated Article Length: {data.contentfulBlogPost.minutesToRead} min</p>
      <div>{renderRichText(data.contentfulBlogPost.body, options)}</div>
    </Layout>
  )
}

export default BlogPost

