import React from "react";
// import ReactGA from "react-ga";
// import $ from "jquery";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
// import RoutesManager from "./RoutesManager";
import { trefoil } from 'ldrs'
import { useEffect, useState } from "react";

export const MainPage = (data) => {
    const [loading, setLoading] = useState(true)
    trefoil.register()

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])
    if (loading) {
        return (
            <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4" 
            color="white" 
            ></l-trefoil>
        )
    } else {
        return (
            <>
                <div style={{height:"100vh"}}><Header data={data.data.main} /></div>
                <About data={data.data.main} />
                <Resume data={data.data.resume} />
                <Portfolio data={data.data.portfolio} />
                <Contact data={data.data.main} />
                <Footer data={data.data.main} />
            </>
        )
    }
}

export default MainPage;
