'use client'
import { useRouter } from 'next/navigation'
import { urlForImage } from '../sanity/lib/image'
import { Loader2 } from 'lucide-react'

export default function Checkout({ products }: any) {
  let router = useRouter()
  let formattedProducts = products.map((product: any) => {
    return {
      price_data: {
        currency: 'USD',
        unit_amount: Math.round(product.price) * 100,
        product_data: {
          name: product.name,
          description:
            product.description.lenght > 150
              ? product.description
              : product.description.slice(0, 150) + '...',
          images: product.images.map((image: any) => urlForImage(image)?.url()),
        },
      },
      quantity: product.cart.quantity,
    }
  })
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
      className={`group relative flex items-center w-full justify-center rounded-md border focus:cursor-not-allowed ${
        products.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
      }  border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700`}
    >
      Checkout
      <Loader2 className="text-white  text-lg absolute right-4 top-auto bottom-auto invisible group-focus:visible  animate-spin" />
    </button>
  )
}
