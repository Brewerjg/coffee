import React from 'react'
import Main from '../views/main';
import Menu from '../views/menu';
import TruckMap from '../views/coffeeTruck';
import About from '../views/about';
import {useLocation, Routes, Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


function AnimatedRoutes () {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route element={<Main/>} path="/" default/>  
            <Route element={<Menu/>} path="/menu" />
            <Route element={<TruckMap/>} path="/location" />
            <Route element={<About/>} path="/about" />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes