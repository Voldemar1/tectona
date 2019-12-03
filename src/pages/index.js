import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ConsultingServices from "../components/ConsultingServices/ConsultingServices"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ConsultingServices />
  </Layout>
)

export default IndexPage
