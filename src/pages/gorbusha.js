import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./gorbusha.scss"

function gorbusha() {
  return (
    <Layout>
      <MenuFish />
      <div className="gorbusha">
        <div>
          <h4>Горбуша б/г</h4>
          {/* <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>4,48</span>
          </p>
          <h4>Горбуша б/г штучная</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>6,86</span>
          </p>
          <h5>НДС 10%</h5> */}
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default gorbusha
