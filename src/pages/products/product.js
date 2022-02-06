import React from 'react';
import './product.css'
import p1 from './image/p1.jpg'
import p2 from './image/p2.jpg'
import p3 from './image/p3.jpg'
import p4 from './image/p4.jpg'
import p5 from './image/p5.jpg'
import p6 from './image/p6.jpg'

export default function Product() {
    return (
        <>
            <div className="wrapper">
                <h1>Products</h1>
                <div className="cols">

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p1})` }}>
                                <div className="inner">
                                    <p>Oculus Quest 2</p>
                                    <span>$300</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>The Oculus Rift was the first big name in the current wave of VR, and Oculus is still a major player in the category. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p2})` }}>
                                <div className="inner">
                                    <p>Valve Index VR</p>
                                    <span>$999</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Valve's own PC-tethered VR headset, the Valve Index, is one of the priciest. It costs $999 if you buy everything you need for it to work.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p3})` }}>
                                <div className="inner">
                                    <p>HTC Vive Pro 2</p>
                                    <span>$799</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>If you want the highest-resolution VR experience, the HTC Vive Pro 2 is the headset to get. This high-end PC VR headset targets both enthusiasts and professionals, with the sharpest picture available at 2,448 by 2,448 pixels per eye.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p4})` }}>
                                <div className="inner">
                                    <p>HTC Vive Cosmos</p>
                                    <span>$699</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>HTC's Vive Cosmos is the upgraded version of the original Vive, and the company's more affordable VR offering. It features a higher resolution, and replaces the external base stations with outward-facing cameras for motion tracking.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p5})` }}>
                                <div className="inner">
                                    <p>VR Emulator</p>
                                    <span>$2,900.00</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>CPU: i5-6500- Intel USA
                                        Graphic card:GTX1660 – GALAX
                                        Main board: B250M-GIGABYTE Taiwan
                                        Hard disk : SSD 240G -GALAX Hongkong
                                        Memory card : 8GB DDR4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p6})` }}>
                                <div className="inner">
                                    <p>Samsung Gear VR</p>
                                    <span>$100</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>Turn your compatible Samsung Galaxy smartphone into a completely portable and wireless virtual reality machine. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p5})` }}>
                                <div className="inner">
                                    <p>VR Emulator</p>
                                    <span>$2,900.00</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>CPU: i5-6500- Intel USA
                                        Graphic card:GTX1660 – GALAX
                                        Main board: B250M-GIGABYTE Taiwan
                                        Hard disk : SSD 240G -GALAX Hongkong
                                        Memory card : 8GB DDR4</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" >
                        <div className="container">
                            <div className="front" style={{ backgroundImage: `url(${p3})` }}>
                                <div className="inner">
                                    <p>HTC Vive Pro 2</p>
                                    <span>$799</span>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>If you want the highest-resolution VR experience, the HTC Vive Pro 2 is the headset to get. This high-end PC VR headset targets both enthusiasts and professionals, with the sharpest picture available at 2,448 by 2,448 pixels per eye.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
