import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import BoxSlider from './boxSlider/BoxSlider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SliderChocolate from './boxSlider/SliderChocolate';
import SliderRoses from './boxSlider/SliderRoses';


const Slider = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <BoxSlider/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderChocolate/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderRoses/>
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;