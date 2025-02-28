import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../contex/app.contex';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () =>{

  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const [docinfo, setdocinfo] = useState(null);
  const daysOfWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // for set time and date
  const [docSlots, setdocSlots] = useState();
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const Fetchdocinfo = async()=>{
    const docinfo = doctors.find(doc=>doc._id === docId);
    setdocinfo(docinfo);
    console.log(docinfo);
  };

  const getAvlSlot = async()=>{
    setdocSlots([]);
    //get current date
     let Today = new Date();

    for(let i = 0 ; i<7; i++){
      let currentDate = new Date(Today);
      currentDate.setDate(Today.getDate() + i);

     // end time of date
       let endTime = new Date();
       endTime.setDate(Today.getDate() + i);
       endTime.setHours(21,0,0,0);

       // setting hours
       if(Today.getDate === currentDate.getDate()){
         currentDate.setHours(currentDate.setHours() >10 ? currentDate.getHours() + 1 : 10);
         currentDate.setMinutes(currentDate.getMinutes() >30 ? 30 : 0)
       }else{
         currentDate.setHours(10);
         currentDate.setMinutes(0);
      }
       let timeSlots = [];
       while(currentDate < endTime){
        let formatedTime = currentDate.toLocaleTimeString([], {hour : "2-digit", minute: "2-digit"});
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formatedTime
        })
    
         currentDate.setMinutes(currentDate.getMinutes() + 30)
     }
     setdocSlots(prev => ([...prev, timeSlots]));
    }
  }

  //
  useEffect(()=>{
    getAvlSlot();
  }, [docinfo])

// useeffect
  useEffect(()=>{
    Fetchdocinfo()
  }, [doctors, docId])
//
useEffect(()=>{
  console.log(docSlots)
}, [docSlots])
 


  return docinfo && (
    <div>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docinfo.image} alt=''/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docinfo.name} <img src={assets.verified_icon} /></p>
          <div>
          <p>{docinfo.degree} - {docinfo.speciality}</p>
          <button>{docinfo.experience}</button>
          </div>
          <div>
            <p>About <img src={assets.info_icon} /></p>
            <p>{docinfo.about}</p>
            <div className='text-gray-500 font-medium mt-4'>
              <p>Appointment Fee: ${docinfo.fees}</p>
            </div>
          </div>
        </div>
      </div>
      {/* booking slot */}
      <div className='sm:ml-72 sm:pl-2 mt-4 font-medium text-gray-700'></div>
      <p>Booking Slots</p>
      <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>{docSlots.length && docSlots.map((item, index)=>(
        <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 roundex-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white': 'border border-gray-200'}`}>
          <p>{item[0] && daysOfWeeks[item[0].datetime.getDay()]}</p>
          <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
      ))}</div>
      {/* for time  */}
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlots.length && docSlots[slotIndex].map((item,index)=>(
          <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 pt-2 rounded-full cursor-pointer ${item.time ===slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`} key={index}>
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>
      <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book Appointment</button>
    {/* listing related doctors */}
    <RelatedDoctors docId={docId} speciality={docinfo.speciality} />
    </div>
  )
};


export default Appointment;
