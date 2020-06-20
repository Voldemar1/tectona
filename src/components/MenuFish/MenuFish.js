import React from "react"
import { Link } from "gatsby"

import "./MenuFish.scss"

function MenuFish() {
  return (
    <div className="menufish">
      <Link to="/gorbusha">Горбуша</Link>
      <Link to="/pollock">Минтай</Link>
      <Link to="/herring">Сельдь</Link>
      <Link to="/anchovy">Хамса</Link>
      <Link to="/mackerel">Скумбрия</Link>
      <Link to="/sprat">Килька</Link>
      <Link to="/capelin">Мойва</Link>
      <Link to="/cod">Треска</Link>
      <Link to="/whiting">Путассу</Link>
      <Link to="/squid">Кальмар</Link>
      <Link to="/shrimp">Креветки</Link>
    </div>
  )
}

export default MenuFish
