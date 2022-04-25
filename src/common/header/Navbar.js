import React, { useState } from 'react';
import './navbar.css';
import Mobile from './Mobile'


const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <>
            <div className="header">
                <div className="navbar">

                    <div className="logo">
                        <a href='/'><img src={require("../../assests/navbar/logo.png")} alt="" /></a>
                    </div>

                    <div className="navlinks">
                        <a href="/">Home<img className='home-dimg' src="https://img.icons8.com/office/16/000000/home--v2.gif" alt='' /></a>
                        <a href="/vr">Experience<img className='vr-dimg' src="https://w7.pngwing.com/pngs/158/474/png-transparent-dell-virtual-reality-headset-head-mounted-display-htc-vive-mixed-reality-vr-headset-electronics-visor-game-controllers.png" alt='' /></a>
                        <a href="/product">Products<img className='product-dimg' src="https://img.icons8.com/color/48/000000/add-shopping-cart--v2.gif" alt=''/></a>

                        <a href="/contact">Contact Us<img className='contact-dimg' src="https://img.icons8.com/color/48/000000/name--v2.gif" alt='' /></a>

                    </div>
                    <img className="close-btn" src="https://img.icons8.com/ios-filled/50/000000/menu--v4.png" onClick={() => setisOpen(!isOpen)} alt='' />

                </div>
            </div>

            {isOpen && <Mobile isOpen={isOpen} setisOpen={setisOpen} />}
        </>
    );
};

export default Navbar;
