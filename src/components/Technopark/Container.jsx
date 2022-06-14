import React from 'react';
import Texnopark from './Texnopark/Texnopark'
import Jamoa from './Jamoa/Jamoa';
import Missiya from './Missiyamiz/Missiya'
import Ofis from './Ofis/Ofis';
import Rezident from './Rezidentlar/Rezident'
import Kovorking from './Kovorking/Kovorking'
import Infratuzilma from './Infratuzilma/Infratuzilma';
import Manzil from './Bizning Manzil/Manzil';
import Map from './Map/Map';



const Contain = () => {
  return (
    <>
      <Texnopark />
      <Missiya />
      <Rezident />
      <Ofis />
      <Jamoa />
      <Kovorking/>
      <Infratuzilma />
      <Manzil />
      <Map />

    </>
  );
}

export default Contain;