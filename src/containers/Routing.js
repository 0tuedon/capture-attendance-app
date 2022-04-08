import React from 'react'
import { Route, Routes } from 'react-router'
import NavBar from '../components/NavBar'
import Home from '../pages'
import ClockIn from '../pages/Clock'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser'

const Routing = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<NewUser/>} />
        <Route path='/attendance' element={<ClockIn/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default Routing