import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./shrimp.scss"

function shrimp() {
  return (
    <Layout>
      <MenuFish />
      <div className="shrimp">
        <div></div>
      </div>
    </Layout>
  )
}

export default shrimp
