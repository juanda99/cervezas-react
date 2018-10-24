import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from './Sidebar'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    )
  }
}

export default App
