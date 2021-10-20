import React from "react"
import Layout from "../components/Layout/Layout"

import anchovy from "../images/anchovy.png"
import capelin from "../images/capelin.png"
import cod from "../images/cod.png"
import gorbusha from "../images/gorbusha.jpg"
import herring from "../images/herring.png"
import mackerel from "../images/mackerel.png"
import pollock from "../images/pollock.png"
import shrimp from "../images/shrimp.png"
import sprat from "../images/sprat.png"
import squid from "../images/squid.png"
import whiting from "../images/whiting.jpg"

import "./fish.scss"

let fish = [
  {
    name: "Хамса, Крым, производитель «Голдфиш»",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: anchovy,
  },
  {
    name: "Мойва, Дальний Восток, Сахалин, с икрой",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: capelin,
  },
  {
    name: "Треска, Дальний Восток, 1-2 кг.",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: cod,
  },
  {
    name: "Горбуша б/г",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: gorbusha,
  },
  {
    name:
      "Сельдь атлантическая, производитель Калининград - «ФОР» 350+(400гр.)",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: herring,
  },
  {
    name: "Скумбрия, 300-600 (средняя провеска 465 гр.)",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: mackerel,
  },
  {
    name: "Минтай 25+ (провеска средняя)",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: pollock,
  },
  {
    name: "Креветка северная в/м 70/90 (Россия/Сахалин)",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: shrimp,
  },
  {
    name: "Килька, Калиниград, блочная",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: sprat,
  },
  {
    name: "Кальмар Дальний Восток",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: squid,
  },
  {
    name: "Путассу, 24+",
    description: "Фасовка: на паллетах, коробки или пакеты",
    picture: whiting,
  },
]

function MenuFish() {
  return (
    <Layout>
      <div className="fish">
        <a
          className="price"
          href="https://drive.google.com/file/d/1HoCJ2APbw52NDmDCXjHz2Q_DaWmqw_1g/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          ПРАЙС-ЛИСТ
        </a>
        <div className="fish-cards">
          {fish.map(({ name, description, picture }) => {
            return (
              <div className="card" key={name}>
                <h4>{name}</h4>
                <img src={picture} alt="" />
                <p> {description} </p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default MenuFish
