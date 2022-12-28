import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const MainMenu = ({ title }) => {
  const { allWpMenuItem } = useStaticQuery(
    graphql`
      query WpMenu {
        allWpMenuItem(filter: {locations: {eq: GATSBY_HEADER_MENU}, parentDatabaseId: {eq: 0}}) {
          nodes {
            id
            label
            parentDatabaseId
            locations
            path
            uri
            childItems {
              nodes {
                id
                label
                uri
              }
            }
          }
        }
      }
    `
  )

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
        <div className="menu-logo">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-5"
              href="./">
              &nbsp;&nbsp;{title}</a></span>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
            {allWpMenuItem.nodes.map(item => (
              item.path !== "/home/" && (
                item.childItems.nodes.length === 0 ? (
                  <li className="nav-item">
                    <Link className="nav-link link text-white display-4" to={item.uri}>
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item dropdown">
                    <a className="nav-link link text-white dropdown-toggle display-4"
                      href={item.uri} data-toggle="dropdown-submenu"
                      aria-expanded="false">
                      {item.label}</a>
                    <div className="dropdown-menu">
                      {item.childItems.nodes.map(childItem => (
                        <a
                          className="text-white dropdown-item display-4"
                          href={childItem.uri}>{childItem.label}<br/></a>
                      ))}
                    </div>
                  </li>    
                )                
              )
            ))}
          </ul>
        </div>
      </nav>
    </section>
      
    
  )
}

export default MainMenu;
