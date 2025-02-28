import React, { useState } from 'react';
import { assets } from "../assets/assets_frontend/assets"

const Myprofile = () => {
  const [userdata, setUserdata] = useState({
    name: "Edward Vincent",
    img: assets.profile_pic,
    email: "hello@gamil.com",
    phone: "+091 00918186",
    address: {
      line1: "41 street ktm",
      line2: "pokhara"
    },
    gender: "male",
    dob: "2000-10-30"
  })
  const [isedite, setIsedite] = useState(false)
  return (
    <div>
      <img src={userdata.img} value={userdata.name} onChange={e => setUserdata(prev => ({ ...prev, name: e.target.value }))} alt='' />
      {
        isedite ?
          <input type='text' /> :
          <p>{userdata.name}</p>
      }
      <hr />
      <p>CONTACT INFORMATION</p>
      <div>
        <p>Email id:</p>
        <p>{userdata.email}</p>
        <p>Phone:</p>
        {isedite ? <input value={userdata.phone} onChange={e => setUserdata(prev => ({ ...prev, phone: e.target.value }))} type="text" />
          : <p>{userdata.phone}</p>
        }
        <p>Address:</p>
        {isedite ? <p>
          <input value={userdata.address} onChange={e => setUserdata(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} type="text" />
          <br />
          <input value={userdata.address} onChange={e => setUserdata(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} type="text" />
        </p>
          : <p>
            {userdata?.address?.line1}
            <br />
            {userdata?.address?.line2}
          </p>
        }

      </div>
      <div>
        <p>Information</p>
        <div>
          <p>Gender:</p>
          {isedite ? <select onChange={(e) => setUserdata(prev => ({ ...prev, gender: e.target.value }))} value={userdata.gender}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
            :
            <p>{userdata.gender}</p>}
            <p>Birthday:</p>
            {isedite ? <input onChange={(e) => setUserdata(prev => ({ ...prev, dob : e.target.value }))} value={userdata.dob} />:
            <p>{userdata.dob}</p>
            }
            <div>
              {isedite ? <button onClick={()=>setIsedite(false)}>save</button> : <button onClick={()=>setIsedite(true)}>edit </button>}
            </div>
        </div>
      </div>
    </div>

  )
}

export default Myprofile;
