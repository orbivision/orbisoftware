import React from "react";

const SoamesTextList = ({ content }) => {

  const lineItems = content.split('__SOAMES_LI__');

  return (
    <section className="soames-section article soames-list pb-0">
      <div className="container">
        <div class="media-container-row">
          <div class="soames-text
            counter-container
            col-12
            col-md-10
            mbr-fonts-style
            pt-0
            display-7">
            <ul>
              {lineItems.map((lineItem, key) => (
                <li key={key}>
                  {lineItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )

}

export default SoamesTextList;