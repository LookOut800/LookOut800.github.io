import React from 'react';

const appFooter = (links) => {
  return (
    <div id="appFooter" className="appFooter">
      {
        links.map((link, key) => {
          const { name, url, icon } = link;

          return (
            <div className="footerLink">
              <a key={key} href={url}>
              <i alt={name} className={icon} />
              </a>
            </div>
          );
        })
      }
    </div>
  )
};

export default appFooter;