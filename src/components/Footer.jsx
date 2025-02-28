import React from 'react';
import {assets} from "../assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit ametrepudiandae
                    deserunt sunt officiis iste assumend
                    Quidem, sunt nulla.</p>
            </div>

            {/* midsection */}
            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>091-3457800008</li>
                    <li>hello@gmail.co</li>
                </ul>
            </div>
        </div>
        {/* copy right section */}
        <div>
            <hr/>
            <p className='text-center text-sm py-5'>CopyRight 200@-- All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer;
