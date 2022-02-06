import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './vr.css';
import Home from '../home/Home';

export default function VR() {

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    alert("Oops Your can't experience the VR in mobile");
    return (<Redirect to={Home} />);

  } else {
    console.log("Web user")
  }

  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".mouse").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  return (
    <>

      <section className="vr">
        <div className="vr-container">
          <h1>EXPERIENCE VIRTUAL REALITY<br />BELOW</h1>
        </div>
        <div className='virtual-reality'>
          <img className='mouse' value='2' id="vr-bg" src={require("./image/backg.jpg")} alt="" />
          <img className='mouse' value='15' id="vr-glass" src={require("./image/vr2-edited.png")} alt="" />
          <img className='mouse' value='5' id="hand-gun" src={require("./image/hand-gun.png")} alt="" />

        </div>
      </section>

    </>


  );
}

