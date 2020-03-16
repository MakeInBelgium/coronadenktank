import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <div style={{ marginBottom: '50px' }}>

      <nav className="navbar u-full-width" style={{ textAlign: 'center' }}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">Instructies</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/ikhebgemaakt">Ik heb gemaakt</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/ikHebNodig">Ik heb nodig</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/kaart">Op de kaart</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/awareness">Awareness</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar-spacer"></div>
    </div>
  )
}

export default Menu