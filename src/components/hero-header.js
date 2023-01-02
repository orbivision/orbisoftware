import React from "react";

const HeroHeader = ({ title, subhead }) => {

  return (
    <section
      className="soames-header-lg soames-parallax soames-background-lg"
      id="header1">
      <div className="soames-overlay"
        style={{ opacity: 0.6, backgroundColor: 'rgb(46, 46, 46)' }} />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="soames-white col-md-10">
            <h1 className="soames-section-title align-center soames-bold pb-3 mbr-fonts-style display-1">
              {title}
            </h1>
            <div className="soames-section-subtitle align-center soames-light soames-white mbr-fonts-style display-5">
              {subhead}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHeader;
