import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectsPage from './Components/projects'
import MainPage from './Components/mainpage'

const HOME_ROUTE = '/'
const PROJECTS_ROUTE = '/projects'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={HOME_ROUTE} element={<MainPage data={this.state.resumeData} />}/>
                <Route exact path={PROJECTS_ROUTE} element={<ProjectsPage data={this.state.resumeData}/>}/>
            </Routes>
        </BrowserRouter>
    );
  }
}

export default App;
