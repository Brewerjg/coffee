import React, {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaInstagram, } from 'react-icons/fa'
import {BsPinMap} from 'react-icons/bs'
import TupeloCreme from '../assets/Tupelocreme.png'
import { Link } from 'react-scroll'

const  Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='z-10 fixed w-full h-[95px] flex justify-between items-center px-4  bg-gradient-to-r from-[#FFFDD0] via-[#FFFDD0] to-black text-white'>

        {/* Logo */}
        <div>
            <a href="/">
            <img className='rounded-full scale-125' src={TupeloCreme} alt="intial" style={{width: '75px'}} />
            </a>
        </div>
        <div className='md:hidden font-["Permanent_Marker"] text-black text-2xl font-bold'>
            Tupelo Coffee
        </div>
            <ul className='hidden md:flex'>
                <li className='font-["Permanent_Marker"] hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/">Home</a>
                </li>
                <li className='font-["Permanent_Marker"] hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/about">About</a>
                </li>
                <li className='font-["Permanent_Marker"] hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/menu">Menu</a>
                </li>
                <li className='font-["Permanent_Marker"] hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <Link to='work' smooth={true} duration={500}>Products</Link>
                </li>
                <li className='font-["Permanent_Marker"] hover:rounded-full hover:border-2 hover:border-[#00a6be]'>
                    <a href="/location">Find Us</a>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen text-black bg-gradient-to-r from-[#FFFDD0] via-[#FFFDD0] to-black flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b5998]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.facebook.com/OnyxCoffeeLab/">Facebook <FaFacebook size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/onyxcoffeelab/">Instagram <FaInstagram size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/location">Location <BsPinMap size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
