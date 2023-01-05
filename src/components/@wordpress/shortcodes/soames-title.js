import React from "react";

const SoamesTitle = ({ title }) => {

  return(
    <section className="soames-section content1 soames-title" id="content1">
      <div className="container">
        <div className="media-container-row">
          <div className="title col-12 col-md-8">
            <h2 className="align-center pt-5 pb-3 mbr-fonts-style display-2">
              { title }
            </h2>
          </div>
        </div>
      </div>
    </section>
  )

}

export default SoamesTitle;