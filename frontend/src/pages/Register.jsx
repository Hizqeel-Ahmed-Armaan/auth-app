import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Register = ({setUser}) => {
   const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
   setFormData({...formData, [e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', formData)
      localStorage.setItem('token', response.data.token)
      console.log(response.data)
      setUser(response.data)
      navigate('/')

    } catch (error) {
      console.log(error)
      console.log('Error in handleSubmit function')
    }

  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100' >
      <div className=' bg-white border rounded-xl border-none shadow-2xl min-w-1/3 min-h-1/2'  >
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center items-center text-3xl font-bold my-3'><h2>Register</h2></div>

          <div className='p-2 m-2 '>
              <label className='block text-lg text-gray-600' htmlFor='username'>Username</label>
              <input name='username' value={formData.username} onChange={handleChange} required={true} placeholder='Enter your email' className='outline-none border border-gray-300 w-full rounded-md px-2 py-2 my-2' type="text" id='username'/>

              <label className='block text-lg text-gray-600' htmlFor='email'>Email</label>
              <input name='email' value={formData.email} onChange={handleChange} required={true} placeholder='Enter your email' className='outline-none border border-gray-300 w-full rounded-md px-2 py-2 my-2' type="email" id='email'/>

              <label   className='block text-lg text-gray-600' htmlFor='password'>Password</label>
            <input name='password' value={formData.password} onChange={handleChange} required={true} placeholder='Enter your password' className='outline-none border border-gray-300 w-full rounded-md px-2 py-2 my-2' type="password" id='password'/>
          </div>

    

          <div className='p-2 m-2'>
            <button type='submit' className='w-full border-none rounded-md bg-blue-500 text-white font-bold py-2 hover:bg-blue-600 hover:cursor-pointer active:bg-blue-700'>
              Register
            </button>
            </div>

        </form>
      </div>
    </div>
  )
}



export default Register
