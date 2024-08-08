import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
import Test from '../components/Test';
import About from '../components/about';
import Map from '../components/DisplayMap'
import VMV from '../components/VMVsection'
import Footer from '../components/Footer';
import StickyMenu from '../components/StickyMenu';
import AwardsSection from '../components/AwardsSection';
import Home from './Pages/Home';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Home/>

    </>


  );
}

export default App;
