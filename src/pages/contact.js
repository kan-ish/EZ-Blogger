import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"
import Header from "../components/Header"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <b>
        InstaGram: <Link to="https://www.instagram.com">@kanishk198</Link>
      </b>{" "}
      <br></br>
      <b>Facebook: Kanishk Singh</b>
      <Footer />
    </div>
  )
}

export default ContactPage
