import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title='About' />
      <h1>About Colin:</h1>
      <p>This is a bio about Colin</p>
      <p>Want to chat?</p> <Link to="/contact">Reach out!</Link>
    </Layout>
  )
};

export default AboutPage