import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"

export default function NotFound() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}