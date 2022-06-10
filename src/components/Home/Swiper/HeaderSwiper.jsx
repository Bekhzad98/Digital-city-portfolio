import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Play from '@mui/icons-material/PlayArrow';



// Import Swiper styles
// import "swiper/css";
// import "swiper/css/scrollbar";
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// import required modules
import SwiperCore, { Scrollbar, Autoplay, EffectFade } from "swiper";
import style from '../../../styles/Header.module.css'

//videos
import Movie1 from '../../../assets/video/people.mp4'
import { Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";


SwiperCore.use([EffectFade,Autoplay, Scrollbar])

  

export default function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <>
      <Swiper
        className={style.Swipers}
        autoplay={{delay: 3000,}}
        modules={[Autoplay,EffectFade]}
        effect={"fade"}
        fadeEffect={{crossFade: true}}
      >
          <Modal
           sx={{border: 'none'}}
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description">

               <Box className={style.MovieCard}>
                    <video className={style.SwiperItem} controls autoPlay loop src={Movie1}></video>
               </Box>
          </Modal>
        <SwiperSlide  className={style.Swiper_slide}>
            <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <h1 className={style.Title}>
                        Raqamli Andijon
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
        <SwiperSlide  className={style.Swiper_slide}>
            <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}>
                    <h1 className={style.Title}>
                       Digital City
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
      </Swiper>
    </>
  );
}
