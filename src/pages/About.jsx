import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center pt-10 text-2xl text-gray-600'>
        <p>ABOUT <spam className='text-gray-700 font-medium'>US</spam></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to our website. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Qui, cumque corrupti cupiditate rem quae ipsum inventore id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere, praesentium necessitatibus in sequi repudiandae? Accusamus repellat quae aperiam temporibus
             ad, cumque consequuntur saepe veniam porro ipsam numquam perferendis quisquam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem quo dolorem iusto commodi corporis recusandae mollitia excepturi eius, aut, consectetur nostrum, et totam. 
            Beatae nisi magni suscipit aliquam necessitatibus!</p>
            <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id non aut optio eaque unde corporis perferendis delectus, illo recusandae magnam blanditiis facilis voluptatibus doloribus expedita omnis? Nam, dolor inventore.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <spam className="text-gray-700 font-semibold">CHOOSE US</spam></p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600' >
           <b>Efficiency.</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
          </div>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600'>
            <b>Convenience</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>
          <div  className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600'>
            <b>Personalization</b>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>
        </div>
    </div>
  )
}

export default About
