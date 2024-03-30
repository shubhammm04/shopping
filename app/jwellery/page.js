import React from 'react'
import Card from '../component/Card'

const Jwellery = async() => {
  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    return res.json()
  }
  const data = await getProducts()
  return (
    <div className='p-8  '>
      <h1 className='pb-2' >Jwellery</h1>

      <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 
    3xl:flex flex-wrap justify-center '>
        {data?.products?.map((item) => (
          <Card key={item?.id} data={item?.images} price={item?.price} productName={item?.title} />
        ))}
      </div>


    </div>
  )
}

export default Jwellery