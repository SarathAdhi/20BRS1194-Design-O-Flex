import React from 'react';
import './contact.css'

export default function Contact() {

  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".contact-heading").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <div className='contact'>
      <img className="airplane" id="airplane" src={require("./image/pngegg.png")} alt="" />
      <h1 className="contact-heading" value="5">Contact</h1>
      <div className='contact-container'>
        <div className='name-div'>
          <input className='name-tag' type="text" placeholder='Enter your name' />
        </div>
        <div className='email-div'>
          <input className='email-tag' type="email" placeholder='Enter your email' />
        </div>
        <div className='queries-div'>
          <textarea className='queries-tag' placeholder='Enter your queries'></textarea>
        </div>
        <button className='submit-btn'>Submit</button>
      </div>
    </div>
  );
}
