import React from 'react'

import { sizes } from '../../data/variations'
import useFilters from '../../hooks/useFilters'

import SizeItem from '../SizeItem'

const SizeFilter = () => {
  const { handleSizeClick } = useFilters()

  return (
    <div className="filters filters--size">
      {sizes.map((size) => (
        <SizeItem
          key={size}
          label={size}
          onClick={() => handleSizeClick(size)}
        />
      ))}
    </div>
  )
}

export default SizeFilter
