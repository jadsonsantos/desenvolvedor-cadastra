import React from 'react'

import { colors } from '../../data/variations'
import useFilters from '../../hooks/useFilters'

import Checkbox from '../Checkbox'

const ColorFilter = () => {
  const { handleColorClick } = useFilters()

  return (
    <div className="filters filters--color">
      {colors.map((color) => (
        <Checkbox
          key={color}
          id={color}
          label={color}
          handleCheckboxClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  )
}

export default ColorFilter
