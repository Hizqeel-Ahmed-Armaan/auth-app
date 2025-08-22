import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import axios from 'axios';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const App = () => {
  const [user, setUser] = useState(null); // Change initial state to null

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token && !user) { // Only fetch if user is not set
        try {
          const response = await axios.get("http://localhost:3000/api/users/me", 
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setUser(response.data);
        } catch (error) {
          console.log(error);
          console.log('Error in UseEffect Hook in App.jsx');
          localStorage.removeItem("token");
        }
      }
    };
    fetchUser();
  }, [user]); // Add user as dependency

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register setUser={setUser}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

