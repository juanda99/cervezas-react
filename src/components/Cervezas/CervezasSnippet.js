import React from 'react'
import PropTypes from 'prop-types'

const CervezasSnippet = ({ nombre, desc, envase }) => (
  <article>
    <h1>{nombre}</h1>
    {desc ? (
      <div>
        <h2>Descripción</h2>
        <p>{desc}</p>
      </div>
    ) : (
      ''
    )}
    {envase ? <p>Tipo de envase: {envase}</p> : ''}
  </article>
)

CervezasSnippet.propTypes = {
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string,
  envase: PropTypes.string
}

export default CervezasSnippet
