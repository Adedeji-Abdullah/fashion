import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <section className='min-h-screen mb-20 px-4 lg:px-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8'>
          <p className='text-white'>Hi</p>
          <p className='py-20 text-center text-2xl font-semibold'>Shop by Category</p>
          <Link href='/cart' className='text-3xl py-1 px-2 border rounded-2xl text-center font-bold hover:font-semibold'>SHOP</Link>
        </div>

        <div id='categoryIMG' className='grid grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 pb-10 justify-items-center'>
          <img src='/person1.jpg' className='w-full  h-auto object-cover' style={{ maxWidth: '270px', height: '350px' }} alt='' />
          <img src='/person2.jpg' className='w-full  h-auto object-cover hidden md:block' style={{ maxWidth: '270px', height: '350px' }} alt='' />
          <img src='/person3.jpg' className='w-full  h-auto object-cover hidden md:block' style={{ maxWidth: '270px', height: '350px' }} alt='' />
          <img src='/person4.jpg' className='w-full  h-auto object-cover' style={{ maxWidth: '270px', height: '350px' }} alt='' />
          <img src='/person5.jpg' className='w-full  h-auto object-cover hidden md:block' style={{ maxWidth: '270px', height: '350px' }} alt='' />
          <img src='/person7.jpg' className='w-full  h-auto object-cover' style={{ maxWidth: '270px', height: '350px' }} alt='' />
        </div>

        <div className='mt-32 mb-20 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div id='img-1' className='relative bg-cover bg-center text-white text-center overflow-hidden flex flex-col justify-end p-6'>
            <div className='font-semibold text-4xl'>New Arrivals</div>
            <button className='mx-auto mt-10 bg-white text-xl font-serif font-semibold py-1 px-6 text-black'>SHOP THE LATEST</button>
          </div>
          <div id='img-2' className='relative bg-cover bg-center text-white text-center overflow-hidden flex flex-col justify-end p-6'>
            <div className='font-semibold text-4xl'>Best-Sellers</div>
            <button className='mx-auto mt-10 bg-white text-xl font-serif font-semibold py-1 px-6 text-black'>SHOP YOUR FAVORITES</button>
          </div>
          <div id='img-3' className='relative bg-cover bg-center text-white text-center overflow-hidden flex flex-col justify-end p-6'>
            <div className='font-semibold text-4xl'>The Holiday Outfit</div>
            <button className='mx-auto mt-10 bg-white text-xl font-serif font-semibold py-1 px-6 text-black'>SHOP OCCASION</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category