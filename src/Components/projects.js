import React from "react";
import Resume from "./Resume";

// import ReactGA from "react-ga";
// import $ from "jquery";
import "../App.css";
// import Header from "./Header";
// import Resume from "./Resume";


export const ProjectsPage = (data) => {
  return (
    <div className="projectPage">
      <Resume data={data.data.resume} />
    </div>
  )
}


export default ProjectsPage;
