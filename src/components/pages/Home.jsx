import React from 'react';
import MovieListSlider from '../main/MovieListSlider'
const movies = [
    "https://media.themoviedb.org/t/p/w220_and_h330_face/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/b2YL2kncIqlcDcqly78AsOPJi6r.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/k42Owka8v91trK1qMYwCQCNwJKr.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/63xYQj1BwRFielxsBDXvHIJyXVm.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/gzMFMmpJHOmOFKsAhSDac62Dyg2.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/gOcqzHwkApTWD9i5ChDK5wO5pM5.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/hRuo0CXc5XINxVnMIA2r5fjzqVD.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/rB90k4l1L6G5Ub6Fuhb7viyu6Pj.jpg",
];

const movies2 = [
    "https://media.themoviedb.org/t/p/w220_and_h330_face/aE85MnPIsSoSs3978Noo16BRsKN.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/1agSI7NGvagr720za8XAubtqUoB.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/xXz6ScxPlLRzL3MtzceNY52Neuq.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/flSncTaSISRqrqoJ18ZBmThR4Ee.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/sI0WxsgVFE5RkPA7G6PznWRxBEW.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/y1xm0jMIlx9Oo2a3jWNyLGm43sJ.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/r2D7MkNocsqKOqGnnGEQThU26JS.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/9xSjP8B0iZHRzvrtKcYDkaalomS.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/8rdB1wkheEMMqcY8qLAKjCMPcnZ.jpg",
    "https://media.themoviedb.org/t/p/w220_and_h330_face/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
];

export default function Home() {
    return (
        <div className='container'>
            <div className='pt-5'>
                <div className='md:flex gap-8 items-center md:mb-4'>
                    <h2 className='text-slate-300 text-2xl items-center'>What's Popular</h2>
                    <ul className='flex-col md:flex md:flex-row gap-4 md:gap-6 text-slate-300 my-9 text-yellow-100'>
                        <li>#Streaming</li>
                        <li>#On TV</li>
                        <li>#For rent</li>
                        <li>#In Theaters</li>
                    </ul>
                </div>
                <MovieListSlider movies={movies} />
            </div>
            <div className='pt-5'>
                <div className='md:flex gap-8 items-center md:mb-4'>
                    <h2 className='text-slate-300 text-2xl items-center'>Free to Watch</h2>
                    <ul className='flex-col md:flex md:flex-row gap-4 md:gap-6 text-slate-300 my-9 text-yellow-100'>
                        <li>#Movie</li>
                        <li>#TV</li>
                    </ul>
                </div>
                <MovieListSlider movies={movies2} />
            </div>
        </div>
    );
}
