import React from 'react'

import './Footer.scss'

const Footer = props => {
  const year =
    new Date().getFullYear() === 2019
      ? 2019
      : `2019 - ${new Date().getFullYear()}`
  return (
    <div className='footer'>
      <a href="mailto:tectonaby@gmail.com">tectonaby@gmail.com</a>
      <a href="tel:+375293361533">+375-29-336-15-33</a>
      <h6>© {year} Тектона Консалт</h6>
    </div>
  )
}

export default Footer
