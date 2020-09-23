import React from "react"
import Layout from "../components/Layout/Layout"
import MenuFish from "../components/MenuFish/MenuFish"

import "./herring.scss"

function herring() {
  return (
    <Layout>
      <MenuFish />
      <div className="herring">
        <div>
          <h4>
            Сельдь атлантическая, производитель Калининград-«ФОР» 350+(400гр.)
          </h4>
          {/* <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>2,74</span>
          </p>
          <h4>Сельдь Иваси, для переработчиков и на соление</h4>
          <p>
            <span>Цена за 1 кг. в бел.руб. без НДС: </span>
            <span>2,43</span>
          </p>
          <h5>НДС 10%</h5> */}
          <h5>Фасовка: на паллетах, коробки или пакеты</h5>
        </div>
      </div>
    </Layout>
  )
}

export default herring
