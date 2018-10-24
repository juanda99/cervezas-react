import React from 'react'
import PropTypes from 'prop-types'
import CervezaSnippet from '../components/Cervezas/CervezasSnippet'

const CervezasList = props => {
  const { cervezas } = this.props
  return (
    <div>
      {cervezas.map(cerveza => (
        <CervezaSnippet nombre={cerveza.nombre} desc={cerveza.desc} />
      ))}
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.required,
      desc: PropTypes.string
    }).required
  )
}

export default CervezasList
