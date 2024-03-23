import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  name?: string
}

const Container = ({ children, name }: ContainerProps) => {
  const customClassName = name ? `container ${name}` : 'container'

  return <div className={customClassName}>{children}</div>
}

export default Container
