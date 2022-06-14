import React, { useEffect, useState } from 'react'

import { Container, ContainCent, Centerleft, Centerh1, Centerp, Centeright, Righth1, Center, Twodiv, Twodiv2, Div2img, Hh2, Pp, Div  } from './Style.Missiya'

//RASMLAR IMPORT BOLYAPTI
import phone from "../Texnopark/phone/photo1.png"
import phone2 from "../Missiyamiz/Phone/image 177.png"
import phone3 from "../Missiyamiz/Phone/image 178.png"

//import axios qilindi
import axios from 'axios'

const APImissiya = "http://167.99.214.82/get-ouraudience/"



const Missiya = () => {

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

      <Div data-aos="fade-up"
     data-aos-duration="4000">
        <ContainCent >
            <Centerleft>
              <Centerh1> BIZNING MISSIYAMIZ </Centerh1>
              <Centerp> Digital city - missiyasi innovatsion loyihalarni ishlab chiqaruvchi yetakchi markazlardan biriga <br/> aylanish, ilg‘or IT kompaniyalarni ishga tushirish va butun dunyodan yosh va iqtidorli <br/> IT mutaxassislarning ahamiyatli massasini jalb qilish o‘chog‘iga aylanishdir. </Centerp>
            </Centerleft>
        </ContainCent>

        <Centeright>
          <Righth1>Bizning Auditoriyamiz</Righth1>
        </Centeright>
     </Div>

        <Center>

          {
              data?.slice(0,2).map((item,index)=>{
                return(
                   <Twodiv key={index} data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine">
                         <Div2img src={`http://167.99.214.82${item.image}`} alt="" />
                         <Hh2>{item.name_uz}</Hh2>
                         <Pp>{item.text_uz}</Pp>
                    </Twodiv>
                )
              })
          }

        </Center>
    </Container>
  )
}

export default Missiya
