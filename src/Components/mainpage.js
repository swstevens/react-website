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

export const MainPage = (data) => {
    return (
        <>
            <Header data={data.data.main} />
            <About data={data.data.main} />
            <Resume data={data.data.resume} />
            <Portfolio data={data.data.portfolio} />
            <Contact data={data.data.main} />
            <Footer data={data.data.main} />
        </>
    )
}

export default MainPage;
