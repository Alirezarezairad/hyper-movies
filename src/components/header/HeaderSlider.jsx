import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../Movie/MovieCard'


function getImage(number){
  return `http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`
}

export default function HeaderSlider({ setBg, defaultBg }) {
  return (
    <div className='mt-8 hover:from-[#0f172a49] hover:to-[#0f172a9c]'>
      <Swiper 
      breakpoints={{
        640: {
          slidesPerView:2,
          spaceBetween:20,
        },
        768: {
          slidesPerView:3,
          spaceBetween:30,
        },
        1024: {
          slidesPerView:4,
          spaceBetween:40,
        },
      }}
      modules={[Autoplay]}  autoplay={{delay:3000}} loop>
      {[1, 2, 3, 4, 1, 2, 3, 4].map((number, index) => (
          <SwiperSlide key={`${number}-${index}`}> 
                 <div onMouseOver={() => setBg(getImage(number))}
                onMouseLeave={() => setBg(defaultBg)} >
            <MovieCard img={`http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider${number}.jpg`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
