import React from "react"
import { graphql } from "gatsby"

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"


export const query = graphql`
  query($slug: String!) {
    blog: contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            fixed(width: 750) {
              src
            }
          }
        }
      }
    }
    images: allContentfulAsset {
      edges {
        node {
          title
          contentful_id
          id
          fixed(width: 750) {
            src
          }
        }
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { id } = node.data.target.sys
        const imageNode = data.images.edges.find(image => image.node.contentful_id === id)

        return <img src={imageNode.node.fixed.src} />
      },
    },
  }

  return (
    <Layout>
      <h1>{data.blog.title}</h1>
      <p>{data.blog.publishedDate}</p>
      {documentToReactComponents( JSON.parse(data.blog.body.raw), options )}
    </Layout>
  )
}

export default BlogPost

