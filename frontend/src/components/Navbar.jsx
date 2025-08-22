import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({user, setUser}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate('/');
  }

  return (
     <nav className='flex justify-between bg-gray-800 p-3'>
      <h2 className='font-bold text-2xl text-white'>Mern Auth</h2>
      <div>
        {user ? (
          <button onClick={handleLogout} className='bg-red-500 px-3 py-1.5 border-none text-white rounded-md hover:bg-red-600 active:bg-red-700'>Logout</button>
        ) : (
          <></>
        )}
      </div>
     </nav>
  )
}

export default Navbar
