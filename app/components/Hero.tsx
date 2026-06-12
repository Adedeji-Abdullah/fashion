import React from 'react'
import Link from 'next/link'

const hero = () => {
  return (
    <div>
        <header className='flex flex-wrap justify-center gap-3 p-5 text-black text-sm sm:text-base'>
            <span className='font-semibold'>Holiday string</span>
            <span className='font-semibold'>New Arival</span>
            <span className='font-semibold'>Box sellers</span>
            <span className='font-semibold'>Clothing</span>
            <span className='font-semibold'>Tope & snikkers</span>
            <span className='font-semibold'>Pants & skirts</span>
            <span className='font-semibold'>Outman</span>
            <span className='font-semibold'>Blogs & Bogs</span>
            <span className='text-red-600 font-semibold'>sefs</span>
        </header>
        
        <div className='text-white min-h-[82vh] bg-cover bg-center flex items-center' id='bg'>
            <div className='max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:ml-16 lg:mr-auto text-center lg:text-left'>
                <p className='text-4xl sm:text-5xl font-semibold leading-tight mb-4'>Your Cozy Era</p>
                <p className='text-base sm:text-lg mb-1'>Get peak comfy-chic</p>
                <p className='text-base sm:text-lg mb-6'>with new winter essentials.</p>
                <button className='inline-block rounded-none bg-white py-2 px-8 text-black'>SHOP NOW</button>
            </div>
            
        </div>
    </div>
  )
}

export default hero