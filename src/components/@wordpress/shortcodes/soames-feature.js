import React from "react";

const SoamesFeature = ({ content, attributes }) => {
  const { image, title, css } = attributes;

  const paragraphs = content.split('__SOAMES_P__');

  return(
    <section className="soames-features">
      <div className="container">   
        <div className="col-md-12">
          <div className="media-container-row">
            <div className=" align-left aside-content">
              {title &&
                <h2 className="mbr-title pt-2 mbr-fonts-style display-2">
                  <div>{title}</div>
                </h2>
              }
              <div className="block-content">
                <div className={`card ` + css}>
                  <div className="media">
                    <div className="media-body"></div>
                  </div>                
                  <div className="card-box">
                    {paragraphs.map(paragraph => (
                      <p key={paragraph.substring(1,10)} className="block-text mbr-fonts-style display-7">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {image &&
              <div className="soames-figure" style={{ width: '50%' }}>
                <img src={image} alt={title} title={title} />
              </div>
            }
          </div>
        </div> 
      </div>          
    </section>
  )

}

export default SoamesFeature;