import React from "react";

const SoamesIconList = ({ attributes }) => {
  const { images, links, labels, css } = attributes;
  const icons = [];
  for (const i in images) {
    const imageUrl = images[i].replace(/['""]+/g, '"');
    const icon = {
      id: 'icon_' + i,
      imageUrl: imageUrl,
      label: labels && labels[i] ? labels[i] : null,
      link: links && links[i] ? links[i] : null,
      css: css && css[i] ? css[i] : null,
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