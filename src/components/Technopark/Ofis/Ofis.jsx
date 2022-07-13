import React, { useEffect, useState } from 'react'

import { Container, Contcenter, Contdiv1, Contdiv, Contdiv2, Contdiv3, Contdiv4, Contcend, Centerh1, Centerh3, Centerdiv, Centerimg, Contend, Contend1, Enddiv, Endimg, Endp, End, Centerend, Centerimg4, Centerimg5, Centerimg6, Centerleftright, Centerh33, Centerh11, Div, ContcenterApp  } from './Style'

//RASMLAR IMPORT QILINDI
import phone from "../Texnopark/phone/photo1.png"
import phone12 from "../Ofis/Phone/12.png"
import phone5 from "../Ofis/Phone/5.png"
import phone6 from "../Ofis/Phone/6.png"
import Mask from "../Ofis/Phone/Mask group (0).png"


//import axios qilindi
import axios from 'axios'

const APIpercent = "http://167.99.214.82/get-percentage/"
const APIresidents = "http://167.99.214.82/get-residents/"



const Ofis = () => {

  const [data, setData] = useState([]);
  const [resident, setResident] = useState([]);


  useEffect(() => {

    axios.get(APIpercent)
    .then(res=>{
      setData(res.data)
      // console.log(res.data);
    })

    axios.get(APIresidents)
    .then(res=>{
      setResident(res.data)
      // console.log(res.data);
    })

  }, []);


  return (
    <Container bg={phone}>

        <Contcenter>
            <Centerdiv>
                {
                  data?.map((item,index)=>{
                    return(
                 <Contdiv>
                    <Centerh1>{item.percent}%</Centerh1>
                    <Centerh3>{item.name_uz}</Centerh3>
                </Contdiv>
                    )
                  })
                }
           </Centerdiv>
        </Contcenter>

           <ContcenterApp data-aos="zoom-in-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000" >
                <Centerend >
                    {resident?.slice(1,3).map((item,index)=>{
                      return(
                        <Contend1>
                        <Enddiv>
                          <End>
                            <Endimg src={`http://167.99.214.82${item.image}`} alt="" />
                          </End>
                            <Endp>{item.name_uz}</Endp>
                            {/* <Endp>{item.text_uz}</Endp> */}
                        </Enddiv>
                      </Contend1>
                      )
                    })}

                </Centerend>

                <Centerleftright>


                    {
                      resident?.slice(3,6).map((item,index)=>{
                        return(
                          <Contend1>
                            <Enddiv>
                                <End>
                           <Endimg src={`http://167.99.214.82${item.image}`} alt=""/>
                                </End>
                            <Endp>{item.name_uz}</Endp>
                            </Enddiv>
                      </Contend1>
                        )
                      })
                    }

                    {/* <Contend1>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend1>
                    <Contend1>
                        <Enddiv>
                          <End>
                            <Endimg src={Mask} alt="" />
                          </End>
                            <Endp>Rezidentlarning Nizomi</Endp>
                        </Enddiv>
                      </Contend1> */}

                </Centerleftright>
           </ContcenterApp>

    </Container>
  )
}

export default Ofis;
