import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link> <br></br>
          </li>
          <li>
            {" "}
            <Link to="/blog">Blog</Link> <br></br>
          </li>
          <li>
            {" "}
            <Link to="/about">About Me</Link> <br></br>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Me</Link> <br></br>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
