import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar-main">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <span>ShokadinuEU</span>
          </div>
          <div className="navbar-menu">
            <ul className="menu-list">
              <li className="menu-link"></li>
              <li className="menu-link"></li>
              <li className="menu-link"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
