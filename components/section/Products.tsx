'use client'
import React, { useContext } from 'react'
import ProductCard from '../ProductCard'
import { CARTCONTEXT } from './CartContext'
import LoadingCard from '../LoadingCard'

const Products = () => {
  let { products } = useContext(CARTCONTEXT)

  return (
    <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-7">
      {products == 'loading'
        ? [1, 2, 3, 4].map(() => <LoadingCard />)
        : products &&
          products.map((product: any, i: number) => (
            <ProductCard key={i} product={product} />
          ))}
    </div>
  )
}

export default Products
