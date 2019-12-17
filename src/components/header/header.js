import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = props => (
  <div className="header">
    <Link to="/"><img src={require("./images/logo.png")} alt="" /></Link>
    <div className="contacts">
      <div className="phones-block">
        <div>
        <img className="phones-svg" src={require("./images/telegram.svg")} alt="" />
        <img className="phones-svg" src={require("./images/whatsapp.svg")} alt="" />
        <img className="phones-svg" src={require("./images/viber.svg")} alt="" />
        <img className="phones-svg" src={require("./images/phone.svg")} alt="" />
        </div>
        <div className="phones">
        <a href="tel:+375293361533">+375-29-336-15-33</a>
        <a href="tel:+375293659445">+375-29-365-94-45</a>
        </div>
      </div>
    
    <a className="fax" href="fax:+375177452349">
      <img src={require("./images/fax.svg")} alt="" />
      +375-1774-52-3-49
    </a>   
    <a className="mail" href="mailto:tectonaby@gmail.com">
      <img src={require("./images/gmail.svg")} alt="" />
      tectonaby@gmail.com
    </a>
    <a className="skype" href="skype:valentin041">
      <img src={require("./images/skype.svg")} alt="" />
      valentin041
    </a>
    </div>
  </div>
)

export default Header
