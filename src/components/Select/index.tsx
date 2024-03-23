import React from 'react'

import useSelect from './useSelect'

interface SelectProps {
  options: string[]
}

const Select = ({ options }: SelectProps) => {
  const { handleSelectClick, isOpen } = useSelect()

  const customClassName = isOpen ? 'select select--open' : 'select'

  return (
    <div className={customClassName}>
      <span className="select__current" onClick={handleSelectClick}>
        Ordenar por:
        <img src="../../img/icons/arrow.png" width="12" height="9" />
      </span>
      <ul className="select__list">
        {options.map((option) => (
          <li key={option} className="select__option">
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
