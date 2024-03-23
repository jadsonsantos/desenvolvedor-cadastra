import React from 'react'

interface FilterTitleProps {
  children: React.ReactNode
}

const FilterTitle = ({ children }: FilterTitleProps) => {
  return <h4 className="filter-title">{children}</h4>
}

export default FilterTitle
