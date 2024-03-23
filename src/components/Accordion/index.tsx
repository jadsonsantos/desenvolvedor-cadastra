import React, { useState } from 'react'

interface AccordionProps {
  children: React.ReactNode
  title: string
}

const Accordion = ({ children, title }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const customClassName = isActive ? `accordion accordion--active` : 'accordion'

  return (
    <div className={customClassName}>
      <div className="accordion__header" onClick={handleClick}>
        {title}
        <img src="../../img/icons/arrow.png" />
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  )
}

export default Accordion
