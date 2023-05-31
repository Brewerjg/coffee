import React from 'react'
import MenuPage from '../components/Menu';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import {motion} from 'framer-motion';


function Menu() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Navbar/>
      <MenuPage/>
      <Footer/>
    </motion.div>
  )
}

export default Menu