import React from "react";

const SoamesTextBlock = ({ text }) => {

  return(
    <section className="soames-section article soames-article">
      <div className="container">
        <div className="inner-container" style={{ width: "100%" }}>
          <div className="section-text align-center mbr-fonts-style display-7 pb-2">
            {text}          
          </div>
        </div>
      </div>
    </section>
  )

}

export default SoamesTextBlock;