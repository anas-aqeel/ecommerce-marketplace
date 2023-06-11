"use client"
import FeaturedProducts from '../components/section/FeaturedProducts'
import Front from '../components/section/Front'
import Hero from '../components/section/Hero'

export default function Home({ session }: any) {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Front/>
    </>
  )
}
