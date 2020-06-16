import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import Menu from "../components/Menu/Menu"
import { setConfig } from "react-hot-loader"

import "./index.scss"

setConfig({
  showReactDomPatchNotification: false,
})

const IndexPage = () => (
  <div className="index">
    <Layout>
      <SEO title="Home" />
      <h2>ГРУППА КОМПАНИЙ "ТЕКТОНА"</h2>
      <Menu />
    </Layout>
  </div>
)

export default IndexPage
