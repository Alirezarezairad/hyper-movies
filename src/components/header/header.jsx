import React, { useState } from "react";
import Navigation from "./Navigation";
import SerchBox from "./SerchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";

export default function Header() {
  const [defaultBg, ] = useState("/cinema.jpg");  
  const [bg, setBg] = useState(defaultBg);  



  return (
    <header className="py-12 transition-all duration-500 bg-cover bg-center" 
            style={{ backgroundImage: `linear-gradient(rgb(0 0 0 / 90%), rgb(0 0 0 / 40%)), url('${bg}')` }}>
      <div className="container">
        <Navigation />
        <SerchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} defaultBg={defaultBg} /> 



      </div>
    </header>
  );
}
