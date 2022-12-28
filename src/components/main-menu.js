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
                  <li key={item.id} className="nav-item">
                    {item.uri.includes('http') ? (
                      <a className="nav-link link text-white display-4"
                        href={item.uri}
                        target="_blank"
                        rel="noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.uri} className="nav-link link text-white display-4">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ) : (
                  <li key={item.id} className="nav-item dropdown">
                    <a className="nav-link link text-white dropdown-toggle display-4"
                      href={item.uri} data-toggle="dropdown-submenu"
                      aria-expanded="false">
                      {item.label}</a>
                    <div className="dropdown-menu">
                      <ul className="navbar-nav nav-dropdown nav-right">
                      {item.childItems.nodes.map(childItem => (
                        <li key={item.id}>
                          {childItem.uri.includes('http') ? (
                            <a
                              className="text-white dropdown-item display-4"
                              target="_blank"
                              rel="noreferrer"
                              href={childItem.uri}>{childItem.label}<br/></a>
                            ) : (
                              <Link to={childItem.uri} className="text-white dropdown-item display-4">
                                {childItem.label}
                              </Link>
                            )}
                        </li>
                      ))}
                      </ul>
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
