import React from 'react'
import profpic from '../assets/profpic.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about' >
      <div className='h-100px'></div>

        <div className="md:grid md:grid-cols-2 sm:py-16">
            <div className="mt-4 md:mt-0 text-left flex ">
                <div className="my-auto mx-6 ">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base text-left lg:text-lg">
                    I am a highly motivated and adaptable Frontend Developer with
Practical Experience in HTML, CSS, JavaScript, React JS  and Redux 
through My projects and from my internship company i gave my successful contributions to my internship
company (Senchola Technologies) live Project, I have demonstrated
strong leadership skills in frontend development teams.
                    </p>
                </div>
            </div>
            <img src={profpic} alt="" className="mx-auto rounded-3xl py-8 md:py-0" width={300} height={300}/>
        </div>
    </div>
 
  )
}

export default About;
