'use client'
import Link from 'next/link'
import MenuCard from './menuCard'
import { Popover } from '@headlessui/react'
const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Explore', href: '/products', current: false },
  { name: 'Ceate', href: '/studio', current: false },
  { name: 'Contact', href: '#', current: false },
]

export default function Navbar() {
  return (
    <Popover>
    <nav className="fixed top-0 left-0 z-10 w-full border-b border-gray-200 bg-white py-2.5 px-0 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            E-COmMERce
          </span>
        </Link>

        <div
          className="hidden w-full items-center justify-between  md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            {navigation.map((e, i) => {
              return (
                <li key={i}>
                  <Link
                    prefetch
                    passHref
                    legacyBehavior
                    href={e.href}
                    className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700"
                    aria-current="page"
                  >
                    {e.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="mt-2 sm:mt-0 flex ">
          <MenuCard navigation={navigation}/>

          {/* = */}
        </div>
      </div>
    </nav>
    </Popover>
  )
}
