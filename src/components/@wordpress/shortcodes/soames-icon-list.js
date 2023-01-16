import React from "react";

const SoamesIconList = ({ attributes }) => {

  const icons = [];
  if (!attributes.links) {
    attributes.links = [];
  }
  if (!attributes.labels) {
    attributes.labels = [];
  }
  if (!attributes.css) {
    attributes.css = [];
  }
  for (const i in attributes.images) {
    const imageUrl = attributes.images[i].replace(/['""]+/g, '"');
    const icon = {
      id: 'icon_' + i,
      imageUrl: imageUrl,
      label: attributes.labels[i] ? attributes.labels[i] : null,
      link: attributes.links[i] ? attributes.links[i] : null,
      css: attributes.css[i] ? attributes.css[i] : null,
    }
    icons.push(icon);
  }

  return(
    <section className="soames-section">
      <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {icons.map(icon => (   
          <a key={icon.id}
            className={`d-flex flex-column align-items-center text-decoration-none p-2 ` + icon.css}
            href={icon.link}
            target="_blank"
            rel="noreferrer">
            <img className="d-block mb-2" src={icon.imageUrl} alt="" height="116" loading="lazy" />
            <span className="text-muted">{icon.label}</span>
          </a>
        ))}
        </div>
      </div>
    </section>
  )

}

export default SoamesIconList;