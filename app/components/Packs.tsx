import React from 'react'

const Packs = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-evenly items-center gap-10 px-4 lg:px-0'>
        <div className='w-full' style={{ maxWidth: 450 }}>
          <p className='text-center font-semibold mb-3'>Our Holiday Git Packs</p>
          <img src='/coat1.jpg' className='w-full h-auto' alt='' />
          <p className='text-center mt-3'>The best presents for everyone on your list.</p>
        </div>
        <div className='w-full lg:-ml-96' style={{ maxWidth: 450 }}>
          <p className='text-center mb-3 font-semibold'>Cleaner Fashion</p>
          <img src='/tree2.jpg' className='w-full h-auto' alt='' />
          <p className='text-center mt-3'>See the sustainability efforts behind each of our products.</p>
        </div>
      </div>
      <hr className='border-t border-gray-300 mx-16 mt-16 mb-10' />
    </>
  )
}

export default Packs