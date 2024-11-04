import React from 'react'
import { BsStarFill } from "react-icons/bs";

export default function MovieCard({img}) {
  return (
    <div className='bg-gray-300 aspect-[2/3]  relative rounded overflow-hidden'>
      <img src={img} className='object-cover w-full -h-full' alt="" />
      <div className='flex flex-col justify-end p-5 absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#0f172a12] to-[#0f172a81] hover:from-[#0f172a49] hover:to-[#0f172a9c]'>
      <h3>Die Hard</h3>
      <div className='flex gap-2 mt-1'>

        <span><BsStarFill className='text-yellow-400' /></span>

        <span>7.4 / 10</span>
      </div>
      </div>
    </div>
  )
}
