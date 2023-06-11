import Link from 'next/link'
import MenuCard from './menuCard'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Explore', href: '/products', current: false },
  { name: 'Ceate', href: '/studio', current: false },
  { name: 'Contact', href: '#', current: false },
]


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
     
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <Link  href="/" className="flex items-center">
          
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Termcode
          </span>
        </Link>
        <div className="mt-2 sm:mt-0 sm:flex md:order-2">
          
          <MenuCard/>
          
          
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            =
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
            {navigation.map((e,i) => {
              return (
                <li key={i}>
                  <Link
                    shallow
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
      </div>
    </nav>
  )
}
