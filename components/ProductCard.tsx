import { Star } from "lucide-react"
import { urlForImage } from "../lib/sanityImageBuilder"
import React from 'react'
import Image from "next/image"



const ProductCard = ({ product }: any) => {
    return (
      <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="#">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <Image src={urlForImage(product.images[0])?.url()} alt="Hotel Photo" />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <Star className="text-yellow-400  fill-yellow-400  text-base" />
              <span className="ml-1 text-sm text-slate-400">4.9</span>
            </div>
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-slate-700">{product.name}</h2>
            <p className="mt-1 text-sm text-slate-400">Karachi, Pakistan</p>
            <div className="mt-3 flex items-end justify-between">
              <p className="text-lg font-bold text-blue-500">${product.price}</p>
              <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <button className="text-sm">Add to cart</button>
              </div>
            </div>
          </div>
        </a>
      </article>
    )
  }

  export default ProductCard