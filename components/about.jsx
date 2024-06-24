import React from 'react';
import './css/about.css';
import cmImage from '../public/images/nitishkumar.jpg';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'white', width: '20%', border: '0px' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function About() {
    return (
        <>
            {/* about section start */}
            <div className="aboutContainer">
                <div className="aboutSection">
                    <div className="aboutText">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed veniam aliquid perferendis cupiditate officia hic et molestias, non minima blanditiis explicabo eaque rerum, qui beatae exercitationem architecto cumque fugiat.</p>
                    </div>

                    <div className="aboutImage">
                        {/* Add image or any content here */}
                        {/* CM image */}
                        <div className="cmCard">
                            <div className='imageContainer'>
                                <img src={cmImage} alt="CM Image" className="cmImage" />
                            </div>
                            <div className='cardText'>
                                <h5 className='text-center'>Chief Minister</h5>
                                <p className='text-center'>Nitish Kumar</p>
                            </div>
                        </div>
                        <div className="cmCard">
                            <div className='imageContainer'>
                                <img src={cmImage} alt="CM Image" className="cmImage" />
                            </div>
                            <div className='cardText'>
                                <h5 className='text-center'>Chief Minister</h5>
                                <p className='text-center'>Nitish Kumar</p>
                            </div>
                        </div>

                        <div className="cmCard">
                            <div className='imageContainer'>
                                <img src={cmImage} alt="CM Image" className="cmImage" />
                            </div>
                            <div className='cardText'>
                                <h5 className='text-center'>Chief Minister</h5>
                                <p className='text-center'>Nitish Kumar</p>
                            </div>
                        </div>

                        <div className="cmCard">
                            <div className='imageContainer'>
                                <img src={cmImage} alt="CM Image" className="cmImage" />
                            </div>
                            <div className='cardText'>
                                <h5 className='text-center'>Chief Minister</h5>
                                <p className='text-center'>Nitish Kumar</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
