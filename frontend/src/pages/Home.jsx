import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({user}) => {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='bg-white border-none shadow-2xl rounded-xl min-w-1/3'>
        {user ? (
          <div className='flex justify-center flex-col items-center '>
           <h2 className=' block font-bold text-3xl pt-2 pb-2 '>Welcome, {user.username}</h2>
           <p className='text-gray-700 text-xl pt-2 pb-2'>{user.email}</p>
          </div>
        ) : (
          <div className='flex justify-center flex-col items-center '>
           <h2 className=' block font-bold text-2xl pt-2 pb-2 '>Please log in or register</h2>
           <div className='flex justify-center flex-col items-center w-full p-2'>
            <Link className='flex w-full p-2  border-none rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 justify-center items-center text-white font-bold mb-3' to="/login">Log In</Link>
           
            <Link className='flex w-full p-2  border-none rounded-md bg-gray-200 hover:bg-gray-300 active:bg-gray-400 justify-center items-center text-black font-bold' to="/register">Register</Link>
           </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
