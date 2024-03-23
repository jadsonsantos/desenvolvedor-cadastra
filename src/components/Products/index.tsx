import React, { useContext, useEffect } from 'react'

import { ProductsContext } from '../../contexts/products'

import Button from '../Button'
import ProductItem from '../ProductItem'

const Products = () => {
  const { fetchAndSetProducts, products } = useContext(ProductsContext)

  useEffect(() => {
    fetchAndSetProducts()
  }, [])

  return (
    <section className="products">
      <ul className="products__list">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ul>
      <Button variation="secondary" specialClassName="button-load-more">
        Carregar mais
      </Button>
    </section>
  )
}

export default Products
