import React from 'react'
import {motion} from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import MapOne from '../components/map';


function TruckMap() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
        <Navbar/>
        <MapOne/>
        <Footer/>
    </motion.div>
  )
}

export default TruckMap