import React, { Component } from 'react';
import './App.css';
import cv from './content/cv.json';

const { name, projects, skills, summary, experience } = cv;
const { technical, design } = experience;
const { languages } = skills;

const mapSection = (sections) => {
  return sections.map(({ title, details }, index) => {
    return (
      <section key={index}>
        <h4>
          <a src="foo.com">{title}</a>
        </h4>
        <p>{details}</p>
      </section>
    );
  });
};

const mapSkills = () => {
  return (
    <div>
      {languages.map((lang, key) => {
        return <p key={key}>{lang}</p>
      })}
    </div>
  );
};

const mapExperiences = (experiences) => {
  return experiences.map((experience, key) => {
    return (
      <section key={key}>
        <h4>{experience.name}</h4>
        <p>{experience.role}</p>
        <p>{experience.details}</p>
      </section>
    )
  });
};

const appNav = () => {
  return (
    <div className="appNav">appNav</div>
  )
};


const appFooter = () => {
  return (
    <div className="appFooter">appFooter</div>
  )
};

const showNav = (scrollTop) => {
  return scrollTop > 150
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
        {showNav(this.state.scrollTop) && appNav()}
        <header className="App-header">
          <h1 className="App-title">{name}</h1>
        </header>
        <p className="App-intro"> {summary} </p>
        {mapSkills()}
        {mapExperiences(technical)}
        {mapExperiences(design)}
        {mapSection(projects)}
        {appFooter()}
      </div>
    );
  }
}

export default App;
