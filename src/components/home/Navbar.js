import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="navbar-main">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <a href="https://shokadinueu.github.io/react-cool-apps/">ShokadinuEU</a >
          </div>
          <div className="navbar-menu">
            <ul className="menu-list">
              <li className="menu-link"><a href="https://shokadinueu.github.io/react-cool-apps/">Home</a ></li>
              <li className="menu-link"><NavLink className="link" to="/user-form">Step Form</NavLink></li>
              <li className="menu-link"><NavLink className="link" to="/todo-app">Todo App</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
