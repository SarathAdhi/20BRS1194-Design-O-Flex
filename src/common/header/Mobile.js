import React from 'react'
import './mobile.css'



function Mobile({ isOpen, setisOpen }) {
    return (
        <div className='mobile-navbar'>
            <div className='mobile-navbar-menu'>

                <img className='close-icon' onClick={() => setisOpen(!isOpen)} src="https://img.icons8.com/material-rounded/24/000000/cancel--v2.gif" alt='' />

                <a href='/' id='navbar-home' onClick={() => setisOpen(!isOpen)}>Home</a>
                <a href='/vr' id='navbar-language' onClick={() => setisOpen(!isOpen)}>Experience</a>
                <a href='/product' id='navbar-contest' onClick={() => setisOpen(!isOpen)}>Product</a>
                <a href='/contact' id='navbar-about' onClick={() => setisOpen(!isOpen)}>Contact Us</a>

            </div>
        </div>
    )
}

export default Mobile
