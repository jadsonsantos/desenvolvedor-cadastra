import React from 'react'

import { formatCurrency } from '../../utils'

import { Product } from '../../ts/Product'
import Button from '../Button'

interface ProductProps {
  product: Product
}

const ProductItem = ({ product }: ProductProps) => {
  const { image, name, price, parcelamento, isNotFiltered } = product

  const installments = `até ${parcelamento[0]}x de R$${formatCurrency(parcelamento[1])}`

  const liClassName = isNotFiltered
    ? 'product product--not-filtered'
    : 'product'

  return (
    <li className={liClassName}>
      <div>
        <img src={`../../${image}`} loading="lazy" alt={name} />
      </div>
      <p className="product__name">{name}</p>
      <strong className="product__price">R$ {formatCurrency(price)}</strong>
      <p className="product__installments">{installments}</p>
      <Button specialClassName="product__buy-button" variation="primary">
        Comprar
      </Button>
    </li>
  )
}

export default ProductItem
