import React, { createContext, useState } from 'react'

import { fetchProducts } from '../services'

import { Product } from '../ts/Product'

interface Props {
  children: React.ReactNode
}

export const ProductsContext = createContext({
  products: [] as Product[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setProducts: (products: Product[]) => {},
  fetchAndSetProducts: () => Promise.resolve(),
})

const ProductsContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchAndSetProducts = async () => {
    const fetchedProducts = await fetchProducts()
    setProducts(fetchedProducts)
  }

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, fetchAndSetProducts }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
