import React, { useContext } from 'react'

import { LightboxContext } from '../../contexts/lightbox'

import Button from '../Button'

const FilterButtons = () => {
  const { handleCloseLightbox } = useContext(LightboxContext)

  return (
    <div className="filter-buttons">
      <Button variation="secondary" onClick={handleCloseLightbox}>
        Aplicar
      </Button>
      <Button variation="tertiary">Limpar</Button>
    </div>
  )
}

export default FilterButtons
