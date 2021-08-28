import React from "react";
import { Link } from 'gatsby';
import Footer from "../components/footer";
import Header from "../components/header";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to the Index</h1>
      <h2>This is a for a full-stack dev!</h2>
      <p>Need a dev?</p><Link to="/contact">Contact Me!</Link>
      <Footer />
    </div>
  )
}

export default IndexPage