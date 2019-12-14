import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import "./Menu.scss"

const Menu = props => {
    return (
        <div className="menu">
            <Link to="/consalting" className="consalting"><h4>Консалтинг</h4></Link>
            <Link to="" className="trade"><h4>Оптовая торговля</h4></Link>
            {/* <Link to="/it">IT услуги</Link> */}
        </div>
    )
}

Menu.propTypes = {

}

export default Menu
