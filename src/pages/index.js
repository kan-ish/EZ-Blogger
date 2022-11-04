import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hellow World!</h1>
      <Link to="/blog">Blog</Link> <br></br>
      <Link to="/about">About Me</Link> <br></br>
      <Link to="/contact">Contact Me</Link> <br></br>
    </div>
  )
}

export default IndexPage
