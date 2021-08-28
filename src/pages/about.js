import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page!</h1>
      <p>This is a bio about the creator of this blog!</p>
      <p>Want to chat?</p> <Link to="/contact">Reach out!</Link>
    </Layout>
  )
};

export default AboutPage