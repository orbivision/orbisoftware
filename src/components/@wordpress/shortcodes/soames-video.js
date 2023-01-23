import React from "react";

const SoamesVideo = ({ attributes }) => {
  const { link, title } = attributes;

  return(
    <section className="soames-video-container">
      <figure className="soames-figure align-center container">
        <div className="video-block">
          <div className="video-wrapper">
            <iframe
              height="580"
              width="360"
              src={link}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </div>
        </div>
      </figure>
    </section>
  )

}

export default SoamesVideo;