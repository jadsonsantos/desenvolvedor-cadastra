import React from 'react'

import useIsMobile from '../../hooks/useIsMobile'

import FilterTitle from '../FilterTitle'
import ColorFilter from './ColorFilter'
import PriceFilter from './PriceFilter'
import SizeFilter from './SizeFilter'

const Filters = () => {
  const { isMobile } = useIsMobile()

  return (
    <>
      {!isMobile && (
        <>
          <FilterTitle>Cores</FilterTitle>
          <ColorFilter />

          <FilterTitle>Tamanhos</FilterTitle>
          <SizeFilter />

          <FilterTitle>Faixa de Preço</FilterTitle>
          <PriceFilter />
        </>
      )}
    </>
  )
}

export default Filters
