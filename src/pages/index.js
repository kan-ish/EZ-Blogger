import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"
import Head from "../components/Head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I am the next big developer from India.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
