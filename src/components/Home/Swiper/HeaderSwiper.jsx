import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Play from '@mui/icons-material/PlayArrow';
import axios from 'axios'

import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// import required modules
import SwiperCore, { Scrollbar, Autoplay, EffectFade } from "swiper";
import style from '../../../styles/Header.module.css'

//videos
import Movie1 from '../../../assets/video/people.mp4'
import DC from '../../../assets/video/DC.mp4'
import { Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";


SwiperCore.use([EffectFade,Autoplay, Scrollbar])

  

export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    const [data, setData] = useState([]) 
    const [data1, setData1] = useState([]) 
    useEffect(() => {
     axios.get('http://167.99.214.82/get-slider/')
     .then(res=>{
       setData(res.data[1])
       setData1(res.data[0])
      })
    }, [])
    console.log(data);
  
  return (
    <>
      <Swiper
        className={style.Swipers}
        autoplay={{delay: 3000,}}
        modules={[Autoplay,EffectFade]}
        effect={"fade"}
        fadeEffect={{crossFade: true}}
      >
           
        <SwiperSlide  className={style.Swiper_slide}>  
        <Modal
           sx={{border: 'none'}}
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">        
                <Box className={style.MovieCard}>
                  {/* {data?.map((el, index) => {
                    return(
                        <video className={style.SwiperItem} controls autoPlay loop src={el.video}></video>
                        )
                    })} */}
                    {/* <video className={style.SwiperItem} controls autoPlay loop src={`http://167.99.214.82${data.video}`}></video> */}
                    <video className={style.SwiperItem} controls autoPlay loop src={Movie1}></video>
                </Box>
          </Modal>     
            <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                        <h1 className={style.Title}>
                          {data.title_uz}
                        </h1>
                </Grid>
                <Grid item  xs={12} md={6}>
                <div  className={style.Items}>
                    <div onClick={handleOpen} className={style.PlayMovie}>
                        <span>
                            <Play className={style.PlayIcon} sx={{fontSize: '4vw'}}/>  
                        </span>
                    </div>
                </div>
                </Grid>
            </Grid>
        </SwiperSlide>
        <Modal
           sx={{border: 'none'}}
           open={open1}
           onClose={handleClose1}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">        
                <Box className={style.MovieCard}>
                  {/* {data?.map((el, index) => {
                    return(
                        <video className={style.SwiperItem} controls autoPlay loop src={el.video}></video>
                        )
                    })} */}
                    {/* <video className={style.SwiperItem} controls autoPlay loop src={`http://167.99.214.82${data.video}`}></video> */}
                    <video className={style.SwiperItem} controls autoPlay loop src={DC}></video>
                </Box>
          </Modal>  
        <SwiperSlide  className={style.Swiper_slide}>      
            <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                        <h1 className={style.Title}>
                          {data1.title_uz}
                        </h1>
                </Grid>
                <Grid item  xs={12} md={6}>
                <div  className={style.Items}>
                    <div onClick={handleOpen1} className={style.PlayMovie}>
                        <span>
                            <Play className={style.PlayIcon} sx={{fontSize: '4vw'}}/>  
                        </span>
                    </div>
                </div>
                </Grid>
            </Grid>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
