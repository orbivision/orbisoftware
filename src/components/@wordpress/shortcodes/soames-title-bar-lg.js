import React from "react";

const SoamesTitleBarLg = ({ title, attributes }) => {
  const { subtitle, background } = attributes;
  
  const defaultBackground = 'https://picsum.photos/1080/720';

  const css = `
    .soames-background-title-bar-lg::after {
      background: url(${background ? background: defaultBackground});
      background-position: 50% 50%;
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      left: 0px;
      height: 176px;
      overflow: hidden;
      pointer-events: none;
      margin-top: 0px;
      transform: translate3d(0px, 0px, 0px);
    }
  `

  return(
    <>
      <style>{css}</style>
      <section className="soames-header-sm soames-parallax soames-background-title-bar-lg mt-5 mb-3">
        <div className="soames-overlay" style={{ opacity: 0.6, backgroundColor: 'rgb(46, 46, 46)' }}></div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="soames-white col-md-10">
              <h1 className="soames-section-title align-center soames-bold pb-3 mbr-fonts-style display-1">
                {title}
              </h1>
              {subtitle &&
                <h3 className="soames-section-subtitle align-center soames-light soames-white mbr-fonts-style display-5">
                  {subtitle}
                </h3>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )

}

export default SoamesTitleBarLg;