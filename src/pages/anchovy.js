import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./anchovy.scss"

function anchovy() {
  return (
    <Layout>
      <MenuFish />
      <div className="anchovy">
        <div>
          <h4>Хамса, Крым, производитель «Голдфиш»</h4>
          {/* <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>2,21</span>
          </p>
          <h5>НДС 10%</h5> */}
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default anchovy
