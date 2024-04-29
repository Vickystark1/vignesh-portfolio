import React from 'react'
import profilepic from '../assets/profilepic.jpg'
import { TypeAnimation } from 'react-type-animation'
import resume from '../assets/Vignesh.G Resume.pdf'

const Profile = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black  justify-center align-middle '>
      <div className="mx-auto flex">
        <img className='col-span-1 my-auto  w-[300px] h-auto md:w-[310px] sm:w-[250px] lg:w-[380px] mx-auto ml-2 ' src={profilepic} alt="profilepic" style={{borderRadius:"50px 50px"}} />
      </div>
      <div className='col-span-2 px-12 my-auto '>
        <h1 className='text-white  text-4xl sm:text-4xl lg:text-7xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span> <br/>
          <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "Web Developer",
            2000,
            "React Developer",
            2000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
          />
        </h1>
        <p className='text-white sm:text-lg my-6 lg:text-xl'>
          My name is Vignesh and I have almost one year of on-Hand experience in web Development.
        </p>
        <div className='my-8 sm:display-flex '>
          <a href={resume} download="vignesh-Resume" className='px-6 py-3 min-[320px]:w-10px sm:px-4 rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white '>
            Download CV
          </a>
          <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile;
