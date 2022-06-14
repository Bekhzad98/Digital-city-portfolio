import React,{useEffect, useState} from 'react';

import { Container, Centerleft, Div, Div2, Div3, Div4,  Centerright, Centphone, Numberh1, Center, Texnoparkdiv, Texdiv, H3, H1, Hp, MenuIcon, MenuIcon2, MenuIcon3, MenuIcon4} from './TexnopStyle';
import phone from "../Texnopark/phone/photo2.png"
import axios from 'axios';
// import WidgetsIcon from '@mui/icons-material/Widgets';

const API = "http://167.99.214.82/get-technopark/"

const Texnopark = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const Getting = async () => {
      const res = await axios.get(API);
      if(res){
        setData(res.data)
        // console.log("dsads",res.data);
      }
    }
    Getting()

  }, []);
  return (
      <Container bg={phone}>

          <Centerleft>
            {/* {
              data?.map((item,index)=>(
                <Div key={index}>
                  <img src={`http://167.99.214.82${item.icon}`} alt="" />
                </Div>
              ))
            } */}
            <Div>
              <MenuIcon />
            </Div>
            <Div>
              <MenuIcon2 />
            </Div>
            <Div>
              <MenuIcon3 />
            </Div>
            <Div>
              <MenuIcon4 />
            </Div>
          </Centerleft>

            <Center data-aos="zoom-in"
            data-aos-duration="3000">
              <Texnoparkdiv>
                TEXNOPARK
              </Texnoparkdiv >
                <Texdiv>
                  <H3>TEXNOPARK</H3>
                  <H1>Digital city</H1>
                  <Hp>innovatsiyalarga bir qadam yaqinlashing</Hp>
                </Texdiv>
            </Center>

            <Centerright>
                <Centphone>
                  <MenuIcon4 />
                </Centphone>
                <Numberh1>
                  1227
                </Numberh1>
            </Centerright>

      </Container>

  );
}

export default Texnopark;
