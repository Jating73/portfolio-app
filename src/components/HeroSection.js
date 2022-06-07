import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import heroImg from '../assets/hero-image.jpg';

function HeroSection() {

  const element = useRef();
  const typed = useRef();

  useEffect(() => {
    const options = {
      strings: [
        'Enthusiastic Dev 😎',
        'Backend Developer 🧑🏻‍💻',
        'NodeJS Developer 👨‍💻',
        'FullStack Developer 😎',
        'ReactJS Developer 👨‍💻'
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(element.current, options);
    return () => {
      typed.current.destroy();
    }
  });

  return (
    <div className='herosection px-10 py-5' id='home'>
      <div className='herosection-body row justify-content-center'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className='d-flex flex-column justify-content-center text-section'>
            <span className='main-text'>Hello, I'm
              <span className='name-text'> Jatin Gambhir</span>
            </span>
            <span className='skill-text py-2' ref={element}></span>
            <span className='subheading-text'>Knack of Building Applications with Front and Backend Operations</span>
            <div className='d-flex flex-row justify-content-center mt-5'>
              <a className='btn btn-hire' href='#contact'>Hire Me</a>
              <a className='btn btn-resume' target="_blank" href='https://res.cloudinary.com/instac/image/upload/v1654607850/resume/Jatin-Gambhir-Resume_h9jcfw.pdf'>Get Resume</a>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className='d-flex justify-content-center'>
            <img className='img-fluid hero-img' alt='jatin-gambhir' src={heroImg} />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default HeroSection
