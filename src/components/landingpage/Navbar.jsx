
import React from 'react'
import logo from '../../assets/mypngs/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosCloseCircle} from 'react-icons/io'
import { useState } from "react";
import Button from '../btn/Button';
import 'animate.css';


const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    function Toggle(){
        setClicked(!clicked)
    }
  return (
    <nav className='flex justify-between items-center px-[4rem] py-[1rem] fixed w-full sm:px-[1rem] sm:w-[34rem] '>

        <div className='flex items-center gap-[11rem]'>
      <div>
        <img src={logo}alt="" />
      </div>
      <div onClick={Toggle} className=' hidden sm:block sm:ml-9 sm:w-[40rem]'>
         {clicked ? <IoIosCloseCircle className="w-8 h-8 text-black" /> : <GiHamburgerMenu className="w-8 h-8 text-black"/>}
        </div>
        </div>
      <div className={  clicked ? 
          "animate__animated animate__fadeInRight sm:block sm:bg-[#600aff]  sm:text-white sm:absolute sm:top-[5rem] sm:right-1 sm:text-[1.5rem] sm:space-y-7 sm:py-4 sm:h-[20rem] sm:px-[2rem] sm:w-full"   
          : 'flex gap-9 text-[#4300c2]  font-medium sm:hidden'
          }>
        <div className=' mr-[19rem]'>
        <ul className='flex gap-9 sm:flex-col'>
            <li>Home</li>
            <li>Product</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div className='flex gap-[1.25rem] items-center mr-6 '>
      <li className='text-[#4300c2] font-medium list-none sm:text-white'>Log in</li>
      <Button
      text= "Sign Up"
      className='bg-[#2B007A] px-[1rem] py-2 text-white rounded-md sm:text-black sm:py-1 sm:bg-white sm:ml-[10rem]'/>
      </div>
      </div>
      

    </nav>
  )
}

export default Navbar