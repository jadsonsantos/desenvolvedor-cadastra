import React from 'react'

import CartButton from '../CartButton'
import Container from '../Container'

const Header = () => {
  return (
    <header className="header">
      <Container name="header__container">
        <a href="/">
          <img src="../../img/cadastra-logo.png" />
        </a>
        <CartButton />
      </Container>
    </header>
  )
}

export default Header
