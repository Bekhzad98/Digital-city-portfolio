import React, { useEffect, useState } from 'react'

import {Container, Centertop, Centerend, Topimg, Topp, Endh1, Endp  } from './Infrat.Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Infratuzilma/Phone/1.png"

import axios from 'axios'

const APIinfratuzilma = "http://167.99.214.82/get-coworking/"

const Infratuzilma = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(APIinfratuzilma)
    .then(res=>{
     setData(res.data)
     console.log("res",res.data);
    })

  }, []);

  return (
    <Container bg={phone}>
      {
        data?.slice(1,2).map((item,index)=>{
          return(
            <Centertop data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
                   <Topimg src={phone1} alt="" />
                   <Topp>{item.text_uz}</Topp>
               </Centertop>
          )
        })
      }
      <Centerend data-aos="fade-up"
     data-aos-duration="3000">
          <Endh1>
              INFRATUZILMA
          </Endh1>
          <Endp>
            Bino 4 qavatdan iborat. Umumiy quvvati 200 dan ortiq ish o‘rinlari. 86 ta taqdimot xonalari. 24 soatlik xavfsizlik.
          </Endp>
      </Centerend>
    </Container>
  )
}

export default Infratuzilma
