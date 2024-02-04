import React from 'react'
import NavBar from '../ToBeUsed/NavBar';
import HeroSection from '../ToBeUsed/HeroSection';
import Footer from '../ToBeUsed/Footer';
import CountDown from '../ToBeUsed/CountDown';
import VideoCall from '../ToBeUsed/VideoCall';
import Features from './Features';
import Reviews from '../ToBeUsed/Reviews';

const Landing = () => {

  return (
    <div>
      <NavBar />
      <HeroSection />
      <br />
      <br />
      <Features/>
      <br />
      <br />
      <CountDown />
      <br />
      <br />
      <VideoCall />
      <Reviews/>
      <Footer />
    </div>
  )
}

export default Landing