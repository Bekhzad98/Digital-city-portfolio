import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Companies from '../companies/Companies';
import InfraHead from '../infraHead/InfraHead';
import ITcompanies from '../ITcompanies/ITcompanies';
import Strategy from '../strategy/Strategy';
import { BackgroundImg, Container } from './Infrastructures-style';
import Background from './../../images/background.png';




const Infrastructures = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
  
      <BackgroundImg Background={Background}>
        <InfraHead />
        <Strategy />
        <ITcompanies />
        <Companies />
      </BackgroundImg>

  )
}

export default Infrastructures;