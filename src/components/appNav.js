import React from 'react';

import cv from '../content/cv.json';

const { name } = cv;

const isNavActive = (scroll) => {
  return scroll >= 150;
};

const navBackgroundStyle = (scroll) => {
  if (isNavActive(scroll)) {
    return { backgroundColor: "rgba(255, 255, 255, .8)" }
  }
  return { backgroundColor: "rgba(255, 255, 255, 0)" };
};

const titleAnchor = (name) => {
  return <a href="#appRoot">{name}</a>
};

const appNav = (scrollTop) => {
  return (
    <div style={navBackgroundStyle(scrollTop)} id="appNav" className="appNav">
      <div className="navLeft">
        <h2 className="navTitle">
          {isNavActive(scrollTop) && titleAnchor(name)}
        </h2>
      </div>
      <div className="navRight">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Experience">Experience</a>
        <a href="#appFooter">Contact</a>
      </div>
    </div>
  )
};

export default appNav;