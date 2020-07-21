import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./shrimp.scss"

function shrimp() {
  return (
    <Layout>
      <MenuFish />
      <div className="shrimp">
        <div>
          <h4>Креветка северная в/м 70/90 (Россия/Сахалин)</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>3,43</span>
          </p>
          <h5>НДС 10%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default shrimp
