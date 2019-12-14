import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Menu from "../components/Menu/Menu";

import "./index.scss";

const IndexPage = () => (
  <div className="index">
    <Layout >
      <SEO title="Home" />
      <h2>Группа компаний "Тектона"</h2>
      <Menu />
  </Layout>
  </div>
)

export default IndexPage
