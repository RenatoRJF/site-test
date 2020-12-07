import React from "react"
import { FormattedMessage } from 'gatsby-plugin-intl'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p><FormattedMessage id="welcome" /></p>
  </Layout>
)

export default IndexPage
