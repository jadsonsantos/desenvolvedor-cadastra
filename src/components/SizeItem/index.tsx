import React from 'react'

interface SizeItemProps {
  label: string
  onClick?: (size: string) => void
}

const SizeItem = ({ label, onClick }: SizeItemProps) => {
  return (
    <span className="size-item" onClick={() => onClick(label)}>
      {label}
    </span>
  )
}

export default SizeItem
