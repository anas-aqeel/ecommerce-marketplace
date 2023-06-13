'use client'
import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import { CARTCONTEXT } from './CartContext'

const Products = () => {
  let { products } = useContext(CARTCONTEXT)

  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products &&
        products.map((product: any, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
    </div>
  )
}

export default Products
