import { useContext } from 'react'

import { ProductsContext } from '../contexts/products'

const useFilters = () => {
  const { products, setProducts } = useContext(ProductsContext)

  const handleColorClick = (color: string) => {
    const result = products.map((product) => ({
      ...product,
      isNotFiltered: product.color !== color,
    }))

    setProducts(result)
  }

  const handleSizeClick = (size: string) => {
    const result = products.map((product) => ({
      ...product,
      isNotFiltered: !product.size.includes(size),
    }))

    setProducts(result)
  }

  const handlePriceClick = (min: number, max: number) => {
    const result = products.map((product) => ({
      ...product,
      isNotFiltered: !(product.price >= min && product.price <= max),
    }))

    setProducts(result)
  }

  return { handleColorClick, handlePriceClick, handleSizeClick }
}

export default useFilters
