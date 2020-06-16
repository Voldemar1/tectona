import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./squid.scss"

function squid() {
  return (
    <Layout>
      <MenuFish />
      <div className="squid">
        <div>
          <h4>Кальмар Дальний Восток</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>3,57</span>
          </p>
          <h5>НДС 20%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default squid
