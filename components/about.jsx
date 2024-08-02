import React, { useEffect } from 'react';
import './css/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import cmImage from '../public/images/nitishkumar.jpg';
import EnergyMinister from '../public/images/AboutImages/Energy Minister.jpg';
import md from '../public/images/AboutImages/New MD Sir.jpeg.jpg'
import cmd from '../public/images/AboutImages/cmd.jpg';



function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            {/* about section start */}

            <div className="aboutSection">
                <div className="aboutText" data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    <h3 style={{ textAlign: 'center' }}>About Us</h3>
                    <p style={{ textAlign: 'justify' }}>Bihar State Power Transmission Company Limited, a subsidiary company of Bihar State Power (Holding) Company Limited, is a wholly owned corporate entity incorporated under the Companies Act 1956 on 1st Nov, 2012 after restructuring of erstwhile Bihar State Electricity Board.
                        <br />
                        Presently the company is carrying on intra-state transmission and wheeling of electricity under license issued by the Bihar Electricity Regulatory Commission. The company is also discharging the functions of State Load Dispatch Center (SLDC).
                        <br />
                        BSPTCL has also undertaken various projects of augmentation, renovation and modernization of existing Grids and Transmission Lines, to ensure stable and uninterrupted power supply to the people of state, company has taken up projects for connecting its GSS to multiple sources of power and making them N-1 compliant.
                    </p>
                </div>

                <div className="aboutImage" data-aos="flip-left" data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                    {/* Add image or any content here */}
                    {/* CM image */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmImage} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Chief Minister</h5>
                            <p className='text-center'>Nitish Kumar</p>
                        </div>
                    </div>

                    {/* Energy Minister */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={EnergyMinister} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Energy Minister</h5>
                            <p className='text-center'> Sri Bijendra Pd. Yadav</p>
                        </div>
                    </div>

                    {/* MD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={md} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>MD</h5>
                            <p className='text-center'> Kumar</p>
                        </div>
                    </div>

                    {/* CMD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmd} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>CMD</h5>
                            <p className='text-center'> Kumar</p>
                        </div>
                    </div>



                </div>
            </div>

        </>
    );
}

export default About;
