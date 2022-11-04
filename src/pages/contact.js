import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <b>
        InstaGram: <Link to="https://www.instagram.com">@kanishk198</Link>
      </b>{" "}
      <br></br>
      <b>Facebook: Kanishk Singh</b>
    </Layout>
  )
}

export default ContactPage
