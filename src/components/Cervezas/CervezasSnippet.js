import React from 'react'
import PropTypes from 'prop-types'

function CervezasSnippet(props) {
  return (
    <article>
      <h1>{props.nombre}</h1>
      {props.desc ? <p>{props.desc}</p> : ''}
    </article>
  )
}

CervezasSnippet.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string
}

export default CervezasSnippet
