import React, { useState } from 'react'

const Contact = () => {

    const [name,setName]=useState("");
    const [mail,setMail]=useState("");
    const [message,setMessage]=useState("");

    const handleSubmit=()=>{
        setTimeout(()=>{
            setName("");
             setMail("");
             setMessage("")
    },2000) 
        
    }

  return (
    <div className='max-w-[1200px] pt-[21px]  mx-auto  sm:py-20 p-5 ' id='contact'  >
        
            <h2 className="text-4xl font-bold leading-tight primary-color mt-4" >Contact Me</h2>
        
        <div className="max-w-[800px] mx-auto">
            <div className="mt-6 bg-[#161616] rounded-xl">
                <div className="p-10">
                <form action="https://getform.io/f/zaxdwena" method='POST'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                            <div className="mt-2.5 relative">
                                <input type="text" name='name' id='' value={name} onChange={e=>setName(e.target.value)} placeholder='your Name...' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none hover:border-pink-600' required />
                            </div>
                        </div>

                        <div>
                            <div className="mt-2.5 ">
                                <input type="email" name='email' id='' value={mail} onChange={e=>setMail(e.target.value)} placeholder='Your Email...' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none hover:border-pink-600' required />
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <div className="mt-2.5 ">
                                <textarea  name='message' id='' value={message} onChange={e=>setMessage(e.target.value)} placeholder='Your Message...' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none hover:border-pink-600' rows='4' ></textarea>
                            </div>
                        </div>

                        
                            <div className="sm:col-span-2 cursor-pointer">
                                <button type="submit" onClick={handleSubmit} name='' id='' className=' text-xl font-semibold bg-primary-color w-full p-4 mt-2 text-white border border-none rounded-md  focus:bg-pink-600 cursor-pointer'>Send</button>
                            </div>
                        
                    </div>
                </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;
