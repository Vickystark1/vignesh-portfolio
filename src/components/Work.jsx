import React from 'react';
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
 

const Work = () => {
  return (
    <div className='max-w-[1200px] pt-24 mx-auto  p-5' id='work'>
      <div className="pb-8  ">
        <p className="text-4xl mb-3 font-bold primary-color ">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

        {/* <div style={{height:"fit-content"}} className="transform transition-transform duration-300 h-[200px] hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md-flex justify-center items-center  bg-cover relative">
            <img src={proj1}  alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider"> </span>
                    <div className="text-center">
                        <a href="https://662b99084a93c80008cf6ad4--vignesh-proj-reactauthenticator.netlify.app/" target='_blank'>
                            <button className="text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg">
                                Live Demo
                            </button>
                        </a>
                    </div>
                
            </div>
        </div> */}

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
            <img src={proj1} layout="fill" objectFit="cover" alt="" />
            <Card  style={{border:"none",backgroundColor:"#0000" }} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>User Authenticator</Card.Title>
           <Card.Text style={{color:"#fff"}}>A user authentication React project integrating Firebase for secure registration and login, with Postman API services enhancing functionality, all styled with CSS and Bootstrap.  </Card.Text>
           <a href="https://662b99084a93c80008cf6ad4--vignesh-proj-reactauthenticator.netlify.app/" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
            <img src={proj2} layout="fill" objectFit="cover" alt="" />
            <Card  style={{border:"none",backgroundColor:"#0000" }} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>Medito</Card.Title>
           <Card.Text style={{color:"#fff"}}>"Medtio" is an online medicine shopping platform built with JavaScript, HTML, and CSS, featuring responsive design and an intuitive add-to-cart functionality. </Card.Text>
           <a href="https://vickystark1.github.io/medito/medito.html" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
            <img src={proj3} layout="fill" objectFit="cover" alt="" />
            <Card  style={{border:"none" ,backgroundColor:"#0000"}} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>Foodito</Card.Title>
           <Card.Text style={{color:"#fff"}}>"Foodito" is a React Redux food order website crafted with React, Redux, Bootstrap, and Material-UI, providing an advanced and seamless food ordering experience. </Card.Text>
           <a href="https://6618f76be25e1400088a8fe9--vignesh-proj-shoppingcart.netlify.app" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
        </div>

        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
            <img src={proj4} layout="fill" objectFit="cover" alt="" />
            <Card  style={{border:"none",backgroundColor:"#0000" }} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>React+Redux Crud Operations</Card.Title>
           <Card.Text style={{color:"#fff"}}>A React-Redux application facilitating CRUD operations for efficient data management and manipulation within a web interface. </Card.Text>
           <a href="https://66167b4638eb141fbbcf6407--vignesh-proj-reactredux-crud.netlify.app/" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
        </div>

          <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
            <img src={proj5} layout="fill" objectFit="cover" alt="" />
            <Card  style={{border:"none",backgroundColor:"#0000" }} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>Goat AirDops</Card.Title>
           <Card.Text style={{color:"#fff"}}>A static webpage built in my earlier stages of JavaScript learning with HTML, CSS, and JavaScript, enhanced with React components and styled with Bootstrap, providing an interactive user interface. </Card.Text>
           <a href="https://662b7594d8a39a0008c2c5be--vignesh-proj-goat-airdops.netlify.app/" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
         </div> 

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md-flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative" style={{height:"fit-content"}}>
         <img src={proj6} layout="fill" objectFit="cover" alt="" height="160px" />

            {/* <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                    <div className="text-center">
                        <a href="https://662a1007eb8bdd0008a4df9c--vignesh-proj-googlecurrencyconverter.netlify.app/" target='_blank'>
                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                Live Demo
                            </button>
                        </a>
                    </div>
                </span>
                
            </div> */}
            <Card  style={{border:"none",backgroundColor:"#0000" }} className='cart_style  mx-2'>

         <Card.Body>
           <Card.Title style={{color:"#fff"}}>Google Currency Converter</Card.Title>
           <Card.Text style={{color:"#fff"}}>Built a Google currency converter app using React, JavaScript, HTML, and CSS for dynamic currency exchange display. </Card.Text>
           <a href="https://662a1007eb8bdd0008a4df9c--vignesh-proj-googlecurrencyconverter.netlify.app/" target='_blank'>

           <Button variant="dark" style={{color:"#fff"}} className='mt-3' >Live Demo</Button>
           </a>
         </Card.Body>
       </Card>
            
        </div> 

        
      </div>
    </div>
  )
}

export default Work;
