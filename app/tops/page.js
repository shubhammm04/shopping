"use client"
import React from 'react'
import Card from '../component/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import toast from 'react-hot-toast';



const Tops = async () => {
  const dispatch=useDispatch()

  const getProducts = async () => {
    const res = await fetch('https://dummyjson.com/products')
    return res.json()
  }
  const data = await getProducts()

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
    toast.success('Successfully added')
  };

  return (
    <div className='p-8  '>
      <h1 className='pb-2' >Tops</h1>

      <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-4 
    3xl:flex flex-wrap justify-center '>
        {data?.products?.map((item) => (
          <Card handleAddToCart={()=>handleAddToCart(item)} key={item?.id} data={item?.images} price={item?.price} productName={item?.title} />
        ))}
      </div>


    </div>
  )
}

export default Tops