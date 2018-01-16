import React from 'react';

const projectSection = (sections) => {
  return sections.map(({ title, details, icon }, index) => {
    return (
      <section className="colorCard" key={index}>
        <h3>{title}</h3>
        <p className="cardIcons">
        <i className={icon} />
        </p>
        <p>{details}</p>
      </section>
    );
  });
};

export default projectSection;