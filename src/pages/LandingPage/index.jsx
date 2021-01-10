import React from 'react';

import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Welcome from '../../components/Welcome';
import AboutAcademy from '../../components/AboutAcademy';
import Cta from '../../components/Cta';
import Faculties from '../../components/Faculties';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <AboutAcademy />
      <Cta />
      <Faculties />
    </>
  )
};

export default LandingPage;