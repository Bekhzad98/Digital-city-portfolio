import React from 'react';
import { AndijanMap, AndijanMap1, AndijanMap10, AndijanMap11, AndijanMap12, AndijanMap13, AndijanMap14, AndijanMap2, AndijanMap3, AndijanMap4, AndijanMap5, AndijanMap6, AndijanMap7, AndijanMap8, AndijanMap9, AndijanMapBg, AndLoc1, AndLoc10, AndLoc11, AndLoc12, AndLoc13, AndLoc2, AndLoc3, AndLoc4, AndLoc5, AndLoc6, AndLoc7, AndLoc8, AndLoc9, CentersText, CentersTitle, CompaniesDigits10, CompaniesDigits11, CompaniesDigits20, CompaniesDigits21, CompaniesDigits30, CompaniesDigits31, CompaniesDigits40, CompaniesDigits41, CompaniesDiv, CompaniesLeft, CompaniesLeftImg, CompaniesRight, Container, H1Head, InfraDiv, InfraLeft, InfraRight, InfraTitle, InfraTitle2, Loc1, Loc10, Loc11, Loc12, Loc13, Loc14, Loc15, Loc16, Loc2, Loc3, Loc4, Loc5, Loc6, Loc7, Loc8, Loc9, MapBackground, MapItem1, MapItem10, MapItem11, MapItem12, MapItem13, MapItem2, MapItem3, MapItem4, MapItem5, MapItem6, MapItem7, MapItem8, MapItem9, MapItems, Number, PHead, Texnopark, TexnoparkLeft, TexnoparkRight, TexnoparkText, TexnoparkTitle } from './InfraHead-style';
//Uzbekistan map puzzle
import MapBG from './../../images/map/mapbg.png';
import QQalpoq from './../../images/map/qqalpoq.png';
import Andijon from './../../images/map/andijon.png';
import Buxoro from './../../images/map/buxoro.png';
import Fargona from './../../images/map/fargona.png';
import Jizzax from './../../images/map/jizzax.png';
import Namangan from './../../images/map/namangan.png';
import Navoiy from './../../images/map/navoiy.png';
import Qarshi from './../../images/map/qarshi.png';
import Samarqand from './../../images/map/samarqand.png';
import Sirdaryo from './../../images/map/sirdaryo.png';
import Surxon from './../../images/map/surxon.png';
import Toshkent from './../../images/map/toshkent.png';
import Xorazm from './../../images/map/xorazm.png';
import Location from './../../images/map/locationIcon.png';

//Andijan map puzzle
import AndijanBg from './../../images/andijan/andijanbg.png';
import Ulugnor from './../../images/andijan/ulugnor.png';
import Baliqchi from './../../images/andijan/baliqchi.png';
import Boz from './../../images/andijan/boz.png';
import Shahrixon from './../../images/andijan/shahrixon.png';
import Oltinkol from './../../images/andijan/oltinkol.png';
import Asaka from './../../images/andijan/asaka.png';
import Izboskan from './../../images/andijan/izboskan.png'; 
import Marhamat from './../../images/andijan/marhamat.png';
import BuloqBoshi from './../../images/andijan/buloqboshi.png';
import AndijonShahri from './../../images/andijan/andijonshaxri.png';
import Paxtaobod from './../../images/andijan/paxtaobod.png';
import Xojabod from './../../images/andijan/xojabod.png';
import Jalaquduq from './../../images/andijan/jalaquduq.png';
import Qorgontepa from './../../images/andijan/qorgontepa.png';
import Building from './../../images/andijan/building.svg';
import AllBuilding from './../../images/andijan/allbuildings.png';

import { Tooltip } from '@mui/material';
import { Phone } from '@mui/icons-material';
//images
import Zellipse from './../../images/zellipse.png';

const InfraHead = () => {

  return (
    <>
       <Container>

              
                
                     <InfraTitle data-aos='zoom-in' data-aos-duration="5 00">Infratuzilma
            <InfraTitle2>Infratuzilma</InfraTitle2></InfraTitle>
            <InfraDiv>
                <InfraLeft data-aos="fade-right" >
                  <H1Head>
                  Oʻzbekistondagi IT markazlar
                  </H1Head>
                        <PHead>
                            Bugungi kunga qadar O‘zbekistonning ko‘plab hududlarida IT markazlari tashkil etilgan. Bundan ko'zlangan maqsad qiziquvchan yoshlarni IT ta’limga rag'batlantirish, ularning innovatsion loyihalarini qo'llab quvvatlash va aholi turmush sharoitini yaxshilash kabi masalalar ilgari surilgan.
                        </PHead>
                </InfraLeft>
                <InfraRight >
                    
                        
                        
                        <MapItems>
                        <MapBackground src={MapBG}/>
                        <Tooltip title='Qoraqalpog`iston'><MapItem1 src={QQalpoq}/></Tooltip>
                        <Tooltip title='Xorazm'><MapItem2 src={Xorazm}/></Tooltip>
                        <Tooltip title='Buxoro'><MapItem3 src={Buxoro}/></Tooltip>
                        <Tooltip title='Navoiy'><MapItem4 src={Navoiy}/></Tooltip>
                        <Tooltip title='Qarshi'><MapItem5 src={Qarshi}/></Tooltip>
                        <Tooltip title='Samarqand'><MapItem6 src={Samarqand}/></Tooltip>
                        <Tooltip title='Surxondaryo'><MapItem7 src={Surxon}/></Tooltip>
                        <Tooltip title='Jizzax'><MapItem8 src={Jizzax}/></Tooltip>
                        <Tooltip title='Sirdaryo'><MapItem9 src={Sirdaryo}/></Tooltip>
                        <Tooltip title='Toshkent'><MapItem10 src={Toshkent}/></Tooltip>
                        <Tooltip title='Namangan'><MapItem11 src={Namangan}/></Tooltip>
                        <Tooltip title='Farg`ona'><MapItem12 src={Fargona}/></Tooltip>
                        <Tooltip title='Andijon'><MapItem13 src={Andijon}/></Tooltip>
                        <Loc1 src={Location}/>
                        <Loc2 src={Location}/>
                        <Loc3 src={Location}/>
                        <Loc4 src={Location}/>
                        <Loc5 src={Location}/>
                        <Loc6 src={Location}/>
                        <Loc7 src={Location}/>
                        <Loc8 src={Location}/>
                        <Loc9 src={Location}/>
                        <Loc10 src={Location}/>
                        <Loc11 src={Location}/>
                        <Loc12 src={Location}/>
                        <Loc13 src={Location}/>
                        <Loc14 src={Location}/>
                        <Loc15 src={Location}/>
                        <Loc16 src={Location}/>
                        </MapItems>
                    
                </InfraRight>
            </InfraDiv>
                <Number><Phone/>1227</Number>
            <CompaniesDiv>
              <CompaniesLeft data-aos="fade-left">
                <CompaniesLeftImg src={Zellipse} />
                  <CompaniesDigits10>2022</CompaniesDigits10>
                  <CompaniesDigits11>37Ta</CompaniesDigits11>
                  <CompaniesDigits20>2021</CompaniesDigits20>
                  <CompaniesDigits21>21Ta</CompaniesDigits21>
                  <CompaniesDigits30>2020</CompaniesDigits30>
                  <CompaniesDigits31>8Ta</CompaniesDigits31>
                  <CompaniesDigits40>2019</CompaniesDigits40>
                  <CompaniesDigits41>1Ta</CompaniesDigits41>
              </CompaniesLeft>
              <CompaniesRight >
                <CentersTitle>
                Andijon viloyatida IT markazlar 
                </CentersTitle>
                <CentersText>
                    Respublikamizda boshqa viloyatlarga qaraganda Andijon viloyatida IT sohasiga qiziquvchi yoshlar soni tobora ortib borayotganligi tufayli viloyatdagi IT markazlari soni 37 nafarga yetdi. 
                </CentersText>
              </CompaniesRight>
            </CompaniesDiv>
            <Texnopark>
              <TexnoparkLeft >
                  <TexnoparkTitle >
                  “Digital City” Texnopark
                  </TexnoparkTitle>
                  <TexnoparkText>
                  Digital City texnoparki Andijon viloyatidagi yetakchi IT markazlardan biridir. 5,6 gektar maydonda qurib bitkazilgan, 4 kavatli 3,5 ming kv.m. ni tashkil etadigan ushbu majmua axborot texnologiyalari va innovatsion loyihalarni qo‘llab-quvvatlash, dasturiy mahsulotlar eksportini yo‘lga qo‘yish va 50 dan ortiq IT sohasida xizmat ko‘rsatadigan korxonalarni joylashtirish uchun mo‘ljallangan. 
                  </TexnoparkText>
              </TexnoparkLeft>
              <TexnoparkRight>
                  <AndijanMap>
                    <AndijanMapBg src={AndijanBg}/>
                    <Tooltip title='Ulug`nor'><AndijanMap1 src={Ulugnor}/></Tooltip>
                    <Tooltip title='Bo`z'><AndijanMap2 src={Boz}/></Tooltip>
                    <Tooltip title='Baliqchi'><AndijanMap3 src={Baliqchi}/></Tooltip>
                    <Tooltip title='Shahrixon'><AndijanMap4 src={Shahrixon}/></Tooltip>
                    <Tooltip title='Oltinko`l'><AndijanMap5 src={Oltinkol}/></Tooltip>
                    <Tooltip title='Asaka'><AndijanMap6 src={Asaka}/></Tooltip>
                    <Tooltip title='Marhamat'><AndijanMap7 src={Marhamat}/></Tooltip>
                    <Tooltip title='Izboskan'><AndijanMap8 src={Izboskan}/></Tooltip>
                    <Tooltip title='Paxtaobod'><AndijanMap9 src={Paxtaobod}/></Tooltip>
                    <Tooltip title='Andijon Shahri'><AndijanMap10 src={AndijonShahri}/></Tooltip>
                    <Tooltip title='Buloq boshi'><AndijanMap11 src={BuloqBoshi}/></Tooltip>
                    <Tooltip title='Xojabod'><AndijanMap12 src={Xojabod}/></Tooltip>
                    <Tooltip title='Jalaquduq'><AndijanMap13 src={Jalaquduq}/></Tooltip>
                    <Tooltip title='Qo`rg`ontepa'><AndijanMap14 src={Qorgontepa}/></Tooltip>
                    <AndLoc1 src={Building}/>
                    <AndLoc2 src={Building}/>
                    <AndLoc3 src={Building}/>
                    <AndLoc4 src={AllBuilding}/>
                    <AndLoc5 src={Building}/>
                    <AndLoc6 src={Building}/>
                    <AndLoc7 src={Building}/>
                    <AndLoc8 src={Building}/>
                    <AndLoc9 src={Building}/>
                    <AndLoc10 src={Building}/>
                    <AndLoc11 src={Building}/>
                    <AndLoc12 src={Building}/>
                    <AndLoc13 src={Building}/>
                  </AndijanMap>
              </TexnoparkRight>
            </Texnopark>
    
         </Container>
    </>
  )
}

export default InfraHead;