import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  return (
    <nav className="navbar u-full-width" style={{ textAlign: 'center' }}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/instructies">Instructies</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/ikhebmaskers">Ik heb maskers/...</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/inzamelpunten">Inzamelpunten</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/ikHebNodig">Ik heb nodig</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/awareness">Bewustmaking</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu