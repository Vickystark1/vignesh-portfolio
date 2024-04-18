import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import "./Skills.css";


const Skills = () => {
  return (
    <div className='grid grid-cols-2    sm:grid-cols-3 md:grid-cols-4 gap-8 bg-black text-gray-400 md:h-[250px] max-w-[1200px] mx-auto my-auto  place-items-center   md-justify-between items-center justify-center'>
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4  ">
        <img src={html} alt=""  className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]' />
        <p className='mt-2'>HTML</p>
      </div>
      <div className=" flex flex-col items-center m-4  ">
        <img src={css} alt="" className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]' />
        <p className='mt-2'>CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 ">
        <img src={bootstrap} alt="" className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]' />
        <p className='mt-2'>BOOTSTRAP</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 ">
        <img src={js} alt="" className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]'  />
        <p className='mt-2'>JAVASCRIPT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 ">
        <img src={react} alt="" className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]'  />
        <p className='mt-2'>REACT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 ">
        <img src={redux} alt="" className='skillsTitle w-[100px] sm:w-[80px] md:w-[100px]'   />
        <p className='mt-2'>REDUX</p>
      </div>

    </div>
  )
}

export default Skills;
