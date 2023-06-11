'use client'
import { urlForImage } from '../lib/sanityImageBuilder'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ProductCard = ({ product }: any) => {
  let router = useRouter()
  return (
    <>
      {/* component */}
      <Link
       href={`/products/${product._id}`}
       shallow
        className=" w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
      >
        <img
          className="w-full object-cover h-auto"
          src={urlForImage(product.images[0])?.url()}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {product.name}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 h-5 overflow-hidden text-gray-700">
            {product.description}.
          </p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              ${product.price}
            </p>
            <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
              $25.00
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductCard
