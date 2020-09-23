import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./sprat.scss"

function sprat() {
  return (
    <Layout>
      <MenuFish />
      <div className="sprat">
        <div>
          <h4>Килька, Калиниград, блочная</h4>
          {/* <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>2,84</span>
          </p>
          <h5>НДС 10%</h5> */}
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default sprat
