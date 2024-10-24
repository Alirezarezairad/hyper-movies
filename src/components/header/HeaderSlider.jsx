import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function getImage(number){
  return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`
}

export default function HeaderSlider({ setBg, defaultBg }) {
  return (
    <div className='mt-8'>
      <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={4} autoplay={{delay:3000}} loop>
      {[1, 2, 3, 4, 1, 2, 3, 4].map((number, index) => (
          <SwiperSlide key={`${number}-${index}`}> 
            <img 
              onMouseOver={() => setBg(getImage(number))}
              onMouseLeave={() => setBg(defaultBg)}  
              className='w-full' 
              src={getImage(number)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
