import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

import "./trade.scss"

const trade = props => {
  return (
    <Layout>
      <div className="trade">
        <h2>Оптовая торговля</h2>
        <div className="grid_trade">
          <Link to="/grain" className="trade">
            <h4>Корма для С/Х животных</h4>
          </Link>
          <Link to="/gorbusha" className="fish">
            <h4>Рыба</h4>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default trade
