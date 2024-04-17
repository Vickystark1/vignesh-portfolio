import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import bootstrap from '../assets/bootstrap.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';

const Skills = () => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-3 gap-8 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto  place-items-center md:flex md-justify-between md:items-center justify-center'>
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={html} alt=""/>
        <p className='mt-2'>HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={css} alt="" width={100} height={100}/>
        <p className='mt-2'>CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={bootstrap} alt="" />
        <p className='mt-2'>BOOTSTRAP</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={js} alt="" />
        <p className='mt-2'>JAVASCRIPT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={react} alt="" width={100} height={100}/>
        <p className='mt-2'>REACT</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] xsm:w-[50px] md:w-[100px]">
        <img src={redux} alt="" width={100} height={100}/>
        <p className='mt-2'>REDUX</p>
      </div>

    </div>
  )
}

export default Skills;
