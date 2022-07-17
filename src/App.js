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
    </div>
  );
}

export default App;
