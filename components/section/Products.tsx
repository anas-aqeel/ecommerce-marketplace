import React, { use } from 'react'
import { client } from '../../lib/sanityClient'
import ProductCard from '../ProductCard'



const fetchProducts = async () => {
  try {
    const query = '*[_type == "product"]'
    const products = await client.fetch(query)
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

const Products = () => {
  let products = use(fetchProducts())

  return (
    <>
      {products.map((product: any,i:number) => (
        <ProductCard key={i} product={product} />
      ))}
    </>
  )
}

export default Products
