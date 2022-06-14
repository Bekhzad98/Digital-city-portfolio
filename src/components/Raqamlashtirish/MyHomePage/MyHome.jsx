import React, { useEffect, useState } from 'react'
import { BlurText, CenterText, ImageDiv, ImageLaptop, MainDiv, NavbarDiv, ParagrafDiv, ParagrafText, PhoneIconn, ReferenceDiv, SpaceCenterDiv, Tel } from './style'

// AOS 
import AOS from "aos";
import "aos/dist/aos.css";

//Import Imge
// import LaptopImg from './../../images/LaptopImg.png'
import axios from 'axios'
const API = 'http://167.99.214.82/get-section/7/'




const MyHome = () => {

  const [data, setData] = useState({})

  // console.log(data);
  useEffect(() => {
    axios.get(API)
    .then(res=>{
      setData(res.data)
  // console.log(res);
  AOS.init();
  AOS.refresh();
    
  })
}, [])

  



  return (
    <MainDiv>
        <NavbarDiv></NavbarDiv>
        <SpaceCenterDiv>
          <BlurText>{data.name_uz}<CenterText>{data.name_uz}</CenterText></BlurText>
            <ReferenceDiv>

                <ParagrafDiv data-aos="fade-down" data-aos-duration="3000" >
                    <ParagrafText>{data.text_uz}</ParagrafText>
                </ParagrafDiv>

                <ImageDiv>
                    <ImageLaptop src={'http://167.99.214.82' + data.image} />
                </ImageDiv>

                <Tel><PhoneIconn />1227</Tel>
            </ReferenceDiv>
        </SpaceCenterDiv>
    </MainDiv>
  )
}

export default MyHome
//Biz raqamli transformatsiyani <br /> sizning qoidalaringizga muvofiq boshqaramiz va biz kompaniya jarayonlarini avtomatlashtiramiz va yagona kalitli raqamli ekotizim dasturlaymiz.