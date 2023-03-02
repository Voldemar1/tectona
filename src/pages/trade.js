import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

import "./trade.scss"

const trade = props => {
  return (
    <Layout>
      <div className="trade">
        <h2>Оптовая торговля</h2>
        <a
          href="https://drive.google.com/file/d/1-1tuXkXprxTwsF0DORIc7dSPQdR-Ilyh/edit?usp=share_link&ouid=107365724329502767170&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          Глицерин
        </a>
        <div className="grid_trade">
          <Link to="/grain" className="trade">
            <h4>Корма для С/Х животных</h4>
          </Link>
          {/* <Link to="/fish" className="fish-menu">
            <h4>Рыба</h4>
          </Link> */}
          <Link
            href="https://docs.google.com/file/d/1AIjlzxYTB1kznLYfYKhLQ5oTBR1nWa25/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="biosil"
          >
            <h4>Биологический консервант БИО-СИЛ</h4>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default trade
