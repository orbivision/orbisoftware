import React from "react";

const SoamesIconList = ({ attributes }) => {

  const icons = [];
  if (!attributes.labels) {
    attributes.labels = [];
  }
  if (!attributes.css) {
    attributes.css = [];
  }
  for (const i in attributes.images) {
    const imageUrl = attributes.images[i].replace(/['""]+/g, '"');
    const menuItem = {
      id: 'icon_' + i,
      imageUrl: imageUrl,
      label: attributes.labels[i] ? attributes.labels[i] : null,
      css: attributes.css[i] ? attributes.css[i] : null,
    }
    icons.push(menuItem);
  }

  return(
    <section className="soames-section">
      <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {icons.map(icon => (   
          <a key={icon.id} className={`d-flex flex-column align-items-center text-decoration-none p-2 ` + icon.css} href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img className="d-block mb-2" src={icon.imageUrl} alt="" width="116" height="116" loading="lazy" />
            <span className="text-muted">{icon.label}</span>
          </a>
        ))}
        </div>
      </div>
    </section>
  )

}

export default SoamesIconList;