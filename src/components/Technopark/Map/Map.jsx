import React from 'react';

import {Container, Centerh1, CenterImg,  } from './MapStyle';

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Map/Photo/map.png"


const Map1 = () => {
  return (
    <Container bg={phone}>
         <Centerh1>Bizning Manzil</Centerh1>
        <CenterImg data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.660832206175!2d72.35738321473893!3d40.74748804338187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sen!2sus!4v1654749411541!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </CenterImg>
    </Container>
  );
}

export default Map1;
