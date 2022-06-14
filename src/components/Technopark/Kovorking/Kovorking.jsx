import React, { useEffect, useState } from 'react'

import {Container, Righttop, Rightend, Topdiv,Topimg, Toph1, Topp, Topleftdiv, Divbutton, Enddiv, Hh1, Pp, Enddiv2, P2p,Endimg, Div } from './Kovork.Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Kovorking/Phone/2.png"
import phone3 from "../Kovorking/Phone/3.png"


import axios from 'axios'

const APIkibersport = "http://167.99.214.82/get-section/22/"

const APIkovorking =  "http://167.99.214.82/get-coworking/"

const APIkovorking2 =  "http://167.99.214.82/get-coworking/"


const Kovorking = () => {

  const [shox, setShox] = useState({});

  const [kovor, setKovor] = useState([]);
  const [loading, setloading] =useState(false)

  const [data, setData] = useState([]);


  useEffect(() => {

    axios.get(APIkibersport)
     .then(res=>{
      setShox(res.data)
      // console.log(res.data);
    })

    try{
      axios.get(APIkovorking)
      .then((res)=>{
      setKovor(res.data)
      setloading(true)
      // console.log("res",res.data);
      })
    }
    catch (error){
      console.log(error);
    }

    axios.get(APIkovorking2)
    .then(res=>{
     setData(res.data)
    //  console.log("res",res.data);
   })

  }, []);


  return (
    <Container bg={phone}>

     <Righttop data-aos="fade-up"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <Topimg src={`http://167.99.214.82${shox.image}`} alt="" />

           <Topleftdiv>
              <Toph1>{shox.name_uz}</Toph1>
               <Topp>{shox.text_uz}</Topp>

           <span><Divbutton>Batafsil</Divbutton></span>

           </Topleftdiv>


     </Righttop>

     <Rightend data-aos="fade-down"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

        {
          kovor?.slice(2).map((item,index)=>{
            return(
              <Enddiv>
                <Hh1>KOVORKING </Hh1>
                <Pp>{item.text_uz}</Pp>
              </Enddiv>
              )
            })
          }

         {
          data?.slice(0,1).map((item,index)=>{
            return(
            <Enddiv2>
                  <P2p>{item.text_uz}</P2p>
                  <Div>
                    <Endimg src={phone3} alt="" />
                  </Div>
            </Enddiv2>
            )
          })

         }


     </Rightend>


    </Container>
  )
}

export default Kovorking