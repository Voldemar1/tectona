import React from "react"

import "./Footer.scss"

const Footer = props => {
  const year =
    new Date().getFullYear() === 2019
      ? 2019
      : `2019 - ${new Date().getFullYear()}`
  return (
    <div className="footer">
      <h5>© {year} Группа компаний Тектона</h5>
    </div>
  )
}

export default Footer
