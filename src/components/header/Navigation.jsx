import React, { useState } from 'react'
import { BsList } from "react-icons/bs";

export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
<>
<nav className='flex  items-center text-slate-300 bg-slate-900 p-2 md:container md:bg-transparent'>
       <div className='flex items-center'>
        <h1 className='text-3xl mr-12'>
          Hyper<span className='text-rose-500'>Movies</span>
          <p className='text-xs text-center text-slate-500 font-light'>Film Review</p>
          </h1>
        <ul className='hidden  md:flex text-sm lg:text-base gap-6 uppercase'>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">More</a></li>
        </ul>
       </div>
       <div className='hidden  md:block text-sm lg:text-base ml-auto '>
        <ul className='flex gap-8 uppercase'>
            <li><a href="#">Login</a></li>
            <li><a className='bg-rose-700 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white' href="#">Sign up</a></li>
        </ul>
       </div>
       <div className='md:hidden ml-auto'>
        <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <BsList className='w-10 h-9' />
        </button>
        </div>
    </nav>
    <div className={`bg-slate-900 text-center 
        ${isOpenMenu ? 'h-full py-4 border-t-2 border-slate-700' : 'overflow-hidden py-0 h-0 border-none'}`}>
<ul className='flex flex-col gap-4'>
  <li><a href="#">MOVIES</a></li>
  <li><a href="#">TV SHOWS</a></li>
  <li><a href="#">PEOPLE</a></li>
  <li><a href="#">MORE</a></li>
</ul>
    </div>
</>
  )
}
