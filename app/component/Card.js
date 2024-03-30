"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { usePathname } from 'next/navigation';

const Card = (props) => {
  const { data, productName = "Mobile", price = '23',handleAddToCart=()=>{} } = props
const path= usePathname();

  return (


    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 mb-4  ">
      <Carousel interval="5000" showThumbs={false} showStatus={false}>
        {data?.map((item, index) =>
          <div key={index}>
            <img src={item} className='h-[50vh]  md:w-[25vw] object-contain ' />

          </div>
        )}

      </Carousel>
      <h2 className='text-black font-medium py-2 px-2'>{productName}</h2>
      <h2 className='text-black font-medium px-2'>${price}</h2>
   
      <button type="button" onClick={handleAddToCart} className="text-black  border w-full border-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 ">Add to Cart</button>

    </div>

  )
}

export default Card