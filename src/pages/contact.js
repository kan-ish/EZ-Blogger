import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>
        <b>InstaGram:</b>{" "}
        <Link to="https://www.instagram.com">@kanishk198</Link> <br></br>
        <b>Facebook:</b> Kanishk Singh
      </p>{" "}
    </Layout>
  )
}

export default ContactPage
