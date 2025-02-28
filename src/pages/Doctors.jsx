import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../contex/app.contex';

const Doctors = () => {
  const {speciality} = useParams();
  const [filterdoc, setFilterdoc] = useState([]);
  const {doctors} = useContext(AppContext);
  const navigation = useNavigate();

  // apply for filter
  const applyFilter = ()=>{
    if(speciality){
      setFilterdoc(doctors.filter(doc=>doc.speciality === speciality))
    }else{
      setFilterdoc(doctors)
    }
  };

  // useEffect hook
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  return (
    <div>
      <p>Browse Through Doctor Speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === "General Physician" ? navigation("/doctors") : navigation("/doctors/General Physician")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>General Physician</p>
          <p onClick={()=> speciality === "Gynecologist" ? navigation("/doctors") : navigation("/doctors/Gynecologist")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>Gynecologist</p>
          <p onClick={()=> speciality === "Dermatologist" ? navigation("/doctors") : navigation("/doctors/Dermatologist")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>Dermatologist</p>
          <p onClick={()=> speciality === "pediatricians" ? navigation("/doctors") : navigation("/doctors/pediatricians")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>pediatricians</p>
          <p onClick={()=> speciality === "Neurologist" ? navigation("/doctors") : navigation("/doctors/Neurologist")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>Neurologist</p>
          <p onClick={()=> speciality === "Gastroenterologist" ? navigation("/doctors") : navigation("/doctors/Gastroenterologist")} className='sm:w-auto pl-3 py-1.5 pr-16 border border-gray-600 rounded cursor-pointer '>Gastroenterologist</p>
        </div>
        {/* netx div */}
        <div className='grid grid-cols-4 gap-4'>
          {filterdoc.map((items,i)=>(
              <div onClick={()=>navigation(`/appointment/${items._id}`)} className='border border-blue-200 rounded-xl 
              overflow-hidden cursor-pointer hover:translate-y-[-10px] transtion-all duration-500'>
                  <img className='bg-blue-50' src={items.image} alt='' />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                      </div>
                      <p>{items.name}</p>
                      <p>{items.speciality}</p>
                      <p>{items.experience}</p>
                      
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors;
