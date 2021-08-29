import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import * as blogStyles from './blog.module.scss'


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
      <li className={blogStyles.post}>
        <Link to={`/blog/${post.node.fields.slug}`}>
          <h2>{post.node.frontmatter.title}</h2>
          <p>{post.node.frontmatter.date}</p>
        </Link>
      </li>
    )
  })


  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        { postsArray }
      </ol>
    </Layout>
  )
};

export default BlogPage