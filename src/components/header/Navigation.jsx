import React from 'react'

export default function Navigation() {
  return (
    <nav className='container flex mt-10 items-center text-slate-300'>
       <div className='flex items-center'>
        <h1 className='text-3xl mr-12'>HyperMovies</h1>
        <ul className='flex gap-6 uppercase'>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">More</a></li>
        </ul>
       </div>
       <div className='ml-auto '>
        <ul className='flex gap-8 uppercase'>
            <li><a href="#">Login</a></li>
            <li><a className='bg-rose-700 px-6 py-3 rounded-2xl text-white' href="#">Sign up</a></li>
        </ul>
       </div>
    </nav>
  )
}
