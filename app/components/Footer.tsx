import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 pt-8'>
        <div className='pt-5 pb-4 flex flex-wrap justify-between gap-8 px-4 sm:px-8'>
           <div className='w-full sm:w-auto'>
              <h1 className='font-bold pb-4'>Account</h1>
              <p className='pb-2'>Log In</p>
              <p className='pb-2'>Sign Up</p>
              <p>Redeem a gift card</p>
           </div>

           <div className='w-full sm:w-auto'>
              <h1 className='font-bold pb-4'>Company</h1>
              <p className='pb-2'>About</p>
              <p className='pb-2'>Environment <br />Initiatives</p>
              <p className='pb-2'>Factories</p>
              <p className='pb-2'>DEI</p>
              <p className='pb-2'>Careers</p>
              <p className='pb-2'>International</p>
              <p className=''>Accessibility</p>
           </div>

           <div className='w-full sm:w-auto'>
              <h1 className='font-bold pb-4'>Get Help</h1>
              <p className='pb-2'>Help Center</p>
              <p className='pb-2'>Return Policy</p>
              <p className='pb-2'>Shipping Info</p>
              <p className=''>Bulk Orders</p>
           </div>

           <div className='w-full sm:w-auto'>
              <h1 className='font-bold pb-4'>Connect</h1>
              <p className='pb-2'>Facebook</p>
              <p className='pb-2'>Instagram</p>
              <p className='pb-2'>Twitter</p>
              <p className='pb-2'>Attiliates</p>
              <p className=''>Out Stores</p>
           </div>

           <div className='w-full sm:w-[320px]'>
              <input type="text" placeholder='Email Address' className='w-full py-3 bg-white h-12 px-3' />
           </div>
        </div>
        <div className='py-4 px-4 sm:px-8 text-gray-500 text-sm flex flex-wrap justify-center gap-3 text-center'>
            <p className='min-w-40'>Privacy Policy</p>
            <p className='min-w-40'>Terms of Services</p>
            <p className='min-w-40'>Do Not Sell or Share my personal information</p>
            <p className='min-w-40'>CS Supply Chain transparency</p>
            <p className='min-w-40'>Windor Code of Conduct</p>
            <p className='min-w-40'>Scatyep Pages</p>
            <p className='min-w-40'>Scatyep Products</p>
        </div>
        <div>
            <p className='py-4 px-4 text-center text-gray-500'>© 2023 All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer