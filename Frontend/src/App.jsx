import React from 'react'
import Home from './home/Home'
import Courses from './courses/Courses'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider'
import About from './components/About'

function App() {
  const [authUser, setauthUser] = useAuth();
    console.log(authUser);
  return (
    <>
    {/* <Home />
    <Course /> */}
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={authUser? <Courses/>: <Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
    <Toaster/>
    </div>
    
    </>
  )
}

export default App
