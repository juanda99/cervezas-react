import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'

export default class CervezasPage extends Component {
  state = {
    cervezas: [],
    error: ''
  }

  componentDidMount = () => {
    this.setState({ error: '' })
    fetch('http://192.168.13.25:8080/api/cervezas')
      .then(response => response.json())
      .then(cervezas => this.setState({ cervezas }))
      .catch(error => {
        console.log(`Este es mi error: ${error}`)
        this.setState({ error: error.message })
      })
  }

  render() {
    const { cervezas, error } = this.state
    return (
      <div>
        <SearchBox />
        <CervezasList cervezas={cervezas} />
        {error ? <p>{error}</p> : ''}
      </div>
    )
  }
}
