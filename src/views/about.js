import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import {motion} from 'framer-motion';
import About from '../components/about';


function about() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <Navbar/>
      <About/>
      <Footer/>
    </motion.div>
  )
}

export default about
