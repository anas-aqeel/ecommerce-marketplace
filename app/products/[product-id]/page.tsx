'use client'
import React, { use } from 'react'
import ProductFeeds from '../../../components/section/ProductFeeds'
import { Heart, Star } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { fetchProductById } from '../../../sanity/lib/fetchProductById'
import { urlForImage } from '../../../lib/sanityImageBuilder'
import AddToCart from '../../../components/AddToCart'

const Page = () => {
  let productId = usePathname().split('/')[2]
  let product = use(fetchProductById(productId))[0]

  return (
    <div>
      <>
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={urlForImage(product.images[0])?.url()}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <Star className="fill-yellow-500 text-yellow-500 text-sm" />
                    <Star className="fill-yellow-500 text-yellow-500 text-sm" />
                    <Star className="fill-yellow-500 text-yellow-500 text-sm" />
                    <Star className="fill-yellow-500 text-yellow-500 text-sm" />
                    <Star className="text-yellow-500 text-sm" />
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <AddToCart quantity={1} productId={product._id} />
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <Heart className="text-red-600 hover:fill-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductFeeds />
      </>
    </div>
  )
}

export default Page
