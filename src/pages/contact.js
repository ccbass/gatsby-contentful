import React from "react";
import Head from "../components/head";

import Layout from "../components/layout/layout";

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <h1>Contact Me:</h1>
      <p>Contact page containing email, phone, etc.</p>
      <a href="https://www.linkedin.com/in/colin-bassett" rel="noreferrer" target="_blank">LinkedIn Profile</a>
    </Layout>
  )
}

export default ContactPage