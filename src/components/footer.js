import React from "react";

import FooterMenu from "./footer-menu";

const Footer = ({ title }) => {

  return (

    <section className="soames-footer" id="footer1">
      <div className="container">
        <div className="media-container-row content text-white">
          <div className="col-12 col-md-3">
            <div className="media-wrap">{` `}</div>
          </div>
          <div className="col-12 col-md-3 mbr-fonts-style display-7">
            <h5 className="pb-3">Links</h5>
            <FooterMenu />
          </div>
          <div className="col-12 col-md-3 mbr-fonts-style display-7">
            <h5 className="pb-3">
              Contact</h5>
            <p className="soames-text pr-3">
              fritz followed by ASCII 0x40 followed by the domain name of this site.
            </p>
            <p className="soames-text pt-3">
              © {new Date().getFullYear()}{` `}
              {title}<br/>
              Built with{` `}
              <a href="https://www.soames.app" target="_blank" rel="noreferrer">Soames</a>,
              {` `}
              <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a>,
              {` `}
              and <a href="https://wordpress.org/" target="_blank" rel="noreferrer">WordPress</a><br /><br/>
            </p>
          </div>
          <div className="col-12 col-md-3 mbr-fonts-style display-7">
            <h5 className="pb-3">{` `}</h5>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Footer;
