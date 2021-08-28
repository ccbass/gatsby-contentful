import React from "react";
import { Link } from 'gatsby';

import Layout from "../components/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome.</h1>
      <h2>I'm Colin, an engineer based out of Oregon.</h2>
      <p>Need a dev? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage