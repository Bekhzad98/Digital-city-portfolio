import React, { useEffect, useState } from 'react'

import Dollor from './images/dollor.png'
import Heart from './images/heart.png'
import Flover from './/images/Flover.png'
import Come from './images/commers.png'
import Books from './images/book.png'
import Home from './images/home.png'
import Image1 from './images/image1.png'
import Image2 from './images/image2.png'
import Image3 from './images/image3.png'
import Image4 from './images/image4.png'
import Sxema from './images/sxema.png'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';

import { DCimg,Smalicontic,Iconstext,Text1, Startaplar, DCimg2,
   Loyiha, Startword, Roketimg, Startword1,  Dollorimg, HEART,
    Floverimg, Comeimg, Bookimg, Homeimg, Word1, Word2,Word3,
     Word4, Word5, Word6, Inkub, Rasm1, Rasm2, Rasm3, Rasm4,
      Rasm1photo,Nexticontic, Inkubatsiya, Rasm2photo, Rasm3photo,
       Rasm4photo, Sxemaa, DivCenter, Divend, Container, Icontic, Icons } from './style.jsx'

 
import axios from 'axios'


const APIyonalishlar = "http://167.99.214.82/get-section/18/"

const Navbar = () => {

const [data, setData] = useState({})
 
 useEffect(()=>{
   axios.get(APIyonalishlar)
   .then(res=>{
     setData(res.data)
     console.log(res.data);
   })
 },[]);

  return (
  <Container>
      <DCimg>
        <DivCenter>
           <Divend>
             <DashboardCustomizeOutlinedIcon  sx={{}}/>
            </Divend>
           <Divend>
             <CleanHandsOutlinedIcon sx={{}}/>
            </Divend>
           <Divend>
             <RocketLaunchOutlinedIcon sx={{}}/>
            </Divend>
           <Divend>
             <CallOutlinedIcon sx={{}}/>
            </Divend>
        </DivCenter>

        <Startaplar>{data.name_uz}</Startaplar>
        <Loyiha>{data.text_uz}</Loyiha>
        <Startword>Sizda goya bormi?</Startword>
        <Roketimg src={`http://167.99.214.82${data.image}`} />
        <Startword1>Yo’nalishlar</Startword1>


        <div>
          <Dollorimg src={Dollor} />
          <HEART src={Heart} />
          <Floverimg src={Flover} />
          <Comeimg src={Come} />
          <Bookimg src={Books} />
          <Homeimg src={Home} />
          <Word1>Fin Tech</Word1>
          <Word2>Med Tech</Word2>
          <Word3>Agro Tech</Word3>
          <Word4>E-Commerce </Word4>
          <Word5>Online Education</Word5>
          <Word6>E-Gov</Word6>
        </div>
        

      </DCimg> 
        
      <DCimg2>
      <Icontic>
        <Smalicontic>
          <Icons></Icons>
          <Iconstext> Qulay ofis</Iconstext>
        </Smalicontic>
       
        <Smalicontic>
          <Icons></Icons>
          <Iconstext>Professional murabbiylar bilan ishlash</Iconstext>
        </Smalicontic>
       
        <Smalicontic>
          <Icons></Icons>
          <Iconstext>Muvaffaqiyatli tadbirkorlar bilan faol aloqa</Iconstext>
        </Smalicontic>
      </Icontic>

      <Nexticontic>
        <Smalicontic>
          <Icons></Icons>
          <Iconstext>Yuridik maslahat</Iconstext>
        </Smalicontic>
        <Smalicontic>
          <Icons></Icons>
          <Iconstext> Buxgalteriya yordami</Iconstext>
        </Smalicontic>
        <Smalicontic>
          <Icons></Icons>
          <Iconstext> Biznes tadbirlariga cheklanmagan kirish imkoniyati</Iconstext>
        </Smalicontic>
      </Nexticontic>
        
        <Text1> Inkubatsiya Markazlari</Text1>
        <Rasm1 src={Image1} />
        <Rasm2 src={Image2} />
        <Rasm3 src={Image3} />
        <Rasm4 src={Image4} />
        <Rasm1photo>Andijon davlat universiteti</Rasm1photo>
        <Rasm2photo>Andijon mashinasozlik instituti</Rasm2photo>
        <Rasm3photo>Andojon davlat tibbiyot instituti</Rasm3photo>
        <Rasm4photo>Andijon qishloq xo‘jaligi va agrotexnologiyalar instituti</Rasm4photo>
        <Sxemaa src={Sxema} />
        <Inkubatsiya>Inkubatsiya Dasturi</Inkubatsiya>
        <Inkub> Bizning akademiyada siz IT sohalardagi har qanday startap loyihasining asosi “inkubatsiya” jarayonini boshlashingiz mumkin bo`ladi: Fintech, Medtech, Agrotech, Autotech, E-Gov, E-Commerce, IoT, Online Education. Biz tarafdan siz qabul qilishingiz mumkin bo`lgan imkoniyatlar: jismoniy infratuzilma, ( shinam ofis va kovorking markazi), professional trekerlar, huquqiy maslahat, buxgalterlik ko`magi, muvaffaqiyatli tadbirkorlar bilan muloqot, biznes tadbirlarida ishtirok etish va albatta, yuqori tezlikdagi Internet.</Inkub>
      </DCimg2>
        </Container>   
    
  )
}

export default Navbar





