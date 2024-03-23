import React from 'react'

import FilterLightbox from '../components/FilterLightbox'
import FilterMenu from '../components/FilterMenu'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'
import Select from '../components/Select'
import Title from '../components/Title'

import LightboxContextProvider from '../contexts/lightbox'
import ProductsContextProvider from '../contexts/products'
import { order } from '../data/variations'
import useIsMobile from '../hooks/useIsMobile'

const App = () => {
  const { isMobile } = useIsMobile()

  return (
    <ProductsContextProvider>
      <LightboxContextProvider>
        <Header />
        <main className="products-page">
          <div className="container header-content">
            <Title>Blusas</Title>
            {isMobile ? <FilterMenu /> : <Select options={order} />}
          </div>
          <div className="main-content container">
            <div className="filters">
              <Filters />
            </div>
            <Products />
          </div>
        </main>
        <Footer />
        <FilterLightbox />
      </LightboxContextProvider>
    </ProductsContextProvider>
  )
}

export default App
