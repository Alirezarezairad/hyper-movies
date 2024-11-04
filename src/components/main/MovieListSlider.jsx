import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../Movie/MovieCard';

export default function MovieListSlider({ movies }) {
    return (
        <Swiper 
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }}
            modules={[Autoplay]}  
            autoplay={{ delay: 5000 }} 
            centeredSlides 
            loop
        >
            {movies.map((img, index) => (
                <SwiperSlide key={`${img}-${index}`}> 
                    <div>
                        <MovieCard img={img} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
