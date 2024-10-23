import React from "react";
import Navigation from "./Navigation";
import SerchBox from "./SerchBox";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";

export default function Header() {
    return (

        <header className=" py-12" style={{ backgroundImage:  `linear-gradient(rgb(0 0 0 / 90%), rgb(0 0 0 / 40%)), url(/cinema.jpg)` }}>
            <div className="container">
                <Navigation />
                <SerchBox />
                <FollowUs />
                <HeaderSlider />
            </div>
        </header>

    );
}