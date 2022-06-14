import React, { useEffect, useState } from 'react'

import { Container, Center, Onediv, Divimg, Divh2, Divp, Twodiv, Div2img, Hh2, Pp, Threediv, Centerleft, Centerend, Endh1, Endp, Centerright, Rightimg   } from './RezidStyle';

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone1 from "../Rezidentlar/Phone/image 1.png"
import phone2 from "../Rezidentlar/Phone/image 2.png"
import phone3 from "../Rezidentlar/Phone/image 3.png"
import phone4 from "../Rezidentlar/Phone/image 4.png"


//import axios qilindi
import axios from 'axios'

const APImissiya = "http://167.99.214.82/get-ouraudience/"

const Rezident = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(APImissiya)
    .then(res=>{
      setData(res.data)
      // console.log(res.data);
    })
  }, []);

  return (
    <Container bg={phone}>

        <Center data-aos="zoom-out-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
       {
         data?.slice(2,5).map((item,index)=>{
           return(
            <Onediv key={index}>
             <div>
                <Divimg src={`http://167.99.214.82${item.image}`} alt="" />
                <Divh2>{item.name_uz}</Divh2>
                <Divp>{item.text_uz}</Divp>
             </div>
            </Onediv>

           )
         })
       }
        </Center>

         <Centerend>
            <Centerleft data-aos="flip-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="3000">
                  <h1>Rezidentlari</h1>
                  <p>IT Parkning rezidentlari IT-kompaniyalar va IT oʻquv markazlar bo'lib, ular bir qator muhim afzalliklarga ega boʻlishlari mumkin. Bularga quyidagilar kiradi:</p>
            </Centerleft>
              <Centerright data-aos="flip-down" data-aos-easing="ease-out-cubic"
             data-aos-duration="3000">
                  <Rightimg src={phone4} alt="" />
              </Centerright>

         </Centerend>

    </Container>
  );
}

export default Rezident;


//  <div>
//   <Divimg src={`http://167.99.214.82${item.image}`} alt="" />
//   if (item.name_uz === 0){
//     <Divh2>Yoq</Divh2>
//   } else {
//     <Divh2>{item.name_uz}</Divh2>
//   }
//   <Divp>{item.text_uz}</Divp>
//  </div>