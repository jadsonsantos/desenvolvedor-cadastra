import { useState } from 'react'

const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelectClick = () => {
    setIsOpen(!isOpen)
  }
  return { handleSelectClick, isOpen }
}

export default useSelect
