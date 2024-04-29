import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const[nav,setNav]=useState(false);

  const handlenav =()=>{
    setNav(!nav)
  }

  return (
    <div className='bg-black text-gray-400 h-[80px] max-w-[1200px] mx-auto   flex justify-between items-center disabled:static sticky top-0 z-10  '>
      <h1 className='text-3xl font-bold primary-color ml-5'>Vignesh</h1>
      <ul className='hidden md:flex'>
        <li className="p-5"><a href="#">Home</a></li>
        <li className="p-5"><a href="#about">About</a></li>
        <li className="p-5"><a href="#work">Work</a></li>
        <li className="p-5"><a href="#contact">Contact</a></li>
      </ul>

    <div className="block md:hidden mr-6 cursor-pointer" onClick={handlenav}>
      {nav? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20} /> }
    </div>

    <div className={nav? 'md:hidden fixed h-full left-0 top-0 w-[50%] bg-[#202121] ease-in-out duration-500 ':'fixed left-[-100%]'}>

    <h1 className='text-3xl font-bold primary-color ml-5 mt-4'>Vignesh</h1>
      <ul className='p-8 text-2xl'>
        <li className="p-2"><a href="#">Home</a></li>
        <li className="p-2"><a href="#about">About</a></li>
        <li className="p-2"><a href="#work">Work</a></li>
        <li className="p-2"><a href="#contact">Contact</a></li>
      </ul>
    </div>
    </div>
  )
}

export default Navbar;
