"use client"
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0F0F0F] dark:bg-gray-900 w-full sticky z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Home</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href={'/profile'}>
            <button type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
          </Link>

          <Link href={'/cart'}>
            <button type="button" className="text-white font-medium rounded-lg text-sm px-4 py-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </Link>

          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a href="/tops" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 " aria-current="page">Tops</a>
            </li>
            <li>
              <a href="/shirts" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 ">Shirts</a>
            </li>
            <li>
              <a href="/shoes" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 ">Shoes</a>
            </li>
            <li>
              <a href="/bags" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 ">Bags</a>
            </li>
            <li>
              <a href="/watches" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 ">Watches</a>
            </li>
            <li>
              <a href="jwellery" className="block py-2 px-3 text-black bg-white  md:bg-transparent md:text-white md:p-0 ">Jewellery</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar