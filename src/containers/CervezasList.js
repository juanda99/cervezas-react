import React from 'react'
import PropTypes from 'prop-types'
import CervezaSnippet from '../components/Cervezas/CervezasSnippet'

const CervezasList = ({ cervezas }) => {
  // const { cervezas, bares } = props
  return (
    <div>
      {cervezas.map(cerveza => (
        <CervezaSnippet
          key={cerveza.nombre}
          nombre={cerveza.nombre}
          desc={cerveza.descripción}
          envase={cerveza.envase}
        />
      ))}
    </div>
  )
}

CervezasList.propTypes = {
  cervezas: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.required,
      desc: PropTypes.string
    })
  ).isRequired
}

export default CervezasList
