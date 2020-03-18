import React from 'react'
import { css } from 'glamor'
import { Link } from 'react-router-dom'
import logo from './../assets/logo_lamp.svg';

const logoHolder = css({
  width: '30px',
  overflow: 'hidden',
  borderRadius: '50%',
  float: 'left',
  margin: '15px'
})
const Menu = () => {

  return (
    <nav className="navbar u-full-width" style={{ textAlign: 'center' }}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            <div {...logoHolder}><img src={logo} alt="" /></div></Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/instructies">Instructies</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/ikhebmaskers">Ik heb maskers/...</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/ikkanrijden">Ik wil rijden</Link>
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
    </nav >
  )
}

export default Menu