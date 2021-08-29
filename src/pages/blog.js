import React from "react";

import Layout from "../components/layout/layout";
import { graphql, useStaticQuery } from "gatsby";


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const postsArray = data.allMarkdownRemark.edges.map(post => {
    return (
      <li>
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.frontmatter.date}</p>
      </li>
    )
  })


  return (
    <Layout>
      <h1>Blog Page!</h1>
      <p>This is a blog page where posts will be!</p>
      <ol>
        { postsArray }
      </ol>
    </Layout>
  )
};

export default BlogPage