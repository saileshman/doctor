import React from 'react'
import {assets} from "../assets/assets_frontend/assets";

const Head = () => {
  return (
    <div className='flex flex-col bg-primary rounded-large px-6'>
      {/* for right side */}
      <div className='flex flex-col items-start justify-center gap-4 py-10 m-auto '>
        <p className='text-3xl text-white font-semibold leading-tight'>Book Appointment <br/>With Trusted Doctor</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img  src={assets.group_profiles} alt=''/>
            <p>Simple browse through our extensive lists of our trusted doctors,<br/>
                schedule your appointment for free.
            </p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <a className="flex items-center gap-3 
            text-gray-600 bg-white px-8 rounded-full text-sm 
            m-auto md:m-0 hover:scale-105 transition-all duration-300"  href='#speciality'>Book appointments <img className='w-3' src={assets.arrow_icon} alt=''/></a>
        </div>
      </div>

      {/* for left sie */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md-absolute bottom-o h-auto rounded-lg' src={assets.header_img} />
      </div>
    </div>
  )
}

export default Head;
