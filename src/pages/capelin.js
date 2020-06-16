import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./capelin.scss"

function capelin() {
  return (
    <Layout>
      <MenuFish />
      <div className="capelin">
        <div>
          <h4>Мойва, Дальний Восток, Сахалин, с икрой.</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>7,33</span>
          </p>
          <h5>НДС 10%</h5>
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default capelin
