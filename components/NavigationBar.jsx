import React, { useState } from 'react';
import { Nav, Navbar, Offcanvas, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaSitemap, FaSearch } from "react-icons/fa";
import './css/navigationBar.css';
import logo from '../public/images/BSPTCL logo&name.jpg';


 //overlay
 

function NavigationBar() {
    //offcanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   



    return (
        <>
            {/* ---------utility link--------------- */}
            <div className='utilityLink'>
                <a href="">Skip to Main Content</a>
                <hr />
                <a href="">Screen Reader</a>
                <a href="">A-</a>
                <a href="">A</a>
                <a href="">A+</a>
                <a href=""><MdSunny /></a>
                <a href=""><FaMoon /></a>
                <a href=""><RiEnglishInput /></a>
                <a href="">हि</a>
                <a href=""><FaSitemap /></a>
            </div>
            {/* -------------------utility link end-------------- */}

            <div className='parent'>
                <div className="logoAndLink">
                    {/* ------------Company Logo ----------------------*/}
                    <div className='companyLogo'>
                        <Image src={logo} alt='BSPTCL' className='logoImage' />
                    </div>

                    {/* -------------------Main Link----------------- */}
                    <div className='mainLinkAndSearchBar'>
                        {/* -----search bar and company link----------  */}
                        <div className="searchBarAndCompanyLink">
                            {/* ----------------Search Bar------------ */}
                            <div className='searchBar'>
                                <span style={{ marginRight: '8px' }}>
                                    <FaSearch />
                                </span>
                                <input type="text" placeholder='Enter Your Text' style={{ border: '0px' }} />
                            </div>
                            <div className="companyLink">
                            </div>
                        </div>

                        {/* ----------------------Main Link---------------------------------- */}
                        <div className="mainLink">
                            <div className="crossEffect"></div>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                        <Nav.Link href="#features" className='navLinkcolor'>About Us</Nav.Link>
                                        <Nav.Link href="#pricing" className='navLinkcolor'>Transmission N/W</Nav.Link>
                                       
     
    

                                        <Nav.Link href="#deets" className='navLinkcolor'>Media</Nav.Link>
                                        <Nav.Link href="#memes" className='navLinkcolor'>Procurement</Nav.Link>
                                        <Nav.Link href="#memes" className='navLinkcolor'>SLDC</Nav.Link>
                                        <Nav.Link href="#" className='navLinkcolor'>STU</Nav.Link>

                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                        <Nav.Link href="#" className='navLinkcolor'>
                                            <RxHamburgerMenu onClick={handleShow} />
                                            <Offcanvas show={show} onHide={handleClose} style={{ background: 'linear-gradient(to right, #243B55, #141E30)', color: 'white' }}>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>UTILITY LINK</Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body style={{ backgroundColor: 'gray' }}>
                                                    <div className="button-container">
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="btn">Button 1</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 2</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 3</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 4</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 5</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 6</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 7</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 8</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 9</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
