import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
import Test from '../components/test';
import About from '../components/about';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="wraper">
        <div data-aos="zoom-out-down" className="navigationBar">
          <NavigationBar />
        </div>
        <div className="slider">
          <Slider />
        </div>
        <div className="about">
          <About />
        </div>
        {/* <div>
          <Test />
        </div> */}
      </div>

    </>


  );
}

export default App;
