import React from 'react'

import Accordion from '../Accordion'
import FilterButtons from '../FilterButons'
import ColorFilter from '../Filters/ColorFilter'
import PriceFilter from '../Filters/PriceFilter'
import SizeFilter from '../Filters/SizeFilter'
import Lightbox from '../Ligthbox'

const FilterLightbox = () => {
  return (
    <Lightbox title="Filtrar">
      <Accordion title="Cores">
        <ColorFilter />
      </Accordion>
      <Accordion title="Tamanhos">
        <SizeFilter />
      </Accordion>
      <Accordion title="Faixa de Preço">
        <PriceFilter />
      </Accordion>
      <FilterButtons />
    </Lightbox>
  )
}

export default FilterLightbox
