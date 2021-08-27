import React from "react";
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to the Index</h1>
      <h2>This is a for a full-stack dev!</h2>
      <p>Need a dev?</p><Link to="/contact">Contact Me!</Link>
    </div>
  )
}

export default IndexPage