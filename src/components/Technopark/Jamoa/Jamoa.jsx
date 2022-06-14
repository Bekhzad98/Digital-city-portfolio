import React, { useEffect, useState } from 'react'

import {Container, Div, Divleft, Divright, Divh1, Divp, Divimg, Leftp} from './JamoaStyle'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Jamoa/Phone/1.png"



//import axios qilindi
import axios from 'axios'

const APIjamoa = "http://167.99.214.82/get-team/"


const Jamoa = () => {

  const [data, setJamoa] = useState([]);

  useEffect(() => {

    axios.get(APIjamoa)
    .then(res=>{
      setJamoa(res.data)
      // console.log(res.data);
    })

  }, []);

  return (
    <Container bg={phone}>

      <Divleft data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Divh1>JAMOA</Divh1>
        <Divp>Bizning asosiy qadriyatimiz</Divp>
      </Divleft>

       <Divright>
             {
               data?.map((item,index)=>{
                 return(
                    <Div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                        <Leftp>{item.text_uz}</Leftp>
                        <Divimg src={`http://167.99.214.82${item.image}`} alt=""/>
                    </Div>
                 )
               })
             }
       </Divright>
    </Container>
  )
}

export default Jamoa

{/* {
   data?.map((item,index)=>{
     return(
       <Leftp>{item.text_uz}</Leftp>
       // <Divimg src={phone2} alt="" />
     )
   })
 } */}