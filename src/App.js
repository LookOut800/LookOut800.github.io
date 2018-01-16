import React, { Component } from 'react';

import './App.css';
import cv from './content/cv.json';
import avatar from './content/charles_icon.jpeg';
import appNav from './components/appNav';
import appFooter from './components/appFooter';
import projectSection from './components/projectSection';

const { name, projects, skills, summary, experience, links } = cv;
const { technical, design } = experience;
const { languages } = skills;

const mapSkills = () => {
  return (
    <section className="skillsSection">
      <h4>Technical Skills</h4>
      <ul>
        {languages.map((lang, key) => {
          return <li key={key}>{lang}</li>
        })}
      </ul>
    </section>
  );
};

const mapExperiences = (experiences) => {
  return experiences.map((experience, key) => {
    return (
      <section className="experience" key={key}>
        <h4>{experience.name}</h4>
        <p>{experience.role}</p>
        <p>{experience.details}</p>
      </section>
    )
  });
};

class App extends Component {
  state = {
    scrollTop: 0
  };

  handleScroll = (e) => {
    this.setState({
      scrollTop: window.scrollY
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  render() {
    return (
      <div id="appRoot" className="App">
        {appNav(this.state.scrollTop)}
        <header className="App-header">
          <h1 className="App-title">{name}</h1>
        </header>
        <div id="contentContainer" className="contentContainer">
          <h2 id="About">About</h2>
          <div className="about">
            <img alt="portrait of the artist as a young man" className="avatar" src={avatar} />
            <p className="App-intro">{summary} </p>
          </div>
          <h2 id="Projects">Projects</h2>
          <div className="projectSection">
            {projectSection(projects)}
          </div>
          <h2 id="Experience">Experience</h2>
          {mapSkills()}
          {mapExperiences(technical)}
          {mapExperiences(design)}
        </div>
        {appFooter(links)}
      </div>
    );
  }

}

export default App;
