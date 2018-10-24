import React, { Component } from 'react'
import './Sidebar.css'

export class Sidebar extends Component {
  render() {
    return (
      <aside>
        <nav>
          <ul>
            <li>
              <a href="index">Inicio</a>
              <a href="cervezas">Cervezas</a>
              <a href="cervezas/listado">Listado de cervezas</a>
              <a href="cervezas/buscador">Buscador</a>
              <a href="contactar">Contactar</a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Sidebar
