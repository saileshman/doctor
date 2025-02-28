import React, { useState } from 'react';
import {assets} from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();
    const [dropdown, showDropdown] = useState(false)
    const [toke, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44' src={assets.logo} alt='' />
      <ul className=' md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li >Home</li>
            < hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li >All Doctors</li>
            < hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li>About</li>
            < hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li>Contact</li>
            < hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div>
        {toke ? <div className='flex item-center gap-2 cursor-pointer group relative'>
            <img className="rounded-full w-8"  src={assets.profile_pic} alt=''/>
            <img className='w-2.5' src={assets.dropdown_icon} alt=''/>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded gap-4 p-4'>
                    <p onClick={()=>navigation("/my-profile")} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigation("/my-appointment")} className='hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
        </div> 
        :  <button onClick={()=>navigation("/Login")} className='bg-primary rounded-full px-8 py-3'>Create account</button>
        }
        {/* <img onClick={()=>showDropdown(true)} className='w-6 md:hidden' src={assets.menu_icon} alt=''/> */}
        {/* mobile menu */}
        {/* <div className={`${showDropdown? "fixed w-full" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all  `}>
          <div>
            <img src={assets.logo} alt="" />
            <img onClick={()=>showDropdown(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul>
            <NavLink>Home</NavLink>
            <NavLink>All Doctors</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </ul>
        </div>
       
      </div> */}
      </div>
    </div>
  )
}

export default Navbar;
