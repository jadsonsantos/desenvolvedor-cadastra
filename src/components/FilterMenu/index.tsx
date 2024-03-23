import React, { useContext } from 'react'

import { LightboxContext } from '../../contexts/lightbox'

const FilterMenu = () => {
  const { openLightbox } = useContext(LightboxContext)

  return (
    <div className="filter-menu">
      <div className="filter-menu__option" onClick={openLightbox}>
        Filtrar
      </div>
      <div className="filter-menu__option">Ordenar</div>
    </div>
  )
}

export default FilterMenu
