import React from "react";
import Navigation from "./Navigation";
import SerchBox from "./SerchBox";

export default function Header() {
    return(
        <header>
        <Navigation />
        <SerchBox />
        </header>
    );
}