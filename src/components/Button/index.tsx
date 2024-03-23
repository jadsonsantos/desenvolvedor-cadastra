import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variation?: string
  specialClassName?: string
}

const Button = ({
  children,
  variation,
  specialClassName,
  ...rest
}: ButtonProps) => {
  const customClassName = variation ? `button button--${variation}` : `button`

  return (
    <button
      className={`${customClassName} ${specialClassName || ''}`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
