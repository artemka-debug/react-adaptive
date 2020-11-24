import NavBar from "./Components/Navbar";
import React from "react";
import ParallaxBackground from "./Components/ParallaxBackground";
import Info from "./Components/Info";
import {ParallaxProvider} from "react-scroll-parallax";

const App = () => (
    <>
        <NavBar/>
        <ParallaxProvider>
            <ParallaxBackground/>
        </ParallaxProvider>
        <Info/>
    </>
);

export default App;
