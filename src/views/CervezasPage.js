import React from 'react'
import SearchBox from '../components/SearchBox'
import CervezasList from '../containers/CervezasList'

export default function CervezasPage() {
  const cervezas = [
    { nombre: 'Ambar', desc: 'Cerveza de Aragón' },
    { nombre: 'Coronita', desc: 'Cerveza mejicana' }
  ]
  return (
    <div>
      <SearchBox />
      <CervezasList cervezas={cervezas} />
    </div>
  )
}
