import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <Header
          titulo="Buscador de cervezas"
          subtitulo="Elige la cerveza que más te guste para ver sus características"
        />
        <div id="wrapper">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
