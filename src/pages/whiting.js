import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./whiting.scss"

function whiting() {
  return (
    <Layout>
      <MenuFish />
      <div className="whiting">
        <div>
          <h4>Путассу, 24+</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>1,48</span>
          </p>
          <h5>НДС 10%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default whiting
