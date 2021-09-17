import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const links = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/blog": "Blog",
  }
  const linksArray = [
    {to: "/", label: "Home"},
    {to: "/about", label: "About"},
    {to: "/contact", label: "Contact"},
    {to: "/blog", label: "Blog"},
  ]
  
  const ListItems = linksArray.map((linkObj, index) => {
    return (
      <li key={index}>
        <Link
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          to={linkObj.to}
        >
          {linkObj.label}

        </Link>
      </li>
    )
  })


  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          {ListItems}
        </ul>
      </nav>
    </header>
  )
}

export default Header
