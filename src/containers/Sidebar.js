import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export class Sidebar extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
              <Link to="/cervezas">Buscar cervezas</Link>
              <Link to="/contact">Contactar</Link>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
