import React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page!</h1>
      <p>This is a bio about the creator of this blog!</p>
      <p>Want to chat?</p> <Link to="/contact">Reach out!</Link>
    </div>
  )
};

export default AboutPage