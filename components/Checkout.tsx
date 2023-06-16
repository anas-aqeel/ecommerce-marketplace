'use client'
import { useRouter } from 'next/navigation'
import { urlForImage } from '../sanity/lib/image'

export default function Checkout({ products }: any) {
  let router = useRouter()
  let formattedProducts = products.map((product: any) => ({
    price_data: {
      currency: 'USD',
      unit_amount: Math.round(product.price),
      product_data: {
        name: product.name,
        description: product.description,
        images: product.images.map((image: any) => urlForImage(image)?.url()),
      },
    },
    quantity: product.cart.quantity,
  }))
  let handleClick = async () => {
    let request = await fetch('/api/cart/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        products: formattedProducts,
      }),
    })
    let response = await request.json()
    router.push(response.checkoutSession.url, {
      forceOptimisticNavigation: true,
    })
  }
  return (
    <button
      onClick={handleClick}
      disabled={products.length === 0}
      className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
    >
      Checkout
    </button>
  )
}
