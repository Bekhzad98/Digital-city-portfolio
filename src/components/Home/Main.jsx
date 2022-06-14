import React, { useEffect, useState } from 'react'
import style from '../../styles/Main/Main.module.css'
import Swiper from './Swiper/Swipers'

import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import {Datas} from '../../data/MainData'
import axios from 'axios'

// Images
// import AddMenu from '../../assets/images/Main/AdMenu.png'
// import Add from '../../assets/images/Main/Add.png'
// import ItTalim from '../../assets/images/Main/ItTalim.png'
// import Startaplar from '../../assets/images/Main/Startaplar.png'
// import KiberSport from '../../assets/images/Main/KiberSport.png'
// import Raqam from '../../assets/images/Main/Raqam.png'
// import Biznes from '../../assets/images/Main/Biznes.png'
// import Exclude from '../../assets/images/Main/Exclude.png'





const Main = () => {
    const [data, setData] = useState({})
    const [techno, setTechno] = useState([])
    const [itTalim, setItTalim] = useState({})
    const [startUp, setStartUp] = useState({})
    const [kiberSport, setSkiberSport] = useState({})
    const [raqam, setRaqam] = useState({})
    const [biznes, setBiznes] = useState({})
    const [infratuzilma, setInfratuzilma] = useState({})

    useEffect(() => {
     axios.get('http://167.99.214.82/get-info/')
     .then(res=>{
       setData(res.data)
      })
    axios.get('http://167.99.214.82/get-technopark/')
     .then(res=>{
       setTechno(res.data)
      })
    axios.get('http://167.99.214.82/get-section/1/')
     .then(res=>{
       setItTalim(res.data)
    })
    axios.get('http://167.99.214.82/get-section/18/')
     .then(res=>{
        setStartUp(res.data)
    })
    axios.get('http://167.99.214.82/get-section/3/')
    .then(res=>{
        setSkiberSport(res.data)
    })
    axios.get('http://167.99.214.82/get-section/4/')
    .then(res=>{
        setRaqam(res.data)
    })
    axios.get('http://167.99.214.82/get-section/5/')
    .then(res=>{
        setBiznes(res.data)
    })
    axios.get('http://167.99.214.82/get-section/6/')
    .then(res=>{
        setInfratuzilma(res.data)
    })

  }, [])
  console.log(itTalim);


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
                            {/* <img className={style.AddIcon} src={Add} alt="" /> */}

                            {techno?.map((item,index)=> {
                            return(
                                <Grid key={index} className={style.Cart} item  xs={6} sm={6} md={4} lg={4} xl={4}>
                                    <span>
                                        <img className={style.Add} src={`http://167.99.214.82${item.icon}`} alt="" />
                                        <p>+{item.number}</p>
                                    </span>
                                    <h1>{item.text_uz}</h1>
                                </Grid>
                                
                                )})}
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
                {itTalim.name_uz}
                <h2>{itTalim.name_uz}</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid  className={style.SectionPage} item  xs={12} sm={12} md={6} lg={6} xl={6}>
                        <p>{itTalim.text_uz} </p>
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item  style={{justifyContent: 'flex-end'}} className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={`http://167.99.214.82${itTalim.image}`} alt="" />
                </Grid>                  
            </Grid>
        </div>

        <div className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                data-aos-duration="1000" className={style.TitleDiv}>
                {startUp.name_uz}
                <h2>{startUp.name_uz}</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item   className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={`http://167.99.214.82${startUp.image}`} alt="" />
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>{startUp.text_uz}
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
                {kiberSport.name_uz}
                <h2>{kiberSport.name_uz}</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>{kiberSport.text_uz}
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item  style={{justifyContent: 'flex-end'}} className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={`http://167.99.214.82${kiberSport.image}`} alt="" />
                </Grid>
            </Grid>
        </div>  
        <div className={style.SectionAppSmall}>
            <span  data-aos="zoom-in"
                    data-aos-duration="1000" className={style.TitleDiv}>
                {raqam.name_uz}
                <h2>{raqam.name_uz}</h2>
            </span>
            <Grid className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000" item   className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img src={`http://167.99.214.82${raqam.image}`} alt="" />
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>{raqam.text_uz}
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
                {biznes.name_uz}
                <h2>{biznes.name_uz}</h2>
            </span>
            <Grid  item  className={style.GridBoxes} container spacing={0} >
                <Grid   item className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>{biznes.text_uz}
                        <Grid  item  style={{marginTop: '7vw'}} className='ButtonDivApp' xs={12} >
                            <Button className='ButtonsApp'>Batafsil</Button>   
                        </Grid>
                    </p>   
                </Grid>
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"   item  style={{justifyContent: 'flex-end'}}  className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  <img  src={`http://167.99.214.82${biznes.image}`} alt="" />
                </Grid>
            </Grid>
        </div>  
        <div  className={style.SectionAppSmall}>
            <span data-aos="zoom-in"
                  data-aos-duration="1000" className={style.TitleDiv}>
                {infratuzilma.name_uz}
                <h2>{infratuzilma.name_uz}</h2>
            </span>
            <Grid  item  className={style.GridBoxes} container spacing={0} >
                <Grid data-aos="zoom-in"
                  data-aos-duration="1000"  item   className={style.SectionPageImg}  xs={12} sm={12} md={6} lg={6} xl={6}>
                  {/* <span className={style.ExcludeInfo}>
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
                  </span> */}
                  <img  src={`http://167.99.214.82${infratuzilma.image}`} alt="" />
                </Grid>
                <Grid  item  className={style.SectionPage}  xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p>{infratuzilma.text_uz}
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