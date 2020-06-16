import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./pollock.scss"

function pollock() {
  return (
    <Layout>
      <MenuFish />
      <div className="pollock">
        <div>
          <h4>Минтай 25+ (провеска средняя)</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>3,38</span>
          </p>
          <h4>Минтай 30+ (провеска средняя)</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>3,85</span>
          </p>
          <h5>НДС 10%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default pollock
