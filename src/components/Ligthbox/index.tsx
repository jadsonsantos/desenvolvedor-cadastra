import React, { useContext } from 'react'

import { LightboxContext } from '../../contexts/lightbox'

interface LightboxProps {
  children: React.ReactNode
  title: string
}

const Lightbox = ({ children, title }: LightboxProps) => {
  const { handleCloseLightbox, isLightboxActive } = useContext(LightboxContext)
  const customClassName = isLightboxActive
    ? `lightbox lightbox--active`
    : 'lightbox'

  return (
    <div className={customClassName}>
      <div className="lightbox__header">
        {title}
        <span onClick={handleCloseLightbox}>
          <img src="../../img/icons/close.png" />
        </span>
      </div>
      <div className="lightbox__content">{children}</div>
    </div>
  )
}

export default Lightbox
