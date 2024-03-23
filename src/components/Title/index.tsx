import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <h1 className="title">{children}</h1>
}

export default Title
