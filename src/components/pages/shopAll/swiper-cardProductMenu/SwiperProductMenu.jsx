import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import CardProduct from '../card-product/CardProduct';

export default function SwiperProductMenu({products}) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            
          }}
        modules={[Pagination]}
        className="mySwiper"
      >

      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <CardProduct el={product} />
        </SwiperSlide>
      ))}

      </Swiper>
    </>
  );
}
