import React, { ChangeEvent, useState } from 'react'

interface CheckboxProps {
  id: string
  label: string
  handleCheckboxClick?: (color: string) => void
}

const Checkbox = ({ id, label, handleCheckboxClick }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    handleCheckboxClick && handleCheckboxClick(id)
  }

  return (
    <div className="checkbox">
      <input
        onChange={handleCheckboxChange}
        id={id}
        name={id}
        checked={isChecked}
        type="checkbox"
        className="checkbox__input"
      />
      <label className="checkbox__label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
