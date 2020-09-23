import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./cod.scss"

function cod() {
  return (
    <Layout>
      <MenuFish />
      <div className="cod">
        <div>
          <h4>Треска, Дальний Восток, 1-2 кг.</h4>
          {/* <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>6,38</span>
          </p>
          <h5>НДС 10%</h5> */}
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default cod
