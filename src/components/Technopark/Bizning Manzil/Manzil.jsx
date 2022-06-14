import React, { useEffect, useState } from 'react'

import "swiper/css/bundle";

import {Container, Centertop, Topimg, Topp, Topbutton, Centerend, Endimg3, Endimg4, Endimg5, Endimg6, Endimg7, Centdiv3, Centdiv4, Centdiv5, Centdiv6, Centdiv7 } from './ManzilStyle'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Bizning Manzil/Photo/2.png"

 import Hard from "../Hard/Hard"


import axios from 'axios'

const APImanzil = "http://167.99.214.82/get-section/23/"


const Manzil = () => {

  const [data, setData] = useState({});

  useEffect(() => {

    axios.get(APImanzil)
    .then(res=>{
     setData(res.data)
     console.log(res.data);
   })

  }, []);

  return (
    <Container bg={phone}>
      <Centertop>
        <Topimg  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500" src={`http://167.99.214.82${data.image}`} alt="" />
          <Topbutton  /*data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500"*/>
            <Topp>{data.text_uz}</Topp>
          </Topbutton>
      </Centertop>
      <Centerend data-aos="flip-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
         <Hard />
      </Centerend>
    </Container>
  )
}

export default Manzil
