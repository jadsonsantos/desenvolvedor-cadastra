import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface Props {
  children: React.ReactNode
}

interface LightboxContextType {
  isLightboxActive: boolean
  setIsLightboxActive: Dispatch<SetStateAction<boolean>>
  handleCloseLightbox: () => void
  openLightbox: () => void
}

export const LightboxContext = createContext<LightboxContextType>({
  isLightboxActive: false,
  setIsLightboxActive: () => {},
  handleCloseLightbox: () => {},
  openLightbox: () => {},
})

const LightboxContextProvider = ({ children }: Props) => {
  const [isLightboxActive, setIsLightboxActive] = useState(false)

  const handleCloseLightbox = () => {
    setIsLightboxActive(false)
  }

  const openLightbox = () => {
    setIsLightboxActive(true)
  }

  return (
    <LightboxContext.Provider
      value={{
        isLightboxActive,
        setIsLightboxActive,
        handleCloseLightbox,
        openLightbox,
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export default LightboxContextProvider
