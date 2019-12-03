import React from "./node_modules/react"

import "./Header.scss"

const Header = props => (
  <div className="header">
    <img src={require("./images/logo.png")} alt="" />
  </div>
)

export default Header
