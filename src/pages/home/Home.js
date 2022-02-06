import React from 'react';
import './home.css';

export default function Home() {

    var counters = 10;
    counters += 1

    document.addEventListener("mousemove", parallax);
    function parallax(event) {
        this.querySelectorAll(".mouse").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
    var x = 0;
    let oldValue = 0
    let newValue = 0

    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;

        console.log(newValue)
        if (newValue === 0) {
            console.log("newValue")
            document.getElementById('img1').id = "img1";
            x = newValue;
        }

        if (oldValue < newValue) {                  //scroll down
            document.getElementById('img1').style.marginLeft = newValue + 'px';
        }
        else if (oldValue > newValue) {           //scroll up
            document.getElementById('img1').style.marginLeft = newValue + 'px';
        }
        oldValue = newValue;
    });

    return (
        <>
            <h3 className='counters'>Visiters: {counters}</h3>
            <section className="Home">
                <a href="#bottom"><img className="scroll-img" src="https://img.icons8.com/color/48/000000/double-down--v2.gif" /></a>
                <div className="container-one">
                    <h1 className="main-heading">ENTER YOUR OWN</h1>
                    <div className="vr1-h1">
                        <h1 className="alpha1" >V</h1>
                        <h1 className="alpha1">I</h1>
                        <h1 className="alpha1" >R</h1>
                        <h1 className="alpha1">T</h1>
                        <h1 className="alpha1" >U</h1>
                        <h1 className="alpha1">A</h1>
                        <h1 className="alpha1" >L</h1>
                    </div>
                    <div className="vr1-h1">
                        <h1 className="alpha1">R</h1>
                        <h1 className="alpha1" >E</h1>
                        <h1 className="alpha1">A</h1>
                        <h1 className="alpha1" >L</h1>
                        <h1 className="alpha1">I</h1>
                        <h1 className="alpha1" >T</h1>
                        <h1 className="alpha1">Y</h1>
                    </div>
                </div>
                <div className="mouse_move">
                    <img id="img1" src={require("../../assests/home/pngwing.com.png")} className="mouse" value="5" />
                    <img id="stars1" src={require("../../assests/home/stars.png")} className="mouse" value="5" />
                    <img id="stars2" src={require("../../assests/home/stars.png")} className="mouse" value="10" />
                    <img id="stars3" src={require("../../assests/home/stars.png")} className="mouse" value="8" />
                </div>
            </section>

            <section className="home-2" id="home-2">
                <div className="home-2-container">
                    <h2>Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet. VR allows us to immerse ourselves in video games as if we were one of the characters, learn how to perform heart surgery or improve the quality of sports training to maximise performance. </h2>
                </div>

                <div className="shop-container">
                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2017/07/31/11/34/people-2557494__480.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Get your self into Virtual Reality</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2016/11/21/13/51/woman-1845517__340.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Feel the Experience</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2019/09/19/22/59/virtual-reality-4490469__340.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Learn Virtual Reality</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2022/01/10/22/14/woman-6929333__340.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Interact with people</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2019/12/10/05/56/cyber-glasses-4685055__480.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Build your own Reality</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2016/12/10/23/52/virtual-reality-1898441__480.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Find your path</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2015/12/22/13/27/laptop-1104066__480.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>The future is here</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img">
                            <img src="https://cdn.pixabay.com/photo/2021/12/04/19/01/virtual-reality-6845814__480.jpg" alt="" />
                        </div>
                        <div className="description">
                            <p>Connect</p>
                        </div>
                    </div>
                </div>
            </section>


            <div id="bottom"></div>

        </>


    );
}

