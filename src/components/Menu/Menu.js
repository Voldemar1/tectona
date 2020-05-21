import React from "react"
import { Link } from "gatsby"

import "./Menu.scss"

const Menu = props => {
  return (
    <div className="menu">
      <Link to="/consalting" className="consalting">
        <h4>Консалтинг</h4>
      </Link>
      <Link to="/trade" className="trade">
        <h4>Оптовая торговля</h4>
      </Link>
      <Link to="/it" className="it">
        <h4>IT</h4>
      </Link>
    </div>
  )
}

export default Menu
