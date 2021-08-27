import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";

const AboutPage = () => {
  return (
    <div>
      <h1>About Page!</h1>
      <p>This is a bio about the creator of this blog!</p>
      <p>Want to chat?</p> <Link to="/contact">Reach out!</Link>
      <Footer />
    </div>
  )
};

export default AboutPage