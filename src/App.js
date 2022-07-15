import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

function App() {
  
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className="App">
      <Navbar open_side_nav ={openSideNav} />
      <HeroSection />
      <About />
      <Resume />
      {/* <Testimonial /> */}
      <Contact />

      {/* // <nav className="d-flex navbar-bg align-items-baseline justify-content-between py-2" sticky='top'>
        //     <span className='brand-name mr-auto'>Jatin Gambhir</span> */}
            {/* <div className='d-flex nav-items'>
                <a href='#home'>
                    <span className='mx-4 nav-item'>Home</span>
                </a>
                <a href='#about'>
                    <span className='mx-4 nav-item'>About Me</span>
                </a>
                <a href='#resume'>
                    <span className='mx-4 nav-item'>Resume</span>
                </a> */}
    {/* <a href='#testimonial'>
                    <span className='mx-4 nav-item'>Testimonial</span>
                </a> */}
    {/* <a href='#contact'>
                    <span className='mx-4 nav-item'>Contact</span>
                </a>
            </div> */}
        {/* //     <Button variant="secondary" onClick={handleShow} className='rounded-circle' style={{ height: "3rem", width: "3rem" }}>
        //         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        //             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        //         </svg>
        //     </Button>
        // </nav> */}
    </div>
  );
}

export default App;
