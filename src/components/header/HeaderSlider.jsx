import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export default function HeaderSlider() {
  return (
<div className='mt-8'>
<Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={4} autoplay={{delay:3000}} loop>
{
  [1,2,3,4,1,2,3,4].map(number =>(
    <SwiperSlide key={number}>
      <img className='w-full' src={`http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`} />
    </SwiperSlide>
  )

  )
}
  </Swiper>
</div>
  )
}
