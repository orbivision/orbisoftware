import React from "react";

import HeaderMenu from "./header-menu";
import Logo from "./logo";

const Header = ({ title, isHomePage }) => {

  return (
    
    <section className="menu soames-menu" id="menu1">
      <nav
        className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <Logo title={title} />
        <HeaderMenu />
      </nav>
    </section>
  )
}

export default Header;
