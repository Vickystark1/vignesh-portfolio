import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skills';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Profile/>
     <Skills/>
     <About/>
     <Work/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App;
