import React from "react";
import { Link } from "gatsby";
import parse from "html-react-parser";

import MainMenu from "./main-menu";

const Header = ({ title, isHomePage }) => {

  return (
    <>
      <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header>
      <MainMenu />
    </>
  )
}

export default Header;
