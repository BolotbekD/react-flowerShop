import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Comments from '../comment/Comments';

export default function Swipers() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Comments/>
        </SwiperSlide>
        <SwiperSlide>
            <Comments/>
        </SwiperSlide>
        <SwiperSlide>
            <Comments/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
