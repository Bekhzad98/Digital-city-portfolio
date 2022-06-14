import React, { useEffect, useState } from "react";
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper1 from '../../../assets/images/Main/SwiperImg/Swiper_1.png'
// import Swiper2 from '../../../assets/images/Main/SwiperImg/Swiper_2.png'
// import Swiper3 from '../../../assets/images/Main/SwiperImg/Swiper_3.png'
// import Swiper4 from '../../../assets/images/Main/SwiperImg/Swiper_4.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from './Swiper.module.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Swipers = () => {
  const [projects, setProjects] = useState([])

    useEffect(() => {
     axios.get('http://167.99.214.82/get-projects/')
     .then(res=>{
       setProjects(res.data)
      })
  }, [])

  
  return (
    <>
     <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          slideShadows: true,
        }}
        pagination={{dynamicBullets: true}}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects?.map((item) => {
          return(
            <SwiperSlide key={item.id}  className="SwiperSlide">
            <div className={style.SwiperDiv}>
              <img src={`http://167.99.214.82${item.image}`} />
              <p>{item.text_uz} </p>
            </div>
          </SwiperSlide>
          )
        })}
       
        
       
       
      </Swiper>
    </>
  )
}

export default Swipers