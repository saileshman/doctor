import React, { useState } from 'react'

const Login = () => {
  const [state, setSatate] = useState("Sign up");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = (event)=>{
    event.preventDefault();
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3  m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === "Sign up" ? "Create Account" : "Login"}</p>
        <p >Please {state === "Sign up" ? "Sign up" : "Login"} to book an appointment</p>
        <div className='w-full'>
          {state === "Sign up" && <div>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>}
         
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </div>
        <button className='bg-primary w-full text-white py-2 rounded'>{state === "Sign up" ? "Create Account" : "Login"}</button>
        {state=== "Sign up" ?
        <p>Already have an Account? <spam onClick={()=>setSatate('Login')} className="text-primary underline cursor-pointer">Login here</spam> </p>:
        <p>Create a new Account? <spam onClick={()=>setSatate("Sign up")} className="text-primary underline cursor-pointer">Click here</spam></p>
        }
      </div>

    </form>
  )
}

export default Login;
