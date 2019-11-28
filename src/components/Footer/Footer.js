import React from 'react'
import PropTypes from 'prop-types'

import './Footer.scss'

const Footer = props => {
  return (
    <div className='footer'>
      <a href="mailto:tectonaby@gmail.com">tectonaby@gmail.com</a>
      <a href="tel:+375293361533">+375-29-336-15-33</a>
      <h6>© {new Date().getFullYear()} Тектона Консалт</h6>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer
