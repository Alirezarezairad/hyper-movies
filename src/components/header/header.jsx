import React, { useState } from "react";
import Navigation from "./Navigation";
import SerchBox from "./SerchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";

export default function Header() {
  const [defaultBg, ] = useState("/cinema.jpg");  
  const [bg, setBg] = useState(defaultBg);  



  return (
    <header className=" transition-all duration-500 bg-cover bg-center pb-8 md:py-8" 
            style={{ backgroundImage: `linear-gradient(rgb(30 41 59 / 100%),rgb(30 41 59 / 40%), rgb(30 41 59 /20%)), url('${bg}')` }}>
      
      <Navigation />
      <div className="container">
        <SerchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} defaultBg={defaultBg} /> 
      </div>
    </header>
  );
}
