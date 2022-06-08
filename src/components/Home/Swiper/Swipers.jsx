import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Swiper1 from '../../../assets/images/Main/SwiperImg/Swiper_1.png'
import Swiper2 from '../../../assets/images/Main/SwiperImg/Swiper_2.png'
import Swiper3 from '../../../assets/images/Main/SwiperImg/Swiper_3.png'
import Swiper4 from '../../../assets/images/Main/SwiperImg/Swiper_4.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from './Swiper.module.css'

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Swipers = () => {

  
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
        <SwiperSlide  className="SwiperSlide">
          <div className={style.SwiperDiv}>
            <img src={Swiper1} />
            <p>EduApp - o‘quvchilarni davomati, baho va kurslar uchun qilgan to‘lo‘vlarni tekshirish bilan birgalikda, buxgalteriya ishlari hamda statistika yurgazish uchun  yaratilgan dastur.  </p>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="SwiperSlide">
          <div className={style.SwiperDiv}>
            <img src={Swiper2} />
            <p>Ijro.uz - ushbu dastur xokimiyat tarafidan qo‘yilgan buyruq va farmonlarni bajarilishini onlayn tartibda tekshirish va boshqarish imkoniyatlarini beradi.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="SwiperSlide">
          <div className={style.SwiperDiv}>
            <img src={Swiper3} />
            <p>Apteki.uz - dasturi  barcha aptekalardagi dori-dramonlarni invertarizasiya qilib, sotish va onlayn tizimida barcha filiallar haqida ma'lumot olish imkoniyatlarini beradi.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide  className="SwiperSlide">
          <div className={style.SwiperDiv}>
            <img src={Swiper4} />
            <p>Andijonxokimiyat.uz - Andijon xokimiyati yangiliklar sayti. Ushbu sayt yordamida Andijon viloyati bo‘yicha sodir bo‘layotgan so‘nggi xabarlar hamda xokimiyat tomonidan qo‘yilayotgan buyruqlar haqida doyimo xabardor bo’lishingiz mumkin.</p>
          </div>
        </SwiperSlide>
       
       
      </Swiper>
    </>
  )
}

export default Swipers