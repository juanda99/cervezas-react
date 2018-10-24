import React, { Component } from 'react'
import './Main.css'

export class Main extends Component {
  render() {
    return (
      <main>
        <Searchbox />
        <CervezasList />
      </main>
    )
  }
}

export default Main
