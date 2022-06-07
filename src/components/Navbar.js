import React from 'react'

function Navbar({ open_side_nav }) {
    return (
        <nav className={open_side_nav ?
            "navbar-show d-flex flex-new navbar-bg transition-all" :
            "navbar-hidden d-flex flex-new navbar-bg transition-all"}>
            <span className='brand-name'>Jatin Gambhir</span>
            <div className='d-flex flex-new nav-items'>
                <a href='#home'>
                    <span className='mx-4 nav-item'>Home</span>
                </a>
                <a href='#about'>
                    <span className='mx-4 nav-item'>About Me</span>
                </a>
                <a href='#resume'>
                    <span className='mx-4 nav-item'>Resume</span>
                </a>
                {/* <a href='#testimonial'>
                    <span className='mx-4 nav-item'>Testimonial</span>
                </a> */}
                <a href='#contact'>
                    <span className='mx-4 nav-item'>Contact</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
