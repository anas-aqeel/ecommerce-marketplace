'use client'
import { ShoppingCart, Star } from 'lucide-react'
import { urlForImage } from '../lib/sanityImageBuilder'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

const ProductCard = ({ product }: any) => {
  let router = useRouter()
  return (
    // <div className=" rounded-xl col-span-1 bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
    //  <button onClick={()=>router.push(`/products/${product._id}`)}>
    //     <div className="relative flex items-end overflow-hidden rounded-xl">
    //       <Image src={urlForImage(product.images[0])?.url()} width={'300'} height={200} className="w-full h-auto" alt="Hotel Photo" />
    //       <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
    //         <Star className="text-yellow-400  fill-yellow-400  text-base" />
    //         <span className="ml-1 text-sm text-slate-400">4.9</span>
    //       </div>
    //     </div>
    //     <div className="mt-1 p-2">
    //       <h2 className="text-slate-700">{product.name}</h2>
    //       <p className="mt-1 text-sm text-slate-400">Karachi, Pakistan</p>
    //       <div className="mt-3 flex items-end justify-between">
    //         <p className="text-lg font-bold text-blue-500">${product.price}</p>
    //         <button className="text-sm rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
    //           <ShoppingCart className="fill-black"/>
    //         </button>
    //       </div>
    //     </div>
    //   </button>
    // </div>
    <>
      {/* component */}
      <button onClick={()=>router.push(`/products/${product._id}`)} className=" w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
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
      </button >
    </>
  )
}

export default ProductCard
