import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigator = useNavigate();
  return (
    <div className='flex bg-primary rounded-lg px-6 my-20'>
        {/* this is left side */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
            <div className='text-x1 sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white '>
                <p>Book Appointment</p>
                <p>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigator("/login"); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6'>Create Account</button>
        </div>

        {/* this is right side */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt=''/>
        </div>
      
    </div>
  )
}

export default Banner;
