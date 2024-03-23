import React from 'react'

import { price_range } from '../../data/variations'
import useFilters from '../../hooks/useFilters'

import Checkbox from '../Checkbox'

const PriceFilter = () => {
  const { handlePriceClick } = useFilters()

  return (
    <div className="filters filters--price">
      {price_range.map((price) => (
        <Checkbox
          handleCheckboxClick={() => handlePriceClick(price.min, price.max)}
          key={price.label}
          id={price.label}
          label={price.label}
        />
      ))}
    </div>
  )
}

export default PriceFilter
