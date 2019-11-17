import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ("./header.scss")

const Header = props => (
  <div className="header">
    <img src={require("./images/logo.png")} alt="" />
  </div>
)

export default Header
