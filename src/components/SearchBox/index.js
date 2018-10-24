import React, { Component } from 'react'

export default class SearchBox extends Component {
  state = {
    disabled: true,
    busqueda: ''
  }

  handleChange = evento => {
    this.setState({ disabled: evento.target.value ? false : true })
  }

  render() {
    const { disabled } = this.state
    return (
      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
          <button type="submit" disabled={disabled}>
            Buscar
          </button>
        </form>
      </div>
    )
  }
}
