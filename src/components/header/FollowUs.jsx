import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function FollowUs() {
    return (
        <section className=' flex justify-end mt-4 text-slate-200 text-sm'>
            <div className=' flex items-center'>
                <span>FOLLOW US:</span>
                <ul className='flex ml-3 gap-4 '>
                    <li><a className='hover:text-rose-400' href="#"><BsYoutube /></a>
                    </li>

                    <li><a className='hover:text-rose-400' href="#"><BsTwitter /></a>
                    </li>

                    <li><a className='hover:text-rose-400' href="#"><BsFacebook /></a>
                    </li>
                    <li><a className='hover:text-rose-400' href="#"><BsInstagram /></a></li>
                </ul>
            </div>
        </section>
    )
}
