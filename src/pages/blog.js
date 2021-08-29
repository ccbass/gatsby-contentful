import React from "react";

import Layout from "../components/layout/layout";
import { graphql, Link, useStaticQuery } from "gatsby";


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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postsArray = data.allMarkdownRemark.edges.map(post => {
    return (
      <li>
        <Link to={`/blog/${post.node.fields.slug}`}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
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