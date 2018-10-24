import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'

const styles = {
  p: {
    fontSize: '30px'
  }
}

export class Header extends Component {
  static propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string
  }

  render() {
    const { titulo, subtitulo } = this.props
    return (
      <header>
        <h1>{titulo}</h1>
        {subtitulo ? <p style={styles.p}>{subtitulo}</p> : ''}
      </header>
    )
  }
}

export default Header
