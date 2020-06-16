import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./mackerel.scss"

function mackerel() {
  return (
    <Layout>
      <MenuFish />
      <div className="mackerel">
        <div>
          <h4>Скумбрия, 300-600 (средняя провеска 465 гр.)</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>4,80</span>
          </p>
          <h5>НДС 10%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default mackerel
