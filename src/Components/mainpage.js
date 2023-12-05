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
    console.log(data)
    return (
        <div name='MainPage'>
            <Header data={data.data.data.main} />
            <About data={data.data.data.main} />
            <Resume data={data.data.data.resume} />
            <Portfolio data={data.data.data.portfolio} />
            <Contact data={data.data.data.main} />
            <Footer data={data.data.data.main} />
        </div>
    )
}

export default MainPage;
