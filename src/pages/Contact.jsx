import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500' >
        <p>CONTACT <spam className="text-gray-700 font-semibold" >US</spam></p>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className=' w-full md:max-w-[360px]' src={assets.contact_image} alt=''/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600' >OUR OFFICE</p>
            <p className='text-gray-500'>30021 charli street,<br/> sute 200, wasington,usa</p>
            <p className='text-gray-500'>tel: (001) 5672819 <br/> Email: hello@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at Website</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit ame</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
