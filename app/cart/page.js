"use client"
import React from 'react'
import Cards from '../component/Cards';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Cart = () => {


  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <div className=' flex justify-between p-7 '>
        <h1 className='font-extrabold text-[30px]'>Checkout</h1>
        <Link href={'/checkout'}>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none text-[22px] " >Proceed to pay </button>
        </Link>

      </div>

      <div className='px-5 mb-10 sm:grid md:grid-cols-3 xl:grid-cols-4 
    3xl:flex flex-wrap justify-center '>
        {cartItems?.map((item) => (
          <Cards key={item?.id} data={item?.images} price={item?.price} productName={item?.title} />
        ))}
      </div>
    </>
  )
}

export default Cart