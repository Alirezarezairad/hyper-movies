import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SerchBox() {
  return (
    <section className=" mt-12 text-slate-100">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-slate-700 texte-2xl p-4 border-slate-900 border-4 rounded-md"
          placeholder="Search for a movie, TV Show or celebrity that you are looking for"
        />
        <div className="absolute absolute right-4 top-1/2 ">
       <IoSearchOutline className=" -translate-y-1/2 w-9 h-9"/>
       </div>
      </div>
    </section>
  );
}
