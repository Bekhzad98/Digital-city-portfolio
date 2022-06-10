import React, { useEffect, useState } from 'react'
import style from '../../styles/Main/Main.module.css'
import Swiper from './Swiper/Swipers'

import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Datas} from '../../data/MainData'

// Images
import AddMenu from '../../assets/images/Main/AdMenu.png'
import Add from '../../assets/images/Main/Add.png'
import ItTalim from '../../assets/images/Main/ItTalim.png'
import Startaplar from '../../assets/images/Main/Startaplar.png'
import KiberSport from '../../assets/images/Main/KiberSport.png'
import Raqam from '../../assets/images/Main/Raqam.png'
import Biznes from '../../assets/images/Main/Biznes.png'
import Exclude from '../../assets/images/Main/Exclude.png'





const Main = () => {
 


  return (
    <div className={style.Container}>
        <div className={style.Section}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000"
                  className={style.TitleDiv}>
                TEXNOPARK
                <h2>TEXNOPARK</h2>
            </span>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000" className={style.GridBox} container spacing={0} >
                    <Grid className={style.Cart} item  xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />
                                <img className={style.AddIcon} src={Add} alt="" />
                                
                                <p>+10</p>
                            </span>
                            <h1>Yangi IT Korxonalar</h1>
                        </div>
                    </Grid>
                    <Grid className={style.Cart} item  xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />                                
                                <p>+10</p>
                            </span>
                            <h1>Yangi IT Korxonalar</h1>
                        </div>
                    </Grid>
                    <Grid className={style.Cart} item  xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />                                
                                <p>+10</p>
                            </span>
                            <h1>Yangi IT Korxonalar</h1>
                        </div>
                    </Grid>
                    <Grid className={style.Cart} item  xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />                                
                                <p>+10</p>
                            </span>
                            <h1>Yangi IT Korxonalar</h1>
                        </div>
                    </Grid>
                    <Grid  className={style.Cart}  item   xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />                                
                                <p>+10</p>
                            </span>
                            <h1>Yangi IT Korxonalar</h1>
                        </div>
                    </Grid>
                    <Grid className={style.Cart} item   xs={6} sm={6} md={4} lg={4} xl={4}>
                        <div>
                            <span>
                                <img className={style.Add} src={AddMenu} alt="" />                                
                                <p>+10</p>
                            </span>
                            <h1>Davlat xizmatchilari malakalarini oshirish</h1>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid  item  className='ButtonDivApp' xs={12} >
                        <Button className='ButtonsApp'>Batafsil</Button>   
                    </Grid>
                </Grid>
        </div>

        <div className={style.SectionAppDigital}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                IT TA’LIM
                <h2>IT TA’LIM</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid  className={style.SectionPage} item  xs={12} sm={12} md={6} lg={6} xl={6}>
                   
                        <p>
                        Respublikamizda boshqa viloyatlarga qaraganda Andijon viloyatida IT sohasiga qiziquvchi yoshlar soni tobora ortib borayotganligi tufayli viloyatdagi IT markazlari soni 37 nafarga yetdi. Andijon viloyati bo`ylab IT ta’lim markazlariga jalb etilgavn o`quvchilar soni  10,383taga yetgan. Ulardan yigitlar 83% tashkil qilsa, qizlar esa 17% tashkil etadi. IT ta’lim markazlarida yoshlar qamrovi darajasi
                        quiyidagicha: maktab o`quvchilari 70%, oliy va o`rta maxsus ta’lim muassasalari talabalari 22%, uyushmagan yoshlar 8% tashkil etishadi.
                        </p>
    
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                
                    
                   
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item  style={{justifyContent: 'flex-end'}} className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={ItTalim} alt="" />
                </Grid>                  
            </Grid>
        </div>

        <div className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                STARTAPLAR
                <h2>STARTAPLAR</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item   className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={Startaplar} alt="" />
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>Agar sizda  startap loyihalar bo’lsa biz sizga g’oyangizni inkubatsiya qilishda, investorlar jalb qilishda, va loyihangizni boshqarish uchun zarur boʻlgan koʻnikmalarni egallashingizda yordam beramiz.
                        <Grid   item style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
            </Grid>
        </div>  
        <div className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                LOYIHALAR
                <h2>LOYIHALAR</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid  item  className={style.SectionPageSwiper}  xs={12} sm={12} md={12} lg={12} xl={12}>
                    <p className={style.SectionDescription} >Biz mijozlarimizga biznesni ilg'or texnologiyalar va innovatsion yechimlar orqali loyihalashtirishda yordam beramiz.</p>
                </Grid>
                <Grid  item   className={style.SwiperSlides}  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Swiper/>
                </Grid>
            </Grid>
        </div>  
        <div className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                KIBERSPORT
                <h2>KIBERSPORT</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>Kundan-kunga dunyoda kibersport tushunchasi ommalashib bormoqda va uning muxlislari soni millionlarni tashkil etmoqda. O‘zbekistonda kibersport yo‘nalishida professional jamoalar tuzishda xizmat ko’rsatamiz.
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item  style={{justifyContent: 'flex-end'}} className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={KiberSport} alt="" />
                </Grid>
            </Grid>
        </div>  
        <div className={style.SectionAppSmall}>
            <span  data-aos="zoom-in"
                    data-aos-duration="1000" className={style.TitleDiv}>
                RAQAMLASHTIRISH
                <h2>RAQAMLASHTIRISH</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000" item   className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={Raqam} alt="" />
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>Biz hayotning turli sohalariga, jumladan iqtisodiyot, ta’limning barcha bosqichlari, madaniyat, tibbiyot, turizm, qishloq xo‘jaligi, xizmat ko‘rsatish va boshqa jarayonlarga raqamli texnologiyalarni joriy qilishda va yagona kalitli raqamli ekotizim dasturlashda yordam beramiz.
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
            </Grid>
        </div>  
        <div className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                    Biznes ochish
                <h2>Biznes</h2>
            </span>
            <Grid  item  className={style.GridBoxes} container spacing={0} >
                <Grid   item className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>Biz sizga biznes ochishingizda va tadbirkorlikni to‘g‘ri va xatosiz boshlashingizda yordam beramiz, soliqlar bo‘yicha maslahat beramiz va barcha kerakli hujjatlarni rasmiylashtiramiz.
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"   item  style={{justifyContent: 'flex-end'}}  className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img  src={Biznes} alt="" />
                </Grid>
            </Grid>
        </div>  
        <div  className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                INFRATUZILMA
                <h2>INFRATUZILMA</h2>
            </span>
            <Grid  item  className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item   className={style.SectionPageImg1}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <span className={style.ExcludeInfo}>
                      <p>2019</p>
                      <h2>1Ta</h2>
                  </span>
                  <span className={style.ExcludeInfo2}>
                      <p>2019</p>
                      <h2>1Ta</h2>
                  </span>
                  <span className={style.ExcludeInfo3}>
                      <p>2019</p>
                      <h2>1Ta</h2>
                  </span>
                  <span className={style.ExcludeInfo4}>
                      <p>2019</p>
                      <h2>1Ta</h2>
                  </span>
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>Biz hayotning turli sohalariga, jumladan iqtisodiyot, ta’limning barcha bosqichlari, madaniyat, tibbiyot, turizm, qishloq xo‘jaligi, xizmat ko‘rsatish va boshqa jarayonlarga raqamli texnologiyalarni joriy qilishda va yagona kalitli raqamli ekotizim dasturlashda yordam beramiz.
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
            </Grid>
        </div>  
        <div style={{height: 'auto'}} className={style.SectionApp}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                ALOQA
                <h2>ALOQA</h2>
            </span>
            <div className={style.AddresPage}>
                <div className={style.LeftSocial}>
                    {Datas.map((el , index) => (
                        <div key={index} className={style.Social}>
                            <p>{el.icon}</p>
                            <span>
                                <h1>{el.title}</h1>
                                <h3>{el.description}</h3>
                            </span>
                        </div>
                    ))}
                    
                </div>
                <div className={style.RightLogin}>
                    <h1>Bog'lanish</h1>
                    <input type="text" placeholder='Ism-Sharf' />
                    <input type="text" placeholder='Telefon Raqam' />
                    <textarea placeholder='Murojaat mavzusi' name="SendMessages" id="" cols="10" rows="50"></textarea>
                    <Button className='ButtonsAppSets'>Jonatish</Button>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Main