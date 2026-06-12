import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <div className='mb-12'>
            <p className='text-3xl text-center mt-32 mb-0 font-semibold'>Stores</p>
            <p className='text-center pt-4 pb-16'>Find one of our stores nearest to you</p>
           <div id='storeBG' className='mx-au'>
            <div><Image src='/house6.jpg' className='' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>University Village</p></div>
            
            <div><Image src='/house2.jpg' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>Valencia Street, San francisco</p></div>
            <div><Image src='/house3.jpg' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>Stanford</p></div>
            <div><Image src='/house4.jpg' className='' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>Abbot Kinney</p></div>
            <div><Image src='/house5.jpg' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>Seaport</p></div>
            <div><Image src='/house1.jpg' width={520} height={32} alt='' /><span className='text-xs'>Scattle</span><p className='font-semibold'>Prince Street, New york</p></div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default page