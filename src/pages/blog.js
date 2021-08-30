import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";
import * as blogStyles from './blog.module.scss'
import Head from "../components/head";


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const postsArray = data.allContentfulBlogPost.edges.map((post, index) => {
    return (
      <li className={blogStyles.post} key={`${index}-${post.node.slug}`}>
        <Link to={`/blog/${post.node.slug}`}>
          <h2>{post.node.title}</h2>
          <p>{post.node.publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        { postsArray }
      </ol>
    </Layout>
  )
};

export default BlogPage