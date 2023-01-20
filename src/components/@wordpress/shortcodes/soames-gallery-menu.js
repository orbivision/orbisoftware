import React from "react";

const SoamesGalleryMenu = ({ attributes }) => {
  const { images, links, labels, css } = attributes;
  const menuItems = [];
  for (const i in images) {
    const imageUrl = images[i].replace(/['""]+/g, '"');
    const menuItem = {
      id: 'icon_' + i,
      imageUrl: imageUrl,
      label: labels && labels[i] ? labels[i] : null,
      link: links && links[i] ? links[i] : null,
      css: css && css[i] ? css[i] : null,
    }
    menuItems.push(menuItem);
  }

  return(
    <section className="features1 soames-gallery-menu">
      <div className="container-fluid">
        <div className="media-container-row">
          {menuItems.map(menuItem => (
            <div key={menuItem.id} className="card p-3 col-md-12 col-lg-3">
              <div className="card-wrapper">
                <div className="card-img">
                  <a href={menuItem.link}><img src={menuItem.imageUrl} alt={menuItem.label} title={menuItem.label} /></a>
                </div>
                <div className="card-box">
                  <h4 className="card-title pb-3 mbr-fonts-style display-7">
                    {menuItem.label}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default SoamesGalleryMenu;