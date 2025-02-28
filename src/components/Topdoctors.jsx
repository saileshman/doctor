import React, { useContext } from 'react';
//import {doctors} from "../assets/assets_frontend/assets";
import {useNavigate} from "react-router-dom";
import { AppContext } from '../contex/app.contex';


const Topdctors = () => {

  const navigation = useNavigate();
  const {doctors} = useContext(AppContext)

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className='text-5xl font-medium'>Top Doctors To Books</h1>
      <p>Simple browse through our extensive lists of our trusted doctors</p>
      <div className='w-full  pt-5 gap-y-6 px-3 sm:px-0 grid grid-cols-5 gap-4'>
      {doctors.slice(0,10).map((item,index)=>(
        <div onClick={()=>navigation(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl 
        overflow-hidden cursor-pointer hover:translate-y-[-10px] transtion-all duration-500'>
            <img className='bg-blue-50' src={item.image} alt='' />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
                <p>{item.experience}</p>
                
            </div>
        </div>
      ))}
      </div>
      <button onClick={()=>{navigation("/doctors"); scrollTo(0,0)}} className='bg-green-600 rounded-full'>more</button>
    </div>
  )
}

export default Topdctors;
