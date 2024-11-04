import React, { useState } from 'react'
import { BsList } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
<>
<nav className='flex hover:text items-center text-slate-300 bg-slate-900 p-2 md:container md:bg-transparent'>
       <div className='flex items-center'>
        <Link to="/">
        <h1 className='text-3xl mr-12'>
          Hyper<span className='text-rose-500'>Movies</span>
          <p className='text-xs text-center text-slate-500 font-light'>Film Review</p>
          </h1>
          </Link>
        <ul className='hidden  md:flex text-sm lg:text-base gap-6 uppercase'>
            <li><NavLink className='hover:text-white' to="/Movies">Movies</NavLink></li>
            <li><NavLink className='hover:text-white'to="/TvShows">TV Shows</NavLink></li>
            <li><NavLink className='hover:text-white'to="/More">More</NavLink></li>
        </ul>
       </div>
       <div className='hidden  md:block text-sm lg:text-base ml-auto '>
        <ul className='flex gap-8 uppercase'>
            <li><NavLink className='hover:text-white'to="/Login">Login</NavLink></li>
            <li><NavLink className='bg-rose-700 hover:bg-rose-500 px-6 py-3 rounded-2xl text-white'to="/SignUp">Sign up</NavLink></li>
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
  <li><NavLink to="/Movies">MOVIES</NavLink></li>
  <li><NavLink to="/TvShows">TV SHOWS</NavLink></li>
  <li><NavLink to="/More">MORE</NavLink></li>
</ul>
<div className='flex  gap-4 justify-center mt-8 items-center border-t-2 pt-4 border-slate-700'>
  <NavLink to="/Login" className='text-xl text-white'>LOGIN</NavLink>
  <NavLink to="/SignUp" className='bg-rose-600 rounded-xl py-2 px-4' >SIGN UP</NavLink>
  </div>
    </div>
</>
  )
}
